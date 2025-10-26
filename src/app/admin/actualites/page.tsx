"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { createPost, updatePost, getPostBySlug } from '@/drizzle/queries';

type PostFormData = {
  title: string;
  slug: string;
  thumbnail: string;
  content: string;
  link?: string;
};

export default function AdminPosts({ params }: { params: { slug?: string } }) {
  const router = useRouter();
  const { register, handleSubmit, setValue, watch } = useForm<PostFormData>({
    defaultValues: { title: '', slug: '', thumbnail: '', content: '', link: '' },
  });
  const [isEditing, setIsEditing] = useState(!!params.slug);
  const [editorContent, setEditorContent] = useState('');

  const editor = useEditor({
    extensions: [StarterKit],
    content: editorContent,
    onUpdate: ({ editor }) => setEditorContent(editor.getHTML()),
  });

  useEffect(() => {
    if (params.slug) {
      const fetchPost = async () => {
        const post = await getPostBySlug(params.slug);
        if (post) {
          setValue('title', post.title);
          setValue('slug', post.slug);
          setValue('thumbnail', post.thumbnail || '');
          setValue('link', post.link || '');
          setEditorContent(post.content || '');
        }
      };
      fetchPost();
    }
  }, [params.slug, setValue]);

  const onSubmit = async (data: PostFormData) => {
    const postData = {
      title: data.title,
      slug: data.slug,
      thumbnail: data.thumbnail,
      content: editorContent,
      link: data.link,
    };

    try {
      if (isEditing && params.slug) {
        const existingPost = await getPostBySlug(params.slug);
        if (existingPost) {
          await updatePost(existingPost.id, postData);
        }
      } else {
        await createPost(postData);
      }
      router.push('/admin/posts'); // Redirect to posts list (to be implemented)
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 font-poppins">
      <h1 className="text-3xl font-bold mb-4">{isEditing ? 'Edit Post' : 'Create Post'}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isEditing ? 'Update Post' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}