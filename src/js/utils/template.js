// template strings for new page

export const pageHead = ({ year, account, address, name}, { tableType, includePayoff, includeTotal }, print) => (`
<html>
<head>
    <title>City of Sacramento | Department of Utilities</title>
    <meta name="robots" content="noindex" />
    <meta name="googlebot" content="noindex" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.2/dist/css/uikit.min.css" />
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        table, th, td { border-collapse: collapse; padding: .2rem; }
        table { border: 1px solid #f6f6f6; }
        thead tr:first-child { 
            background-color: #24A9C7 !important;
            color: white !important;
            -webkit-print-color-adjust: exact;
        }
        thead tr:last-child {
            background-color: #2DD6FA !important;
            -webkit-print-color-adjust: exact;
        }
        tbody td { color: black; }
        tbody tr:nth-child(even) {
            background-color: #f6f6f6 !important;
            -webkit-print-color-adjust: exact;
        }
        tbody tr:last-child {
            ${includeTotal ? 'background-color: #d9d9d9 !important;' : ''}
            -webkit-print-color-adjust: exact;
        }
        td, th {
            padding: ${ includePayoff ? '.2rem .4rem;' : '.2rem 1.5rem;' }
        }
    </style>
</head>
<body onload=${print ? 'printPDF()' : ''} class="uk-width-1-1">
    <h3 class="uk-width-1-1 uk-text-center uk-margin-top">${year.value || 'Previous'} ${tableType}</h2>
    <h5 class="uk-width-1-1 uk-text-center uk-margin-remove uk-text-muted">${account.value}</h5>
    <h5 class="uk-width-1-1 uk-text-center uk-margin-remove uk-text-muted">${address.value}</h5>
    <h5 class="uk-width-1-1 uk-text-center uk-margin-remove uk-text-muted">${name.value}</h5>
`);

export const tableHead = () => (`
    <div id="tableContent" class="uk-width-1-1 uk-flex uk-flex-center uk-margin-top">
        <table id="table" class="uk-width-auto uk-text-center uk-margin-bottom">
        <thead>
`);

const getHeaders = (headers, includePayoff, type) => {
    // return all headers if including payoff
    return includePayoff ?
            headers[type].filter(header => {
                return `<th class="uk-text-center">${header}</th>`
            }) :
            // otherwise return all headers except the payoff ones
            headers[type].filter(header => {
                const doNotInclude = ['payoffAmount', 'Payoff Amount', 'payoffBalance', 'Payoff Balance'];
                return !doNotInclude.includes(header);
            })
}

export const tableTop = ({ tableHeaders, includePayoff }) => {
    // get appropriate headers and return the html
    const headers = getHeaders(tableHeaders, includePayoff, 'th')
    let thead = `<tr>`;
    // add each header to a <th>
    const headContent = headers.map(head => `<th>${head}</th>`).join('');
    thead += headContent;
    thead += `</tr><thead><tbody>`;
    return thead;
}

export const tableBody = ({ dates, amounts, type, includePayoff, tableHeaders }, year, index) => {
        // get the header keys
        const headers = getHeaders(tableHeaders, includePayoff, 'key')
        const amountsIsArray = Array.isArray(amounts[year][index]);
        let tbody = `<tr>`;
        // add table data, depending on if it's in the state
        tbody += `<td>${dates[year][index]}</td>`;
        tbody += type?.[year]?.[index] ? `<td>${type[year][index]}</td>` : ``;
        tbody += !amountsIsArray ? `<td>$${amounts[year][index]}</td>` : ``;
        tbody += amountsIsArray ? `<td>$${amounts[year][index][0]}</td>` : ``;
        tbody += amountsIsArray ? `<td>$${amounts[year][index][1]}</td>` : ``;
        tbody += headers.includes('payoffAmount') ? `<td>$${amounts[year][index][2]}</td>` : ``;
        tbody += headers.includes('payoffBalance') ? `<td>$${amounts[year][index][3]}</td>` : ``;
        tbody += headers.includes('dueDate') ? `<td>$${dueDates[year][index]}</td>` : ``;
        tbody += `</tr>`;
        return tbody;
}

export const tableFoot = ({ amounts, type, includePayoff }, year) => {
    // check if amount are in an array
    const amountsIsArray = Array.isArray(amounts[year][0]);
    let tfoot = `<tr>`;
    tfoot += `<td>Total:</td>`;
    tfoot += type?.[year]?.[0] ? `<td></td>` : ``;
    // if amount is not an array, add the totals
    if (!amountsIsArray) {
        const total = amounts[year].length > 1 ?
                        amounts[year].reduce((acc, cur) => parseFloat(acc) + parseFloat(cur)).toFixed(2) :
                        parseFloat(amounts[year][0]).toFixed(2)
        tfoot += `<td>$${total}</td>`;
    // if amount is an array, add the totals separately
    } else {
        const getTotal = (index) => amounts[year]
                            .map(amount => parseFloat(amount[index]))
                            .reduce((acc, cur) => acc + cur);
        const curAmountTotal = getTotal(0).toFixed(2);
        const curBalanceTotal = getTotal(1).toFixed(2);
        const payoffAmountTotal = getTotal(2).toFixed(2);
        const payoffBalanceTotal = getTotal(3).toFixed(2);
        // add the totals to the html
        tfoot += `<td>$${curAmountTotal}</td>`;
        tfoot += `<td>$${curBalanceTotal}</td>`;
        tfoot += includePayoff ? `<td>$${payoffAmountTotal}</td>` : ``;
        tfoot += includePayoff ? `<td>$${payoffBalanceTotal}</td>` : ``;
    }
    tfoot += `</tr>`;
    return tfoot;
}

export const tableClose = `
    </tbody>
    </table>
    </div>
`;

export const pageFoot = `
    <script>
        const printPDF = () => {
            window.print()
            window.close();
        }
    </script>
    </body>
    </html>
`;