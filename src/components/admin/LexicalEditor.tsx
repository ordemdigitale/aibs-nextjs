"use client";

import { useEffect, useState } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { $getRoot, $getSelection } from 'lexical';
import { $convertToMarkdownString } from '@lexical/markdown'; // Optional for Markdown
//import { RichText } from 'lexical';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/list';
import { ListItemNode, ListNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';
import { TRANSFORMERS } from '@lexical/markdown';

interface LexicalEditorProps {
  initialContent: string;
  onChange: (html: string) => void;
}

function MyInitialNode() {
  return null;
}

function MyLinkPlugin() {
  return null; // Basic link support
}

export default function LexicalEditor({ initialContent, onChange }: LexicalEditorProps) {
  const [editorState, setEditorState] = useState(initialContent || '<p>Start typing...</p>');

  const initialConfig = {
    namespace: 'MyEditor',
    theme: {},
    onError: (error: Error) => console.error(error),
    nodes: [
    //  RichText,
      ListNode,
      ListItemNode,
      LinkNode
    ],
    editorState: editorState,
  };

  const onChangeHandler = (editorState) => {
    editorState.read(() => {
      const html = $getRoot().getHTML();
      onChange(html);
      setEditorState(editorState);
    });
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="border p-2 rounded min-h-[200px]">
        <RichTextPlugin
          contentEditable={<ContentEditable className="outline-none min-h-[200px] prose max-w-none" />}
          placeholder={<div className="absolute top-2 left-2 text-gray-400">Start typing your post content...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={onChangeHandler} />
        <ListPlugin />
        <LinkPlugin />
      </div>
    </LexicalComposer>
  );
}