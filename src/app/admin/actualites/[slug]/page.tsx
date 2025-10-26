import { redirect } from "next/navigation";
import { getPostBySlug, updatePost } from "@/drizzle/queries";
import PostEditForm from "@/components/admin/PostEditForm";

export async function updatePostAction(prevState: { success?: boolean; error?: string }, formData: FormData) {
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
    const existingPost = await getPostBySlug(slug);
    if (existingPost) {
      await updatePost(existingPost.id, { title, slug, thumbnail, content, link, updatedAt: new Date().toISOString() });
      return { success: true, error: undefined };
    }
    return { success: false, error: 'Post not found' };
  } catch (error) {
    console.error('Error updating post:', error);
    return { success: false, error: 'Failed to update post' };
  }
}

export default async function AdminPostEdit({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    redirect('/admin/posts'); // Redirect if post not found
  }

  const initialData = {
    title: post.title,
    slug: post.slug || '',
    thumbnail: post.thumbnail || '',
    content: post.content || '',
    link: post.link || '',
  };

  return <PostEditForm initialData={initialData} action={updatePostAction} isEditing={true} />;
}