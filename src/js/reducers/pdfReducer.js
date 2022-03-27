// import initial state for reset
import { pdfInitialState } from "../context/StateContext"

// PDF reducer
export default (state, action) => {
    switch (action.type) {
        case 'SET_YEARS':
            return {
                ...state,
                years: action.value
            }
        case 'SET_TYPE':
            return {
                ...state,
                type: action.value
            }
        case 'SET_ACCOUNT':
            return {
                ...state,
                account: action.value
            }
        case 'SET_OWNER':
            return {
                ...state,
                owner: action.value
            }
        case 'SET_ADDRESS':
            return {
                ...state,
                address: action.value
            }
        case 'SET_DATA_INPUT':
            return {
                ...state,
                dataInput: action.value
            }
        case 'SET_IS_REVERSE':
            let tempState = { dates: {}, amounts: {}, type: {} };
            Object.keys(state.tableData.dates || {}).forEach(year => {
                tempState = {
                    ...tempState,
                    dates: {
                        ...tempState.dates,
                        [year] : state.tableData.dates[year].reverse()
                    },
                    amounts: {
                        ...tempState.amounts,
                        [year] : state.tableData.amounts[year].reverse()
                    },
                    type: {
                        ...tempState.type,
                        [year] : state.tableData.type[year].reverse()
                    }
                }
            })
            return {
                ...state,
                tableData: {
                    ...state.tableData,
                    ...tempState
                },
                isReverseOrder: !state.isReverseOrder
            }
        case 'SET_INCLUDE_TOTAL':
            return {
                ...state,
                includeTotal: !state.includeTotal
            }
        case 'SET_INCLUDE_PAYOFF':
            return {
                ...state,
                includePayoff: action.enabled
            }
        case 'SET_TABLE_DATA':
            return {
                ...state,
                tableData: action.tableData
            }
        case 'ENABLE_PAYOFF_CHECKBOX':
            return {
                ...state,
                usePayoffCheckbox: true
            }
        case 'DISABLE_PAYOFF_CHECKBOX':
            return {
                ...state,
                usePayoffCheckbox: false
            }
        case 'HIDE_OUTPUT_CONTAINER':
            return {
                ...state,
                showOutputContainer: false
            }
        case 'SHOW_OUTPUT_CONTAINER':
            return {
                ...state,
                showOutputContainer: true
            }
        case 'CLEAR_DATA_INPUT_FIELD':
            return {
                ...state,
                dataInput: ''
            }
        case 'RESET_FORM':
            return {
                ...state,
                ...pdfInitialState
            }
        default: return state;
    }
}