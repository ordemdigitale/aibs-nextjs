"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

interface TiptapEditorProps {
  content: string;
  onUpdate: (html: string) => void;
}

export default function TiptapEditor({ content, onUpdate }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content || '<p>Start typing...</p>',
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor) {
      console.log('TiptapEditor: Setting content:', content);
      editor.commands.setContent(content || '<p>Start typing...</p>');
      editor.commands.focus('all'); // Focus the editor after setting content
    }
  }, [content, editor]);

  if (!editor) {
    return <div className="border p-2 rounded bg-gray-100 min-h-[200px] flex items-center justify-center">Loading editor...</div>;
  }

  return (
    <div className="tiptap">
      <EditorContent editor={editor} className="border p-2 rounded min-h-[200px] prose max-w-none" />
    </div>
  );
}