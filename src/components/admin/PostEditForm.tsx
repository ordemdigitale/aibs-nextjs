"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { useActionState } from 'react';

type PostFormData = {
  title: string;
  slug: string;
  thumbnail: string;
  content: string;
  link?: string;
};

type ActionState = { success?: boolean; error?: string };

// Dynamic import for TiptapEditor with ssr: false
const TiptapEditor = dynamic(() => import('@/components/admin/TiptapEditor'), {
  ssr: false,
  loading: () => <div className="border p-2 rounded bg-gray-100 min-h-[200px] flex items-center justify-center">Loading editor...</div>,
});

export default function PostEditForm({
  initialData,
  action,
  isEditing,
}: {
  initialData: PostFormData;
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  isEditing: boolean;
}) {
  const {
    register,
  //  handleSubmit,
    setValue,
  //  watch
  } = useForm<PostFormData>({
    defaultValues: initialData,
  });
  const [editorContent, setEditorContent] = useState(initialData.content || '');
  const [state, formAction, isPending] = useActionState(action, { success: false, error: undefined });

  // Update form values when initialData changes
  useEffect(() => {
    setValue('title', initialData.title);
    setValue('slug', initialData.slug || '');
    setValue('thumbnail', initialData.thumbnail || '');
    setValue('link', initialData.link || '');
    setEditorContent(initialData.content || '');
    console.log('Form updated, editorContent length:', editorContent.length);
  }, [initialData, setValue, editorContent.length]);

  const handleEditorUpdate = (html: string) => {
    setEditorContent(html);
    setValue('content', html);
    console.log('Editor content updated:', html.substring(0, 100) + '...');
  };

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
          <TiptapEditor content={editorContent} onUpdate={handleEditorUpdate} />
          <input type="hidden" {...register('content')} value={editorContent} />
        </div>
        {state.error && <p className="text-red-600">{state.error}</p>}
        {state.success && <p className="text-green-600">Post {isEditing ? 'updated' : 'created'} successfully!</p>}
        <button
          type="submit"
          className={`px-4 py-2 rounded ${
            isPending
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
          disabled={isPending}
        >
          {isPending ? 'Saving...' : (isEditing ? 'Update Post' : 'Create Post')}
        </button>
      </form>
    </div>
  );
}