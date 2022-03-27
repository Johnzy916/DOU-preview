import React, { useContext, useRef, useMemo, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import { StateContext } from '../context/StateContext';
import { NotesToolbar } from './NotesToolbar';
import { Shortcuts } from './Shortcuts';
import { trackTyping } from '../utils/trackTyping';
import { formatPhoneNumber, handleCapitalizeText } from '../utils/changeText';
import { PlainClipboard, handleCopyTextSelection, handleCutTextSelection } from '../utils/Clipboard';
import getStaticData from '../utils/getStaticData';

// make Quill only show errors in the console
Quill.debug('error');

// switch Quill default block to Div to avoid 
// extra lines being added when pasted into plain text areas
var Block = Quill.import('blots/block');
Block.tagName = 'DIV';
Quill.register(Block, true);

// register the clipboard module for pasting plain text
Quill.register(
  {
    "modules/clipboard": PlainClipboard,
  },
  true
);

export default function Notes() {
    const { state, notesDispatch } = useContext(StateContext)
    const editorRef = useRef();

    // handle input changes
    const handleChange = (content, delta, source, editor) => {
        notesDispatch({ 
            type: 'SET_NOTES_VALUE',
            notesValue: editor.getHTML()
        })
    }

    // hide the shortcuts container when switched from 'Notes' view
    // resolves an issue with switching the toolbar buttons
    // when switching back while the editor is not shown
    useEffect(() => {
      return () => {
        notesDispatch({ type: 'HIDE_SHORTCUTS'})
      }
    },[])

    // set the editor font size if there is a local storage variable
    useEffect(() => {
      const fontSize = localStorage.getItem('dou_editor_font_size');
      if (fontSize) {
        notesDispatch({ type: 'SET_FONT_SIZE', fontSize });
      }
    }, []);

    // get and set snippets
    useEffect(async () => {
      const snippets = await getStaticData('snippets.json', 'Unable to load snippets', 'Please reload the page');
      notesDispatch({ type: 'SET_SNIPPETS', snippets });
    }, []);

    // set module options for the editor toolbar
    const modules = useMemo(() => ({
        toolbar: {
          container: "#editor-toolbar",
          handlers: {
            'capitalize': handleCapitalizeText
          }
        },
        clipboard: {
          matchVisual: false,
        },
      }), []);
    // set what's allowed inside the editor
    const formats = [
        'bold', 'italic', 'underline', 'strike','color','background','capitalize'
      ]

    return (
        <div 
          className="editor-container"
          onCopy={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleCopyTextSelection(editorRef);
          }}
          onCut={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleCutTextSelection(editorRef);
          }}
        >
            <NotesToolbar editorRef={editorRef} />
            { state.showShortcuts && <Shortcuts snippets={state.snippets} /> }
            { !state.showShortcuts &&
              <ReactQuill 
                value={state.notesValue}
                onChange={(content, delta, source, editor) => {
                  return handleChange(content, delta, source, editor);
                }}
                onKeyUp={(e) => trackTyping(e, editorRef, state.snippets)}
                onKeyDown={(e) => formatPhoneNumber(e, editorRef)}
                theme='snow'
                modules={modules}
                formats={formats}
                ref={editorRef}
                style={{
                  '--editor-font-size': `${state.editorFontSize}px`
                }}
              />
            }
        </div>
    )
}
