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
      console.log('editor: ', editor)
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
    // static snippets
    const snippets = {
      snippets: [
      {
        shortcut: ".explain",
        text: "Type the shortcut on the left into the Notes section. This is a preview version of the site and only includes example snippets."
      },
      {
        shortcut: ".intro",
        text: "I hope you won’t mind that I keep a transcript of our conversation. It will be used for training purposes and quality assurance."
      },
      {
        shortcut: ".contact",
        text: "Would you like to leave me your contact information, so one of our customer success managers could reach out to you?"
      },
      {
        shortcut: ".transfer",
        text: "Is it okay if I transfer you to another department? They have a better understanding of the problem you are facing. I’m sorry for the inconvenience."
      },
      {
        shortcut: ".hold",
        text: "Can you please hold for a moment while I review the information you have provided? I’ll be right with you."
      },
      {
        shortcut: ".thanks",
        text: "Thank you for waiting. What can I do for you today?"
      },
      {
        shortcut: ".account",
        text: "Can you please give me your account number so I can look up your information?"
      },
      {
        shortcut: ".sorry",
        text: "I’m very sorry, but fulfilling that request isn’t possible at this time. Let me check and see what I can do for you."
      }
    ]};

      notesDispatch({ type: 'SET_SNIPPETS', snippets });
      // custom snippets
      const customSnippets = localStorage.getItem('dou_custom_snippets');
      // set snippets if there is some
      if (customSnippets) {
        notesDispatch({ 
          type: 'SET_CUSTOM_SNIPPETS',
          customSnippets: JSON.parse(customSnippets)
        });
      }
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
            { state.showShortcuts && <Shortcuts snippets={state.snippets} customSnippets={state.customSnippets} /> }
            { !state.showShortcuts &&
              <ReactQuill 
                value={state.notesValue}
                onChange={(content, delta, source, editor) => {
                  return handleChange(content, delta, source, editor);
                }}
                onKeyUp={(e) => trackTyping(e, editorRef, state.snippets, state.customSnippets)}
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
