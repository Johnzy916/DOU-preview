import { insertSnippet } from './changeText';

// Check to see if text in argument corresponds to any shortcuts
export const checkShortcuts = (letterArray, editorRef, snippets, customSnippets) => {

    const mySnippets = [...snippets.snippets, ...(customSnippets?.snippets || [])];

    const snippet = mySnippets.filter(obj => {
        return obj.shortcut.toLowerCase() === letterArray.toLowerCase();
    })[0];

    if (snippet) {
        insertSnippet(snippet.text, letterArray, editorRef)
    }
}