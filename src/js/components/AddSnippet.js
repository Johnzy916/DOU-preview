import React, { useState, useContext } from 'react';
import { StateContext } from '../context/StateContext';
import { NotificationManager } from 'react-notifications';

export default function AddSnippet() {
    const { state, notesDispatch } = useContext(StateContext)
    const [shortcut, setShortcut] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (shortcut && text) {
            // check if shortcut exists
            const shortcutExists = [...state.snippets.snippets, ...(state.customSnippets?.snippets || [])]
                                    .map(snippet => snippet.shortcut)
                                    .includes(shortcut);
            if (shortcutExists) {
                NotificationManager.warning('Choose another shortcut', 'Shortcut exists!', 2000);
                return;
            }
            // set local storage
            localStorage.setItem('dou_custom_snippets', JSON.stringify({
                snippets: [
                    ...(state.customSnippets?.snippets || []),
                    {
                        shortcut,
                        text
                    }
                ]
            }));
            // set state
            notesDispatch({ type: 'SET_SNIPPET', snippet: {
                shortcut,
                text
            }});
            // clear state inputs
            setShortcut('');
            setText('');
            document.querySelector('.add-shortcut').innerText = '';
            document.querySelector('.add-text').innerText = '';
        } else {
            NotificationManager.warning('Enter a shortcut and text', 'Information needed!', 2000);
        }
    };

    return (
        <>
        <div className="add-shortcut-container">
            <div
                className="add-shortcut" 
                onInput={(e) => setShortcut(e.target.textContent.replace(/[\s\n]+/, ''))}
                contentEditable
            >
            </div>
            <div
                className="add-text" 
                onInput={(e) => setText(e.target.innerText.replace(/\n{3,}/, '\n\n'))}
                contentEditable
            >
            </div>
            <button 
                className="add-button"
                onClick={handleSubmit}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
            </button>
        </div>
        </>
    );
}