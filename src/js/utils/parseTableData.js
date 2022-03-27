import { parseInputData } from './parseInputData.js';
import { getTotals, getArrayTotals } from './getTotals.js';
import { NotificationManager } from 'react-notifications';

export default ( state, e ) => {

	// get input data type and info
	const outputData = parseInputData(state.dataInput);

	// Parse Data
	if (outputData) {
		// temp state to hold table data
		const tempState = { dates: {}, amounts: {}, amountsIsArray: false,
							totals: {}, type: {} };

		// push data to state object
		outputData.output.forEach(match => {
			// get access to the RegEx matches by name
			const groups = match.groups;
			// use year as state Object keys
			const segmentYear = groups.date.split('-')[2];
			// grab the match values
			const values = {
				date: groups.date,
				type: groups.type?.trim(),
				amount: groups.amount,
				dueDate: groups.dueDate,
				curAmount: groups.curAmount,
				curBalance: groups.curBalance,
				payoffAmount: groups.payoffAmount,
				payoffBalance: groups.payoffBalance,
				simpleAmount: !!groups.amount
			}

			// if the type is one that includes 'segment'
			// convert the type to be more human readable
			switch (values.type) {
				case 'Pay Segment':
					values.type = 'Payment';
					break;
				case 'Bill Segment':
					values.type = 'Bill';
					break;
				default:
					break;
			}

			// push dates to state
			segmentYear in tempState.dates
				? tempState.dates[segmentYear].push(values.date)
				: tempState.dates[segmentYear] = [ values.date ];
			// push amounts
			segmentYear in tempState.amounts
				? tempState.amounts[segmentYear].push(
						values.simpleAmount ? 
						values.amount : 
						[ values.curAmount, values.curBalance, 
							values.payoffAmount, values.payoffBalance ]
					) 
				:	tempState.amounts[segmentYear] = [ 
						values.simpleAmount
						? values.amount
						: [ values.curAmount, values.curBalance, 
							values.payoffAmount, values.payoffBalance ]
					];
			// push type of payment/charge
			segmentYear in tempState.type
				?	tempState.type[segmentYear].push(values.type)
				:	tempState.type[segmentYear] = [ values.type ];
		});

		// check and set amountsIsArray
		if(Array.isArray(tempState.amounts[Object.keys(tempState.amounts)[0]][0])) {
			tempState.amountsIsArray = true;
		}

		// push totals for each year
		// if not an array, push simple total
		if (!tempState.amountsIsArray) {
			Object.keys(tempState.amounts).forEach(year => {
				tempState.totals[year] = getTotals(tempState.amounts, year);
			})
		// else if isArray, push an array of totals
		} else {
			Object.keys(tempState.amounts).forEach(year => {
				tempState.totals[year] = getArrayTotals(tempState.amounts, year);
			})
		}
		// return usable table data
		return {
			...tempState,
			inputType: outputData.type,
			tableHeaders: outputData.headers
		}
	// if data input is empty and output is not showing
	} else if (!state.showOutputContainer && !state.dataInput) {
		NotificationManager.info('Please enter table data', undefined, 2000);
		return false;
	// else if output is showing, but data is empty and 'create table' was clicked
	} else if (state.showOutputContainer 
				&& !state.dataInput
				&& e.target.className == 'btn-secondary') {
					NotificationManager.info('Please enter table data', undefined, 2000);
					return false;
	// else if output is showing, but another button was pressed
	} else if (state.showOutputContainer && !state.dataInput) {
		return false;
	// if no matches, and hasn't returned yet,
	// the input must be invalid
	} else {
		NotificationManager.warning('Copy the table from CCB', 'Invalid table data', 2000);
		return false;
	}
};