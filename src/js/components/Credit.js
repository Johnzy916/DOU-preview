import React, { useContext, useEffect, useRef } from 'react';
import { StateContext } from '../context/StateContext';
import { NotificationManager } from 'react-notifications';
import { balanceText, demandSA, demandBill } from '../../fixtures/demandPreview';
// dayjs
import * as dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs().format()
// Extend dayjs with the customParseFormat plugin
dayjs.extend(customParseFormat);

export default function Rates() {
    // global state
    const { state, creditDispatch } = useContext(StateContext);
    const { actualBalance, demand, demandDateValue, billDateValue,
        saInputValue, billInputValue, isShowingDemandInfo,
        balanceInputValue } = state;

    const { finalPerDiem, finalDemandAmount, demandDate, lastBillDate,
        totalCurrentlyDue, remainingCredit, flatChargesData, meterChargesData,
        daysSinceLastBill, daysSinceMeterBilled, finalCredit } = demand;

    // refs
    const balanceInput = useRef(null);
    const demandDateInput = useRef(null);
    const lastBillDateInput = useRef(null);
    const totalSAInput = useRef(null);
    const prevBillSegInput = useRef(null);

    // SET TEST DATA FOR PREVIEW
    useEffect(() => {
        creditDispatch({ type: 'SET_BALANCE_INPUT', value: balanceText });
        creditDispatch({ type: 'SET_DEMAND_DATE', value: '08-04-2022' });
        creditDispatch({ type: 'SET_BILL_DATE', value: '07-04-2022' });
        creditDispatch({ type: 'SET_SA_INPUT', value: demandSA });
        creditDispatch({ type: 'SET_BILL_INPUT', value: demandBill });
    }, []);

    const handleBalance = (e) => {
        // get amounts
        const total = balanceInput.current.value.match(/(?<=\$)-?\d+.\d+(?=\s+\$)/g)
            ?.map(str => {
                return roundDecimals(str);
            })
            // filter amounts above 0 and combine
            ?.filter(num => num >= 0)
            ?.reduce((acc, cur) => roundDecimals(acc + cur));
        // set balance or throw error
        if (total) {
            creditDispatch({ type: 'SET_ACTUAL_BALANCE', balance: total })
            balanceInput.current.value = '';
        } else {
            NotificationManager.warning('Paste SA Premise List', 'Invalid input data', 2000);
            balanceInput.current.value = '';
        }
    }

    const handleClear = (e) => {
        creditDispatch({ type: 'RESET_CREDIT_STATE' });
        creditDispatch({ type: 'RESET_INPUT_VALUES' });
        creditDispatch({ type: 'TOGGLE_IS_SHOWING_AMOUNT' });
    }

    const handleToggleMoreInfo = (e) => {
        e.target.classList.toggle("active");

        const infoPanel = document.querySelector('.demand-explanation');

        if (infoPanel.style.maxHeight) {
            infoPanel.style.maxHeight = null;
        } else {
            infoPanel.style.maxHeight = `${infoPanel.scrollHeight}px`;
        }
    }

    // function for rounding to 2 decimal places.
    const roundDecimals = (num) => {
        if (typeof num == 'string') {
            num = parseFloat(num)
        }
        return Number(`${Math.round(parseFloat(`${num}e2`))}e-2`);
    }

    const handleDemand = (e) => {
        // temp storage
        let flatCharges = 0,
            meterCharges = 0,
            demandInfo = {
                finalPerDiem: 0,
                finalDemandAmount: 0
            },
            dataPerType = {
                perDiem: 0,
                proratedAmount: 0,
                proratedWaterAmount: 0
            },
            meterChargesData = { ...dataPerType },
            flatChargesData = { ...dataPerType };

        // return if inputs are not all filled out
        if (!demandDateInput.current.value
            || !lastBillDateInput.current.value
            || !totalSAInput.current.value
            || !prevBillSegInput.current.value) {
            return NotificationManager.warning('Provide all input data', 'Missing Info', 2000);
        }
        
        // create DateTime from dates and push to demandInfo
        const demandDate = dayjs(demandDateInput.current.value, 'MM-DD-YYYY');
        const lastBillDate = dayjs(lastBillDateInput.current.value, 'MM-DD-YYYY');
        demandInfo['demandDate'] = demandDate.format('MM-DD-YYYY');
        demandInfo['lastBillDate'] = lastBillDate.format('MM-DD-YYYY');

        // return if dates are not valid
        if (!demandDate.isValid() || !lastBillDate.isValid()) {
            return NotificationManager.warning('Use MM-DD-YYYY', 'Invalid date(s)', 2000);
        }

        // return if dates are the same
        if (demandDate.diff(lastBillDate, 'day') == 0) {
            return NotificationManager.warning('Dates cannot be the same', 'Invalid dates', 2000);
        }

        // return if dates are reversed
        if (demandDate.diff(lastBillDate, 'day') < 0) {
            return NotificationManager.warning('Demand date is prior to last bill', 'Invalid date(s)', 2000);
        }

        // set number of days from last bill until demand
        demandInfo['daysSinceLastBill'] = demandDate.diff(lastBillDate, 'day');
        // get current balances     
        const currentAmounts = totalSAInput.current.value.match(/(?<=\$)-?\d+.\d+(?=\s+\$)/g)
            ?.map(str => roundDecimals(str));
        // throw error if amounts cannot be extracted
        if (!currentAmounts) {
            return NotificationManager.warning('Paste SA premise info', 'Invalid SA data', 2000);
        }
        // set current amount due (SAs not including water credit)
        demandInfo['totalCurrentlyDue'] = roundDecimals(currentAmounts
            ?.filter(num => num >= 0)
            ?.reduce((acc, cur) => acc + cur));
        // add current amount due to final demand amount
        demandInfo['finalDemandAmount'] += roundDecimals(demandInfo['totalCurrentlyDue']);
        // set remaining credit
        demandInfo['remainingCredit'] = Math.abs(currentAmounts
            ?.filter(num => num < 0)[0] || 0);
        // set initial amount for final credit
        demandInfo['finalCredit'] = Math.abs(currentAmounts
            ?.filter(num => num < 0)[0] || 0);

        // get last bill balances
        const segments = prevBillSegInput.current.value.match(/(?<=\/\s)[\w\s&-]+/g);
        const billAmounts = prevBillSegInput.current.value
            ?.match(/(?<endDate>\d{2}-\d{2}-\d{4}),\s(?<segAmount>\$\d+.\d+)/g);

        // if segments don't match amounts, return
        if (segments?.length !== billAmounts?.length) {
            return NotificationManager.warning('Paste full bill data', 'Invalid bill data', 2000);
        }

        // function for pushing flat charges to temp storage
        const pushFlatCharges = (key, amount) => {
            key ? demandInfo[key] = roundDecimals(amount) : null;
            flatCharges = roundDecimals(flatCharges + amount);
        }

        // function for setting days since meter billed
        const setDaysSinceMeterBilled = (billedDate) => {
            // push meter date to state
            const parsedBilledDate = dayjs(billedDate, 'MM-DD-YYYY');
            demandInfo['meterDate'] = billedDate
            demandInfo['daysSinceMeterBilled'] = dayjs(demandDateInput.current.value, 'MM-DD-YYYY').diff(parsedBilledDate, 'day');
        }

        // parse amounts from bill
        segments.forEach((segment, i) => {
            // get date and amount for the segment
            const [date, amount] = billAmounts[i].split(', $');
            const billAmount = roundDecimals(amount);
            // if water/wastewater/irrigation
            // check if it's metered or flat
            // and push the info to data storage
            if (segment.match(/water|wastewater|irrigation/i)) {
                if (segment.match(/wastewater/i)) {
                    if (segment.match(/treatment/i)) {
                        flatCharges = roundDecimals(flatCharges + billAmount);
                    } else {
                        if (segment.match(/meter/i)) {
                            demandInfo['wasteMetered'] = billAmount;
                            meterCharges = roundDecimals(meterCharges + billAmount);
                            if (!demandInfo['daysSinceMeterBilled']) setDaysSinceMeterBilled(date);
                        } else pushFlatCharges('wasteFlat', billAmount);
                    }
                } else if (segment.match(/water/i)) {
                    if (segment.match(/meter/i)) {
                        demandInfo['waterMetered'] = billAmount;
                        meterCharges = roundDecimals(meterCharges + billAmount);
                        if (!demandInfo['daysSinceMeterBilled']) setDaysSinceMeterBilled(date);
                    } else pushFlatCharges('waterFlat', billAmount);
                } else {
                    if (segment.match(/meter/i)) {
                        demandInfo['irrigationMetered'] = billAmount;
                        meterCharges = roundDecimals(meterCharges + billAmount);
                        if (!demandInfo['daysSinceMeterBilled']) setDaysSinceMeterBilled(date);
                    } else pushFlatCharges('irrigationFlat', billAmount);
                }
            // else if overpayment -- do nothing
            } else if (segment.match(/overpayment/i)) {
                null;
            // else, we know it's flat -- push to temp storage
            } else {
                pushFlatCharges(null, billAmount);
            }
        })

        // function for setting demand info
        const setDemandInfo = (dataObject, totalCharges, numOfDays, waterType) => {
            // Per diem = total of charges for type / 30
            dataObject['perDiem'] = roundDecimals(totalCharges / 30);
            // add per diem to final numbers
            demandInfo['finalPerDiem'] = roundDecimals(demandInfo['finalPerDiem'] + dataObject['perDiem']);
            // prorated amount = per diem * number of days
            dataObject['proratedAmount'] = roundDecimals(roundDecimals(dataObject['perDiem']) * numOfDays);
            // prorated amount for water only
            dataObject['proratedWaterAmount'] = roundDecimals(roundDecimals(((demandInfo[waterType] || 0) / 30)) * numOfDays);
        }

        // function for handling water credit
        const handleCredit = (dataObject, waterType) => {
            // check if the prorated amount of water is less than the remaining credit.
            // If so, remove prorated amount of water from total prorated amount
            // If not, subtract the difference of remaining credit and prorated water amount
            // Adjust remaining balance
            if (demandInfo[waterType]) {
                if (dataObject['proratedWaterAmount'] < demandInfo['finalCredit']) {
                    dataObject['proratedAmount'] = roundDecimals(dataObject['proratedAmount'] - dataObject['proratedWaterAmount']);
                    demandInfo['finalCredit'] = roundDecimals(demandInfo['finalCredit'] - dataObject['proratedWaterAmount']);
                } else {
                    dataObject['proratedAmount'] = roundDecimals(dataObject['proratedAmount'] - demandInfo['finalCredit']);
                    demandInfo['finalCredit'] = 0;
                }
            }
        }

        //// flat charges
        // set demand info for flat water
        setDemandInfo(flatChargesData, flatCharges, demandInfo['daysSinceLastBill'], 'waterFlat');
        // handle the water credit
        handleCredit(flatChargesData, 'waterFlat');

        //// meter charges
        // set demand info for metered water
        setDemandInfo(meterChargesData, meterCharges, demandInfo['daysSinceMeterBilled'], 'waterMetered');
        // handle water credit
        handleCredit(meterChargesData, 'waterMetered');

        // set final data
        demandInfo['finalPerDiem'] = roundDecimals(flatChargesData['perDiem'] + meterChargesData['perDiem']);
        // add flat prorated amount to final amount
        demandInfo['finalDemandAmount'] = roundDecimals(demandInfo['finalDemandAmount'] + flatChargesData['proratedAmount']);
        // add metered prorated amount to final amount
        demandInfo['finalDemandAmount'] = roundDecimals(demandInfo['finalDemandAmount'] + meterChargesData['proratedAmount']);

        // set the final amount to fixed decimals
        // demandInfo['finalDemandAmount'] = roundDecimals(demandInfo['finalDemandAmount']);

        // combine all data into one object
        demandInfo = {
            ...demand,
            ...demandInfo,
            flatCharges,
            meterCharges,
            flatChargesData,
            meterChargesData
        }

        // push info to the state
        creditDispatch({ type: 'SET_DEMAND_INFO', demand: demandInfo });

        // UNCOMMENT FOR PROD /////////////////////////
        // clear inputs
        demandDateInput.current.value = '';
        lastBillDateInput.current.value = '';
        totalSAInput.current.value = '';
        prevBillSegInput.current.value = '';
        creditDispatch({ type: 'RESET_INPUT_VALUES' });

        // hide form and show output data
        creditDispatch({ type: 'TOGGLE_IS_SHOWING_AMOUNT' });

        // TESTING ///////////////////////////////////
        // console.log('demandInfo: ', demandInfo);
    }

    return (
        <>
            <div className="credit-container">
                <section>
                    <h2>Quick balance</h2>
                    <textarea
                        placeholder="Paste SA Premise List..."
                        defaultValue={balanceInputValue}
                        ref={balanceInput}
                    ></textarea>
                    <div className='quick-balance-footer'>
                        <button
                            className="btn-secondary"
                            onClick={(e) => handleBalance(e)}
                        >Get actual balance</button>
                        <div className='amount-due'>
                            <span>Balance:</span>
                            <span className='actual-balance'>${roundDecimals(actualBalance).toFixed(2)}</span>
                        </div>
                    </div>
                </section>
            </div>
            <div className="demand-container">
                <section>
                    <h2>Manual Demand</h2>
                    <form className={`${isShowingDemandInfo ? 'display-none' : ''}`}>
                        <div className="flexible-inputs">
                            <input 
                                type="text" 
                                ref={demandDateInput} 
                                placeholder="Demand date"
                                defaultValue={demandDateValue}
                                onChange={(e) => {
                                    creditDispatch({ type: 'SET_DEMAND_DATE' , value: e.target.value});
                                }}
                            />
                            <input 
                                type="text" 
                                ref={lastBillDateInput} 
                                placeholder="Last bill date"
                                defaultValue={billDateValue}
                                onChange={(e) => {
                                    creditDispatch({ type: 'SET_BILL_DATE' , value: e.target.value});
                                }}
                            />
                        </div>
                        <textarea
                            placeholder="Paste SA Premise List..."
                            ref={totalSAInput}
                            defaultValue={saInputValue}
                            onChange={(e) => {
                                creditDispatch({ type: 'SET_SA_INPUT' , value: e.target.value});
                            }}
                        ></textarea>
                        <textarea
                            placeholder="Paste Last Billed Segments..."
                            ref={prevBillSegInput}
                            defaultValue={billInputValue}
                            onChange={(e) => {
                                creditDispatch({ type: 'SET_BILL_INPUT' , value: e.target.value});
                            }}
                        ></textarea>
                    </form>
                    <div className='manual-demand-footer'>
                        <div className='demand-buttons'>
                            <button
                                className={`btn-secondary ${ isShowingDemandInfo ? 'display-none' : '' }`}
                                onClick={(e) => handleDemand(e)}
                            >Get amounts</button>
                            <button
                                className={`btn-clear ${isShowingDemandInfo ? '' : 'display-none'}`}
                                onClick={(e) => handleClear(e)}
                            >Clear</button>
                        </div>
                        <div className={`demand-amounts ${isShowingDemandInfo ? '' : 'display-none'}`}>
                            <div>
                                <span>Per diem:</span>
                                <span>${finalPerDiem.toFixed(2)}</span>
                            </div>
                            <div>
                                <span>Total:</span>
                                <span>${finalDemandAmount.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <div className={`more-info-container ${isShowingDemandInfo ? '' : 'display-none'}`}>
                        <section>
                            <h3>More Information</h3>
                            <p>Account has received credit through the California Water and Wastewater Arrearage Program. Any remaining credit at the time of the owner change cannot be refunded and will be returned to the State. The prorated amount good through <span>{`${demandDate}`}</span> is <span>{`$${finalDemandAmount.toFixed(2)}`}</span>.</p>
                        </section>
                        <button
                            className="accordion"
                            onClick={(e) => handleToggleMoreInfo(e)}
                        >Why this amount?<span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                </svg>
                            </span></button>
                        <section className="demand-explanation panel">
                            <div>
                                <h4>From SA Premise List</h4>
                                <p>{`As of ${lastBillDate}, amount due is: `}<span>{`$${totalCurrentlyDue.toFixed(2)}`}</span></p>
                                <p>Water credit remaining: <span>{`$${remainingCredit.toFixed(2)}`}</span></p>
                            </div>
                            <div>
                                <h4>From Last Bill Segment</h4>
                                <p>Per diem for the flat charges is: <span>{`$${flatChargesData?.perDiem.toFixed(2)}`}</span></p>
                                <p>Prorated flat charges for <span>{`${daysSinceLastBill}`}</span> days is <span>{`$${roundDecimals(flatChargesData?.perDiem * daysSinceLastBill).toFixed(2)}`}</span></p>
                                <p>Per diem for the metered charges is: <span>{`$${meterChargesData?.perDiem.toFixed(2)}`}</span></p>
                                <p>Prorated metered charges for <span>{`${daysSinceMeterBilled}`}</span> days is <span>{`$${roundDecimals(meterChargesData?.perDiem * daysSinceMeterBilled).toFixed(2)}`}</span></p>
                                <p>Sum of both prorated amounts: <span>{`$${roundDecimals((flatChargesData?.perDiem * daysSinceLastBill) + (meterChargesData?.perDiem * daysSinceMeterBilled)).toFixed(2)}`}</span></p>
                            </div>
                            <div>
                                <h4>Regarding the credit</h4>
                                <p>Prorated amount for flat water only is: <span>{`$${flatChargesData?.proratedWaterAmount.toFixed(2)}`}</span></p>
                                <p>Prorated amount for metered water only is: <span>{`$${meterChargesData?.proratedWaterAmount.toFixed(2)}`}</span></p>
                                <p>Total prorated amount for water is: <span>{`$${roundDecimals(flatChargesData?.proratedWaterAmount + meterChargesData?.proratedWaterAmount).toFixed(2)}`}</span></p>
                                {
                                    flatChargesData?.proratedWaterAmount + meterChargesData?.proratedWaterAmount
                                        < remainingCredit ?
                                        <p>Remaining credit is <span>more</span> than the prorated water amount<br></br>
                                            Therefore, subtract <span>prorated water</span> from the prorated sum</p> :
                                        <p>Remaining credit is <span>less</span> than the prorated water amount<br></br>
                                            Therefore, subtract <span>credit amount</span> from the prorated sum</p>
                                }
                            </div>
                            <div>
                                <h4>A little math...</h4>
                                <p>After the credit, the new prorated amount is: <span>{`$${roundDecimals((flatChargesData?.proratedAmount) + (meterChargesData?.proratedAmount)).toFixed(2)}`}</span></p>
                                <p>The final CWWAPP credit balance is: <span>{`$${finalCredit.toFixed(2)}`}</span></p>
                                <p>Combine the two per diems (final): <span>{`$${finalPerDiem.toFixed(2)}`}</span></p>
                                <p>Combine prorated amount with current amount due (final): <span>{`$${finalDemandAmount.toFixed(2)}`}</span></p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}
