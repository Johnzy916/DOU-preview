import React, { useContext } from 'react';
import AddSnippet from './AddSnippet';
import { StateContext } from '../context/StateContext';

export const Shortcuts = ({ snippets, customSnippets }) => {
    const { state, notesDispatch } = useContext(StateContext)
    const handleRemove = (e) => {
        const shortcut = e.target.closest('.custom-shortcuts-container').getAttribute('data-shortcut');
        // remove from local storage
        localStorage.setItem('dou_custom_snippets', JSON.stringify({
            snippets: [
                ...state.customSnippets?.snippets?.filter(snippet => {
                    return snippet.shortcut !== shortcut;
                })
            ]
        }));
        // remove from state
        notesDispatch({ type: 'REMOVE_SNIPPET', shortcut });
    }
    return (
        <>
        <div className="shortcuts-container">
            <h3 className="snippets-header">Team Snippets</h3>
            <div className="shortcut-items-container">
                <div className="shortcut-text shortcut-header">
                    <strong>Shortcut</strong>
                </div>
                <div className="snippet-text snippet-header">
                    <strong>Snippet</strong>
                </div>
            </div>
            {
                snippets.snippets.map(snippet => {
                    return (
                        <div 
                            className="shortcut-items-container" 
                            key={snippet.shortcut}
                            data-shortcut={snippet.shortcut}
                        >
                            <div className="shortcut-text">
                                { snippet.shortcut }
                            </div>
                            <div className="snippet-text">
                                { snippet.text }
                            </div>
                        </div>
                    );
                })
            }
            <h3 className="snippets-header">My Custom Snippets</h3>
            <div className="shortcut-items-container">
                <div className="shortcut-text shortcut-header">
                    <strong>Shortcut</strong>
                </div>
                <div className="snippet-text snippet-header">
                    <strong>Snippet</strong>
                </div>
            </div>
            {
                !customSnippets?.snippets || !customSnippets?.snippets?.length ?
                    <h3 className="no-snippets-message">You have no custom snippets. Add one!</h3>
                :   (customSnippets?.snippets?.map(snippet => {
                    return (
                        <div 
                            className="custom-shortcuts-container" 
                            key={snippet.shortcut}
                            data-shortcut={snippet.shortcut}
                        >
                            <div className="shortcut-text">
                                { snippet.shortcut }
                            </div>
                            <div className="snippet-text">
                                { snippet.text }
                            </div>
                            <div className="remove-button-container">
                                <button 
                                    className="remove-button"
                                    onClick={handleRemove}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    );
                }))
            }
            <AddSnippet />
        </div>
        </>
    )
}
