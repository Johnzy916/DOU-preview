// import initial state for reset
import { ratesInitialState } from "../context/StateContext"

// RATES reducer
export default (state, action) => {
    switch (action.type) {
        case 'SET_RATES':
            return {
                ...state,
                rates: action.rates
            }
        case 'RESET_RATES':
            return {
                ...state,
                ...ratesInitialState
            }
        default: return state;
    }
}