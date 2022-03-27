export const getTotals = (amounts, year) => {
    // reduce amounts to total
    const total = amounts[year].reduce((total, cur) => {
            return parseFloat(total) + parseFloat(cur);
        }, 0);
    // return total as string
    return total.toFixed(2);
}

export const getArrayTotals = (amounts, year) => {
    // get totals by index and reduce them
    const getTotalByIndex = (index) => amounts[year]
                            .map(amount => parseFloat(amount[index]))
                            .reduce((total, cur) => total + cur);
    // return array of totals as strings
    return [
        getTotalByIndex(0).toFixed(2),
        '--',
        getTotalByIndex(2).toFixed(2),
        '--',
    ];
}