// for making sure all copy and cut actions are plain text

import { Quill } from 'react-quill';

const Clipboard = Quill.import('modules/clipboard');
const Delta = Quill.import('delta');

// https://github.com/quilljs/quill/issues/1184
// make the pasted content plain text

export class PlainClipboard extends Clipboard {
  onPaste(e) {
    e.preventDefault();
    const range = this.quill.getSelection();
    let text = e.clipboardData.getData('text/plain');
    // check if pasting liens from mass release page
    const lienMatchesText = extractLiens(text);
    // if all liens, replace text with formatted lien list
    if (lienMatchesText) text = lienMatchesText;
    const delta = new Delta()
      .retain(range.index)
      .delete(range.length)
      .insert(text);
    const index = text.length + range.index;
    const length = 0;
    this.quill.updateContents(delta, 'silent');
    this.quill.setSelection(index, length, 'silent');
    this.quill.scrollIntoView();
  }
};

// extract book/page when pasting multiple liens
// from the mass release page
function extractLiens(text) {
  // check if includes text indicating it's on the mass release screen
  const isFromMassRelease = text.match(/Balance Transferred to Collections/gm);
  // return if NOT from mass release
  if (!isFromMassRelease) return false;

  const matches = text.match(/\d{8}\s+\d{4}/gm);
  // guard clause against single lien or no matches
  if (!matches?.length || matches?.length == 1) return false;
  // create new string with just liens and return
  let newString = matches.map((lien, i) => {
    // if not last lien, add newline char
    return i < matches.length - 1 ? `${lien}\n` : lien;
  }).join('');
  return newString;
}

export const handleCopyFullText = (editorRef) => {
  const { editor } = editorRef.current;
  // get the text from the editor
  let text = editor.getText();
  // remove trailing /n because it's not needed
  // but is included with quill delta
  text = text.split('');
  text.pop();
  // recreate the string
  const newText = text.join('');
  copyTextToClipboard(newText);
}

//
const getSelectionFromEditor = (editorRef) => {
  const { editor } = editorRef.current;
  // get the index and length of the selection
  const { index, length } = editor.getSelection();
  // get the text from the selection
  const text = editor.getText(index, length);
  return { editor, index, length, text };
}

export const handleCopyTextSelection = (editorRef) => {
  const { text } = getSelectionFromEditor(editorRef);
  // copy to clipboard
  copyTextToClipboard(text)
}

export const handleCutTextSelection = (editorRef) => {
  const { editor, index, length, text } = getSelectionFromEditor(editorRef);
  // copy to clipboard
  copyTextToClipboard(text);
  // delete text from editor
  editor.deleteText(index, length);

}

const copyTextToClipboard = async (text) => {
  try {
    // write to clipboard
    await navigator.clipboard.writeText(text)
    // trigger copied animation
    const copyIcon = document.querySelector('.copied-icon');
    copyIcon.classList.add('copied-icon--animate');
    setTimeout(() => copyIcon.classList.remove('copied-icon--animate'), 750);
  } catch (error) {
    console.log(`Couldn't copy to clipboard: `, error.message)
    return false
  }
}
