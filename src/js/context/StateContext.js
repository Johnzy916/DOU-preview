import React, { useReducer } from 'react';
import pdfReducer from '../reducers/pdfReducer';
import calendarReducer from '../reducers/calendarReducer';
import notesReducer from '../reducers/notesReducer';
import ratesReducer from '../reducers/ratesReducer';
import darkReducer from '../reducers/darkReducer';

// initial state
export const pdfInitialState = {
    years: '',
    type: '',
    account: '',
    owner: '',
    address: '',
    dataInput: '',
    tableData: {},
    isReverseOrder: false,
    includeTotal: false,
    includePayoff: false,
    showOutputContainer: false,
    usePayoffCheckbox: false,
}
export const calendarInitialState = {
    activeEvents: '',
    events: {
        'A': [],
        'B': [],
        'ODD': [],
        'EVEN': []
    }
}

export const notesInitialState = {
    notesValue: '',
    showShortcuts: false,
    editorFontSize: 18,
    snippets: []
}

export const ratesInitialState = {
    rates: {}
}

export const darkInitialState = {
    isDarkMode: 'false'
}

// create context
export const StateContext = React.createContext();

// create provider
export const StateProvider = ({ children }) => {
    const [ pdfState, pdfDispatch ] = useReducer(pdfReducer, pdfInitialState);
    const [ calendarState, calendarDispatch ] = useReducer(calendarReducer, calendarInitialState);
    const [ notesState, notesDispatch ] = useReducer(notesReducer, notesInitialState);
    const [ ratesState, ratesDispatch ] = useReducer(ratesReducer, ratesInitialState);
    const [ darkState, darkDispatch ] = useReducer(darkReducer, darkInitialState);

    const value = {
        state: {
            ...pdfState,
            ...calendarState,
            ...notesState,
            ...ratesState,
            ...darkState
        },
        pdfDispatch,
        calendarDispatch,
        notesDispatch,
        ratesDispatch,
        darkDispatch
    }

    return (
        <StateContext.Provider value={value}>
            { children }
        </StateContext.Provider>
    )
}
