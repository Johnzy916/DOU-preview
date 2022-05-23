import React, { useState, useContext, useRef, useEffect } from 'react'
import Dropdown from 'react-dropdown';
import { StateContext } from '../context/StateContext';
import getStaticData from '../utils/getStaticData';

export default function Rates() {
    // global state
    const { state, ratesDispatch } = useContext(StateContext);
    const { rates } = state;

    // local state
    const [bwpTotal, setBwpTotal] = useState(0);
    const [rsTotal, setRsTotal] = useState({ total: () => 0, bags: ['0'], add: 0 });
    const [bagsPrice, setBagsPrice] = useState(0);
    const [gcTotal, setGcTotal] = useState({ total: () => 0, add: 0 });
    const [recycleTotal, setRecycleTotal] = useState(0);
    const [ywTotal, setYwTotal] = useState(0)


    // reference second dropdown to reset them when first is changed
    const returnServiceAddRef = useRef(null);
    const garbageCanAddRef = useRef(null);

    // get rates and set default prices
    useEffect(async () => {
        const rates = await getStaticData(
                'rates.json', 
                'Unable to load rates',
                'Please reload the page'
            );
        ratesDispatch({ type: 'SET_RATES', rates });
        setBwpTotal(rates.bwp);
        setRsTotal({
            title: 'return64',
            can: rates.return64,
            add: 0,
            bags: ['0', '1-2', '3-4', '5-6'],
            total() {
                return this.can + (this.add * rates[`${this.title}_add`]);
            }
        });
        setBagsPrice(rates.bags_1_2);
        setGcTotal({
            title: 'garbage64',
            can: rates.garbage64,
            add: 0,
            total() {
                return this.can + (this.add * rates[`${this.title}_add`]);
            }
        });
        setRecycleTotal(rates.recycle);
        setYwTotal(rates.yw);
    }, []);

    return (
        <div className="rates-container">
            <section>
                <span className="rate-title">Bulky Waste Pickup</span>
                <span className="rate-additional">
                    1 Load <span className="plus-symbol">&#43;</span>
                    <Dropdown 
                    options={[ 0,1,2,3 ]}
                    onChange={(e) => setBwpTotal(rates.bwp + (rates.bwp_add * e.value))}
                    placeholder={0}
                    /> 
                    <span className="tooltip">
                        Oversized load(s)
                        <span className="tooltip-text">${rates.bwp_add}</span>
                    </span>
                </span>
                <span className="rate-amount">{ `$${bwpTotal?.toFixed(2)}` }</span>
            </section>
            <section>
                <span className="rate-title">Return Service</span>
                <span className="rate-additional">
                    <Dropdown 
                        options={[96, 64, 32]}
                        onChange={(e) => {
                            setRsTotal({
                                ...rsTotal,
                                title: `return${e.value}`,
                                can: rates[`return${e.value}`],
                                add: 0
                            });
                            // reset the second dropdown
                            returnServiceAddRef.current.state.selected = {
                                value: 0, label: 0
                            };
                        }}
                        placeholder={64}
                    />
                    Can <span className="plus-symbol">&#43;</span>
                    <Dropdown 
                        ref={returnServiceAddRef}
                        options={[ 0,1,2,3 ]}
                        onChange={(e) => {
                            setRsTotal({
                                ...rsTotal,
                                add: e.value
                            });
                        }}
                        placeholder={0}
                    /> 
                    <span className="tooltip">
                        {` Cans / ${rsTotal?.bags[rsTotal?.add]} Bags`}
                        <span className="tooltip-text">${rates[`${rsTotal?.title}_add`]}</span>
                    </span>
                </span>
                <span className="rate-amount">{ `$${rsTotal.total().toFixed(2)}` }</span>
            </section>
            <section>
                <span className="rate-title">Bag Service</span>
                <span className="rate-additional">
                    <Dropdown 
                    options={[ '1 - 2','3 - 4','5 - 6' ]}
                    onChange={(e) => setBagsPrice(rates[`bags_${e.value.replace(' - ', '_')}`])}
                    placeholder={'1 - 2'}
                    /> 
                    Bags
                </span>
                <span className="rate-amount">{ `$${bagsPrice?.toFixed(2)}` }</span>
            </section>
            <section>
                <span className="rate-title">Garbage Can</span>
                <span className="rate-additional">
                    <Dropdown 
                        options={[96, 64, 32]}
                        onChange={(e) => {
                            setGcTotal({
                                ...rsTotal,
                                title: `garbage${e.value}`,
                                can: rates[`garbage${e.value}`],
                                add: 0
                            });
                            // reset the second dropdown
                            garbageCanAddRef.current.state.selected = {
                                value: 0, label: 0
                            };
                        }}
                        placeholder={64}
                    />
                    Can <span className="plus-symbol">&#43;</span>
                    <Dropdown 
                        ref={garbageCanAddRef}
                        options={[ 0,1,2,3 ]}
                        onChange={(e) => {
                            setGcTotal({
                                ...gcTotal,
                                add: e.value
                            });
                        }}
                        placeholder={0}
                    /> 
                    <span className="tooltip">
                        Additional can(s)
                        <span className="tooltip-text">${rates[`${gcTotal?.title}_add`]}</span>
                    </span>
                </span>
                <span className="rate-amount">{ `$${gcTotal.total().toFixed(2)}` }</span>
            </section>
            <section>
                <span className="rate-title">Recycle Can</span>
                <span className="rate-additional">
                    96 or 64 Gal <span className="plus-symbol">&#43;</span>
                    <Dropdown 
                        options={[ 0,1,2,3 ]}
                        onChange={(e) => {
                            setRecycleTotal(rates.recycle + (rates.recycle_add * e.value));
                        }}
                        placeholder={0}
                    /> 
                    <span className="tooltip">
                        Additional can(s)
                        <span className="tooltip-text">${rates.recycle_add}</span>
                    </span>
                </span>
                <span className="rate-amount">{ `$${recycleTotal.toFixed(2)}` }</span>
            </section>
            <section>
                <span className="rate-title">Yard Waste Can</span>
                <span className="rate-additional">
                    96 Gal <span className="plus-symbol">&#43;</span>
                    <Dropdown 
                        options={[ 0,1,2,3 ]}
                        onChange={(e) => {
                            setYwTotal(rates.yw + (rates.yw_add * e.value));
                        }}
                        placeholder={0}
                    /> 
                    <span className="tooltip">
                        Additional can(s)
                        <span className="tooltip-text">${rates.yw_add}</span>
                    </span>
                </span>
                <span className="rate-amount">{ `$${ywTotal.toFixed(2)}` }</span>
            </section>
            <section>
                <span className="rate-title">Food Waste Only</span>
                <span className="rate-additional">
                    Any size container
                </span>
                <span className="rate-amount">{ `$${rates.food_only?.toFixed(2)}` }</span>
            </section>
        </div>
    )
}
