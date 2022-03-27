export const parseInputData = (input) => {
    // regular expressions to match type/amount, depending on available table data
    const tableWithPayoffs = /(?<date>[0-9]{2}-[0-9]{2}-[0-9]{4})\s+(?<type>.+?)\$(?<curAmount>-?[0-9,]*.[0-9]{2})\s+\$(?<curBalance>-?[0-9,]*.[0-9]{2})\s+\$(?<payoffAmount>-?[0-9,]*.[0-9]{2})\s+\$(?<payoffBalance>-?[0-9,]*.[0-9]{2})/gm;
	const tableWithComma = /Menu(?<type>\w+)\W+(?<date>[0-9]{2}-[0-9]{2}-[0-9]{4}), \$(?<amount>-?[0-9,]*.[0-9]{2})/gm;
    const tableWithoutComma = /(?<date>[0-9]{2}-[0-9]{2}-[0-9]{4})\s+\$(?<amount>-?[0-9,]*.[0-9]{2})/gm;
    const tableWithDueDate = /Menu(?<type>\w+)\s+(?<date>[0-9]{2}-[0-9]{2}-[0-9]{4}), \$(?<amount>-?[0-9,]*.[0-9]{2})(, Due: (?<duedate>[0-9]{2}-[0-9]{2}-[0-9]{4}))?/gm;
    
    if (tableWithPayoffs.test(input)) {
        return {
            type: 'tableWithPayoffs',
            headers: {
                th: ['Date', 'Type', 'Current Amount', 'Current Balance', 'Payoff Amount', 'Payoff Balance']
            },
            // having to use match first, because matchAll is
            // not returning the first instance for some reason
            output: Array.from(input.match(tableWithPayoffs).join(' ').matchAll(tableWithPayoffs))
        }
    } else if (tableWithComma.test(input)) {
        return {
            type: 'tableWithComma',
            headers: {
                th: ['Date', 'Type', 'Amount']
            },
            output: Array.from(input.match(tableWithComma).join(' ').matchAll(tableWithComma))
        }
    } else if (tableWithoutComma.test(input)) {
        return {
            type: 'tableWithoutComma',
            headers: {
                th: ['Date', 'Amount']
            },
            output: Array.from(input.match(tableWithoutComma).join(' ').matchAll(tableWithoutComma))
        }
    } else if (tableWithDueDate.test(input)) {
        return {
            type: 'tableWithDueDate',
            headers: {
                th: ['Date', 'Type', 'Amount', 'Due Date']
            },
            output: Array.from(input.match(tableWithDueDate).join(' ').matchAll(tableWithDueDate))
        }
    } else {
        return false;
    }
}