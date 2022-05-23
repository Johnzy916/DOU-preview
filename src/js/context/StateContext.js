import React, { useReducer } from 'react';
import pdfReducer from '../reducers/pdfReducer';
import calendarReducer from '../reducers/calendarReducer';
import notesReducer from '../reducers/notesReducer';
import ratesReducer from '../reducers/ratesReducer';
import creditReducer from '../reducers/creditReducer';
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
    snippets: [],
    customSnippets: []
}

export const ratesInitialState = {
    rates: {}
}

export const creditInitialState = {
    actualBalance: 0,
    demand: {
        demandDate: '',
        lastBillDate: '',
        meterDate: '',
        daysSinceLastBill: 0,
        daysSinceMeterBilled: 0,
        totalCurrentlyDue: 0,
        remainingCredit: 0,
        finalCredit: 0,
        waterFlat: 0,
        waterMetered: 0,
        irrigationFlat: 0,
        irrigationMetered: 0,
        wasteFlat: 0,
        wasteMetered: 0,
        finalPerDiem: 0,
        finalProrated: 0,
        finalDemandAmount: 0,
        demandDateValue: '',
        billDateValue: '',
        saInputValue: '',
        billInputValue: '',
        balanceInputValue: '',
        isShowingDemandInfo: false
    }
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
    const [ creditState, creditDispatch ] = useReducer(creditReducer, creditInitialState);
    const [ darkState, darkDispatch ] = useReducer(darkReducer, darkInitialState);

    const value = {
        state: {
            ...pdfState,
            ...calendarState,
            ...notesState,
            ...ratesState,
            ...creditState,
            ...darkState
        },
        pdfDispatch,
        calendarDispatch,
        notesDispatch,
        ratesDispatch,
        creditDispatch,
        darkDispatch
    }

    return (
        <StateContext.Provider value={value}>
            { children }
        </StateContext.Provider>
    )
}
