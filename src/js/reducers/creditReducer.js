// import initial state for reset
import { creditInitialState } from "../context/StateContext"

// PDF reducer
export default (state, action) => {
    switch (action.type) {
        case 'SET_ACTUAL_BALANCE':
            return {
                ...state,
                actualBalance: action.balance
            }
        case 'SET_BALANCE_INPUT':
            return {
                ...state,
                balanceInputValue: action.value
            }
        case 'SET_DEMAND_INFO':
            return {
                ...state,
                demand: action.demand
            }
        case 'SET_DEMAND_DATE':
            return {
                ...state,
                demandDateValue: action.value
            }
        case 'SET_BILL_DATE':
            return {
                ...state,
                billDateValue: action.value
            }
        case 'SET_SA_INPUT':
            return {
                ...state,
                saInputValue: action.value
            }
        case 'SET_BILL_INPUT':
            return {
                ...state,
                billInputValue: action.value
            }
        case 'TOGGLE_IS_SHOWING_AMOUNT':
            return {
                ...state,
                isShowingDemandInfo: !state.isShowingDemandInfo
            }
        case 'RESET_INPUT_VALUES':
            return {
                ...state,
                demandDateValue: '',
                billDateValue: '',
                saInputValue: '',
                billInputValue: ''
            }
        case 'RESET_CREDIT_STATE':
            return {
                ...state,
                ...creditInitialState
            }
        default: return state;
    }
}