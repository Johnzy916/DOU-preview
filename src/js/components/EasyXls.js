import React, { useContext, useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import icons from '../icons/icons';
import { StateContext } from '../context/StateContext';
import parseTableData from '../utils/parseTableData';
import { parseInputData } from '../utils/parseInputData';
import OutputContainer from './OutputContainer';
import { createXlsx } from '../utils/createXlsx';
import { testData } from '../../fixtures/data';

export default function EasyXls() {
    // access state and dispatch
    const { state, pdfDispatch } = useContext(StateContext);
    // create ref for printing
    const printComponentRef = useRef();
    // useReactToPrint
    const handlePrint = useReactToPrint({
        content: () => printComponentRef.current,
        documentTitle: `${state.account || 'past'}_${state.type ? state.type.replace(' ', '_') : 'financial_history'}`
      });

    // SET TEST DATA FOR PREVIEW
    useEffect(() => {
        pdfDispatch({ type: 'SET_YEARS', value: '2020-2021' });
        pdfDispatch({ type: 'SET_TYPE', value: 'Payments' });
        pdfDispatch({ type: 'SET_ACCOUNT', value: '0123456789' });
        pdfDispatch({ type: 'SET_OWNER', value: 'Test Customer' });
        pdfDispatch({ type: 'SET_ADDRESS', value: '4321 Imagine Ave' });
        pdfDispatch({ type: 'SET_DATA_INPUT', value: testData });
    }, []);

    // handle create or print pdf table
    const handleSubmit = async (e, isPrintAsPDF, isGenerateXlsx) => {
        e.preventDefault();
        const tableData = parseTableData(state, e);
        // if there's table data, handle table creation
        if (tableData) {
            await pdfDispatch({ type: 'SET_TABLE_DATA', tableData })
            await pdfDispatch({ type: 'SHOW_OUTPUT_CONTAINER' });
            pdfDispatch({ type: 'CLEAR_DATA_INPUT_FIELD' });
            if (isPrintAsPDF) handlePrint();
            if (isGenerateXlsx) createXlsx(state);
        // else if there's a table displaying, but no data
        // print or generate xlsx for the already showing table
        } else if (!tableData && isPrintAsPDF && state.showOutputContainer) {
            handlePrint();
        } else if (!tableData && isGenerateXlsx && state.showOutputContainer) {
            createXlsx(state);
        // else incorrect data, hide container
        } else {
            pdfDispatch({ type: 'DISABLE_OUTPUT_CONTAINER' });
        }
    }

    const handlePaste = (e) => {
        const text = (e.clipboardData || window.clipboardData).getData('text');
        const inputData = parseInputData(text);
        // show 'include payoff' checkbox if data includes it
        if (inputData.type == 'tableWithPayoffs') {
            pdfDispatch({ type: 'ENABLE_PAYOFF_CHECKBOX' });
        } else {
            pdfDispatch({ type: 'SET_INCLUDE_PAYOFF', enabled: false });
            pdfDispatch({ type: 'DISABLE_PAYOFF_CHECKBOX' });
        }
    }

    // handle clear form
    const handleClear = (e) => {
        e.preventDefault();
        pdfDispatch({ type: 'HIDE_OUTPUT_CONTAINER' });
        pdfDispatch({ type: 'RESET_FORM' });
        pdfDispatch({ type: 'DISABLE_PAYOFF_CHECKBOX' });
    }

    return (
    <>
        <form className="data-form" autoComplete="off">
        <div className="data-form__flexible-input-container">
            <label>
                <span>{icons.calendar}</span>
                <input 
                    id="year" 
                    name="year" 
                    type="text" 
                    placeholder="Year(s)" 
                    value={state.years}
                    onChange={e => pdfDispatch({ type: 'SET_YEARS', value: e.target.value })}
                />
            </label>

            <label>
                <span>{icons.pageHeading}</span>
                <input 
                    id="custom-input" 
                    name="customInput" 
                    type="text" 
                    placeholder="Type of data" 
                    value={state.type}
                    onChange={e => pdfDispatch({ type: 'SET_TYPE', value: e.target.value })}
                />
            </label>

            <label>
                <span>{icons.hash}</span>
                <input 
                    id="account" 
                    name="account" 
                    type="text" 
                    placeholder="Account" 
                    value={state.account}
                    onChange={e => pdfDispatch({ type: 'SET_ACCOUNT', value: e.target.value })}
                />
            </label>

            <label>
                <span>{icons.person}</span>
                <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Owner name"
                    value={state.owner}
                    onChange={e => pdfDispatch({ type: 'SET_OWNER', value: e.target.value })}
                />
            </label>
        </div>
        <div className="data-form__full-input-container">
            <label className="full-width">
                    <span>{icons.home}</span>
                    <input 
                        id="address" 
                        name="address" 
                        type="text" 
                        placeholder="Property address" 
                        value={state.address}
                        onChange={e => pdfDispatch({ type: 'SET_ADDRESS', value: e.target.value })}
                    />
            </label>

            <textarea 
                id="info-input" 
                className="full-width" 
                placeholder="Paste data table..."
                value={state.dataInput}
                onChange={e => pdfDispatch({ type: 'SET_DATA_INPUT', value: e.target.value })}
                onPaste={e => handlePaste(e)}
            ></textarea>
        </div>
        <div id="checkbox-container" className="full-width">
            <div>
                <input 
                    id="reverse-order" 
                    type="checkbox" 
                    checked={state.isReverseOrder}
                    onChange={e => pdfDispatch({ type: 'SET_IS_REVERSE' })}
                />
                <label htmlFor="reverse-order">Reverse order</label>
            </div>
            <div>
                <input 
                    id="include-total" 
                    type="checkbox" 
                    checked={state.includeTotal}
                    onChange={e => pdfDispatch({ type: 'SET_INCLUDE_TOTAL' })}
                />
                <label htmlFor="include-total">Include totals</label>
            </div>
            {   
                <div id="include-payoff-container">
                <input 
                    id="include-payoff-checkbox" 
                    type="checkbox" 
                    checked={state.includePayoff}
                    onChange={e => pdfDispatch({
                        type: 'SET_INCLUDE_PAYOFF',
                        enabled: !state.includePayoff
                    })}
                    disabled={!state.usePayoffCheckbox}
                />
                <label htmlFor="include-payoff-checkbox">Include payoff</label>
                </div>
            }
        </div>
        <div className="button-container full-width">
            <div>
                <button 
                    type="button"
                    className="btn-clear"
                    onClick={e => handleClear(e)}
                >Clear</button>
            </div>
            <div>
                <div className="submit-container">
                    <button 
                        type="submit"
                        className="btn-secondary"
                        onClick={e => handleSubmit(e)}
                    >Create Table</button>
                    <button 
                        className="btn-pdf"
                        onClick={e => handleSubmit(e, true)}
                    >{ icons.pdf }</button>
                    <button 
                        className="btn-excel"
                        onClick={(e) => handleSubmit(e, false, true)}
                    >{ icons.excel }</button>
                </div>
            </div>
        </div>
        </form>
        {
            state.showOutputContainer &&
            <div>
                <OutputContainer printComponentRef={printComponentRef} />
            </div>
        }
    </>
    )
}