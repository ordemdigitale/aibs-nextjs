import { redirect } from 'next/navigation';
import { createPost } from '@/drizzle/queries';
import PostEditForm from "@/components/admin/PostEditForm";

async function createPostAction(prevState: { success?: boolean; error?: string }, formData: FormData) {
  "use server"; // Explicitly mark as server action
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const thumbnail = formData.get('thumbnail') as string;
  const content = formData.get('content') as string;
  const link = formData.get('link') as string | undefined;

  if (!title || !slug) {
    return { success: false, error: 'Title and slug are required' };
  }

  try {
    await createPost({ title, slug, thumbnail, content, link });
    return { success: true, error: undefined };
  } catch (error) {
    console.error('Error creating post:', error);
    return { success: false, error: 'Failed to create post' };
  }
}

export default function AdminPostCreate() {
  const initialData = {
    title: '',
    slug: '',
    thumbnail: '',
    content: '',
    link: '',
  };

  return <PostEditForm initialData={initialData} action={createPostAction} isEditing={false} />;
}