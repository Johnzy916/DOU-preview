import React, { useEffect, useContext } from 'react';
import { StateContext } from '../context/StateContext';
import { handleCopyFullText } from '../utils/Clipboard';
import icons from '../icons/icons';

export const NotesToolbar = ({ editorRef }) => {

    const { state, notesDispatch } = useContext(StateContext);

    const handleChangeFontSize = (num) => {
        // get difference and create number to save in localStorage
        const newFontSize = parseInt(state.editorFontSize) + num;
        if (newFontSize > 52 || newFontSize < 16) return;
        localStorage.setItem('dou_editor_font_size', newFontSize);
        // set the difference in the state
        notesDispatch({
            type: 'SET_FONT_SIZE',
            fontSize: newFontSize
        })
        const fontSizeDisplay = document.querySelector('.font-size-display');
        fontSizeDisplay.classList.add('font-size-display--animate');
        setTimeout(() => fontSizeDisplay.classList.remove('font-size-display--animate'), 750);
    }

    // show or hide shortcuts when button clicked
    const handleToggleShortcutView = () => {
        notesDispatch({ type: 'TOGGLE_SHOW_SHORTCUTS' });
    }

    return (
        <div id="editor-toolbar">
            <span className='toolbar-segment quill-controls'>
                <span className="ql-formats">
                    <button className="ql-bold"></button>
                    <button className="ql-italic"></button>
                    <button className="ql-underline"></button>
                    <button className="ql-strike"></button>
                </span>
                <span className="ql-formats toolbar-color-selection">
                    <select className="ql-color">
                        <option value="#51586E" />
                        <option value="#DBC381" />
                        <option value="#8CA3BF" />
                        <option value="#DBCF45" />
                        <option value="#666666" />
                        <option value="#333333" />
                        <option defaultValue />
                    </select>
                    <select className="ql-background">
                        <option value="#51586E" />
                        <option value="#DBC381" />
                        <option value="#8CA3BF" />
                        <option value="#DBCF45" />
                        <option value="#666666" />
                        <option value="#333333" />
                        <option defaultValue />
                    </select>
                </span>
                <span className="ql-formats">
                    <button
                        className="ql-capitalize"
                    >{icons.capitalize}
                    </button>
                </span>
            </span>
            <span className='toolbar-segment custom-buttons'>
                <span className="ql-formats view-container">
                    <button
                        className="ql-view"
                        onClick={() => handleToggleShortcutView()}
                    > {state.showShortcuts
                        ? <span>&#171; NOTES</span>
                        : <span>SHORTCUTS &#187;</span>
                        }
                    </button>
                </span>
                <span className="ql-formats">
                    <button
                        className="ql-decrease"
                        onClick={() => handleChangeFontSize(-2)}
                    >{icons.caretDown}
                    </button>
                    <button
                        className="ql-increase"
                        onClick={() => handleChangeFontSize(2)}
                    >{icons.caretUp}
                    </button>
                </span>
                <span className="ql-formats copy-container">
                    <button
                        className="ql-copy"
                        onClick={(e) => handleCopyFullText(editorRef)}
                    >{icons.copy}
                    </button>
                    <span className="copied-icon">{icons.clipboard}</span>
                    <span className="font-size-display">{`Font size: ${state.editorFontSize}`}</span>
                </span>
            </span>
        </div>
    );
};