import React, { useContext } from 'react';
import { StateContext } from './StateContext';

// create context
export const EditorContext = React.createContext();

// create provider
export const EditorProvider = ({ children }) => {

const { notesDispatch } = useContext(StateContext)

// handle functions




// clean up text when there is a selection copied
const handleCopy = async (e) => {
    const selectionString = document.getSelection()
    const cleanedUpString = selectionString.toString().replace(/\n\n/g, '\n');
    e.clipboardData.setData('text/plain', cleanedUpString)
    e.preventDefault();
}



// initial state
const initialState = {
    handleCopy,
    // handleCopyFullText,
    // handleChange,
    // handleChangeFontSize,
    // modules,
    // formats  
}

    return (
        <EditorContext.Provider value={initialState}>
            { children }
        </EditorContext.Provider>
    )
}