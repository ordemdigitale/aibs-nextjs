"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useActionState } from 'react';

type PostFormData = {
  title: string;
  slug: string;
  thumbnail: string;
  content: string;
  link?: string;
};

type ActionState = { success?: boolean; error?: string };

export default function PostEditForm({
  initialData,
  action,
  isEditing,
}: {
  initialData: PostFormData;
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  isEditing: boolean;
}) {
  const { register, handleSubmit, setValue, watch } = useForm<PostFormData>({
    defaultValues: initialData,
  });
  const [editorContent, setEditorContent] = useState(initialData.content || '');
  const [state, formAction, isPending] = useActionState(action, { success: false, error: undefined });

  // Initialize editor with immediatelyRender: false
  const editor = useEditor({
    extensions: [StarterKit],
    content: editorContent,
    onUpdate: ({ editor }) => setEditorContent(editor.getHTML()),
    immediatelyRender: false,
    onCreate: ({ editor }) => {
      console.log('Editor created:', editor); // Debug log
      editor.commands.setContent(initialData.content || ''); // Set content after creation
    },
  });

  useEffect(() => {
    console.log('Initial data:', initialData); // Debug log
    setValue('title', initialData.title);
    setValue('slug', initialData.slug || '');
    setValue('thumbnail', initialData.thumbnail || '');
    setValue('link', initialData.link || '');
    setEditorContent(initialData.content || '');

    // Update editor content when editor is ready
    if (editor && !editor.isDestroyed) {
      console.log('Updating editor content:', initialData.content); // Debug log
      editor.commands.setContent(initialData.content || '');
    }
  }, [initialData, setValue, editor]);

  // Show loading state if editor is not ready
  if (!editor) {
    return <div>Loading editor...</div>;
  }

  return (
    <div className="container mx-auto p-4 font-poppins">
      <h1 className="text-3xl font-bold mb-4">{isEditing ? 'Edit Post' : 'Create Post'}</h1>
      <form action={formAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            {...register('title', { required: true })}
            className="mt-1 block w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Slug</label>
          <input
            {...register('slug', { required: true })}
            className="mt-1 block w-full p-2 border rounded"
            disabled={isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
          <input
            {...register('thumbnail')}
            className="mt-1 block w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">External Link (optional)</label>
          <input
            {...register('link')}
            className="mt-1 block w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <EditorContent editor={editor} className="mt-1 border p-2 rounded" />
          <input type="hidden" {...register('content')} value={editorContent} />
        </div>
        {state.error && <p className="text-red-600">{state.error}</p>}
        {state.success && <p className="text-green-600">Post updated successfully!</p>}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={isPending}
        >
          {isEditing ? 'Update Post' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}