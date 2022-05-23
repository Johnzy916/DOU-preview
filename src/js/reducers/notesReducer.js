// import initial state for reset
import { notesInitialState } from "../context/StateContext"

// NOTES reducer
export default (state, action) => {
    switch (action.type) {
        case 'SET_NOTES_VALUE':
            return {
                ...state,
                notesValue: action.notesValue
            }
        case 'SET_SNIPPETS':
            return {
                ...state,
                snippets: action.snippets
            }
        case 'SET_CUSTOM_SNIPPETS':
            return {
                ...state,
                customSnippets: action.customSnippets
            }
        case 'SET_SNIPPET':
            return {
                ...state,
                customSnippets: {
                    snippets: [
                        ...(state.customSnippets?.snippets || []),
                        action.snippet
                    ]
                }
            }
        case 'REMOVE_SNIPPET':
            return {
                ...state,
                customSnippets: {
                    snippets: [
                        ...state.customSnippets?.snippets?.filter(snippet => {
                            return snippet.shortcut !== action.shortcut
                        })
                    ]
                }
            }
        case 'TOGGLE_SHOW_SHORTCUTS':
            return {
                ...state,
                showShortcuts: !state.showShortcuts
            }
        case 'HIDE_SHORTCUTS':
            return {
                ...state,
                showShortcuts: false
            }
        case 'SET_FONT_SIZE':
            return {
                ...state,
                editorFontSize: action.fontSize
            }
        case 'RESET_NOTES_STATE':
            return {
                ...state,
                ...notesInitialState
            }
        default: return state;
    }
}