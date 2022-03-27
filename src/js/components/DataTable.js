import React from 'react'

export default function DataTable({ state, year }) {

    const { tableData, includePayoff, includeTotal } = state;
    const { dates, type, amounts, tableHeaders, totals } = tableData;

    // get headers now, since we need count for colSpan
    // without the correct count, border disappears on print
    const headers = getHeaders(tableHeaders, includePayoff);

    return (
        <>
        <table className={`output-table ${includePayoff ? 'adjust-table-sizes' : ''}`}>
            <thead>
                <tr className='thead__year'>
                    <th colSpan={headers.length}>
                        { year }
                    </th>
                </tr>
                <tr className='thead__headers'>
                    {
                        headers.map(header => (
                            <th key={header}>{ header }</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    dates[year].map((date, i) => (
                        <tr key={`date-${i}`} className="tbody__row">
                            <td className='date-cell'>{date}</td>
                            {   // line item type
                                type[year][i] &&
                                <td>{ type[year][i] }</td>
                            }
                            {
                                // line amounts
                                // if not an array, it's a single amount
                                !Array.isArray(amounts[year][i])
                                ? <td>{ `$${amounts[year][i]}` }</td>
                                // else it's an array of amounts
                                : (
                                    <>
                                    <td>{ `$${amounts[year][i][0]}` }</td>
                                    <td>{ `$${amounts[year][i][1]}` }</td>
                                    </>
                                )
                            }
                            {
                                // if include payoff is checked, include payoff amounts
                                tableHeaders.th.includes('Payoff Amount') &&
                                tableHeaders.th.includes('Payoff Balance') &&
                                includePayoff &&
                                <>
                                    <td>{ `$${amounts[year][i][2]}` }</td>
                                    <td>{ `$${amounts[year][i][3]}` }</td>
                                </>
                            }
                        </tr>
                    ))
                }
                {
                    // include the totals if box checked
                    includeTotal &&
                    <tr className='tbody__totals'>
                        <td>Totals:</td>
                        {
                            tableHeaders.th.includes('Type') &&
                            <td></td>
                        }
                        {
                            tableHeaders.th.includes('Amount') &&
                            <td>{ `$${totals[year]}` }</td>
                        }
                        {
                            tableHeaders.th.includes('Current Amount') &&
                            <td>{ `$${totals[year][0]}` }</td>
                        }
                        {
                            tableHeaders.th.includes('Current Balance') &&
                            <td>{ `${totals[year][1]}` }</td>
                        }
                        {
                            tableHeaders.th.includes('Payoff Amount') &&
                            includePayoff &&
                            <td>{ `$${totals[year][2]}` }</td>
                        }
                        {
                            tableHeaders.th.includes('Payoff Balance') &&
                            includePayoff &&
                            <td>{ `${totals[year][3]}` }</td>
                        }
                    </tr>
                }
            </tbody>
        </table>
        </>
    )
}

function getHeaders(tableHeaders, includePayoff) {
    // if including payoff, return all headers
    if (includePayoff) return tableHeaders.th;
    // else filter out the payoff headers
    return tableHeaders.th.filter(th => (
        th != 'Payoff Amount' && th != 'Payoff Balance'
    ));
}
