import { clearTypeArray } from './trackTyping'

export const insertSnippet = (snippet, shortcut, editorRef) => {
    editorRef = editorRef.current;
    // get the selection index and length
    const { index } = editorRef.selection;
    // delete and replace the text
    editorRef.editor.deleteText(index - shortcut.length, shortcut.length)
    editorRef.editor.insertText(index - shortcut.length, snippet)
    // put the cursor at the end of the text
    editorRef.editor.setSelection(index - shortcut.length + snippet.length);

    // always clear the typeArray after insert
    clearTypeArray()
}

export const formatPhoneNumber = (e, editorRef) => {
    editorRef = editorRef.current;
    // when pressing 'Ctrl +' at the end of a 10 digit string
    // format the number and replace it.
    if (e.ctrlKey && e.keyCode == 107) {
      // disable browser default (don't zoom the browser in)
      e.preventDefault();
      e.stopPropagation();
      // get selection
      const { index } = editorRef.selection;
      // get the text for the last 10 characters
      const text = editorRef.editor.getText(index - 10, 10);
    // if the 10 spaces before the cursor are digits
      if (/[0-9]{10}/.test(text)) {
        // format the number
        const formattedNumber = `${text.slice(0,3)}-${text.slice(3,6)}-${text.slice(6)}`;
        // delete the current numbers
        editorRef.editor.deleteText(index - 10, 10);
        // and replace them with the formatted number
        editorRef.editor.insertText(index - 10, formattedNumber);
        // set the cursor to the end and collapse the range
        editorRef.editor.setSelection(index - 10 + formattedNumber.length);
      }
    }
    
  }

  export const handleCapitalizeText = function() {
    // get the selection index and length
    const { index, length } = this.quill.selection.savedRange
    // get the actual text
    const selectedText = this.quill.getText(index, length)
    let newText;
    // if text is already uppercase, convert it to lowercase
    if (selectedText == selectedText.toUpperCase()) {
      newText = selectedText.toLowerCase();
    } else {
      // convert it to uppercase
      newText = selectedText.toUpperCase()
    }
    // delete and replace the text
    this.quill.deleteText(index, length)
    this.quill.insertText(index, newText)
    // re-select the text
    this.quill.setSelection(index, newText.length)
  }