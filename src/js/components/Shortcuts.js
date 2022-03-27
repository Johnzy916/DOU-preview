import React from 'react'

export const Shortcuts = ({ snippets }) => {

    return (
        <div className="shortcuts-container">
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
                        <div className="shortcut-items-container" key={snippet.shortcut}>
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
        </div>
    )
}
