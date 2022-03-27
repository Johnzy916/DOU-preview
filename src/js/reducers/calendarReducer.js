// import initial state for reset
import { calendarInitialState } from "../context/StateContext"

// CALENDAR reducer
export default (state, action) => {
    switch (action.type) {
        case 'SET_CALENDAR_EVENTS':
            return {
                ...state,
                events: action.events
            }
        case 'SET_ACTIVE_EVENTS':
            return {
                ...state,
                activeEvents: action.activeEvents
            }
        case 'RESET_CALENDAR_STATE':
            return {
                ...state,
                ...calendarInitialState
            }
        default: return state;
    }
}