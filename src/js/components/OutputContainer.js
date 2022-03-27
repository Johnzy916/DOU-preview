import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext';
import DataTable from './DataTable'
import douLogo from '../../img/dou_logo.png';

export default function OutputContainer({ printComponentRef }) {
    const { state } = useContext(StateContext);
    const { isReverseOrder,
            years,
            type,
            account,
            owner,
            address
    } = state;

    // display years in reverse if isReverseOrder
    const yearKeys = Object.keys(state.tableData?.dates || {});
    const sortedYears = !isReverseOrder ? yearKeys.reverse() : yearKeys;

    return (
        <div className="output-container" ref={printComponentRef}>
            <div className='logo-container'>
                <img src={douLogo} alt="City of Sacramento DOU logo" />
            </div>
            <div className='account-info-container'>
                { years && type && <h1>{`${years} ${type}`}</h1> }
                { account && <h2>{ account }</h2>}
                { owner && <h2>{ owner }</h2>}
                { address && <h2>{ address }</h2>}
            </div>
            <div className="table-container">
            {
                sortedYears.map(year => {
                    return <DataTable state={state} year={year} key={year} />
                })
            }
            </div>
        </div> 
    )
}
