//import { useState } from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/drizzle/queries';

export default async function AdminPosts() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto p-4 font-poppins">
      <h1 className="text-3xl font-bold mb-4">Manage Posts</h1>
      <div className="mb-4">
        <Link href="/admin/posts/create" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Nouveau
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Slug</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border">
                <td className="py-2 px-4">{post.title}</td>
                <td className="py-2 px-4">{post.slug}</td>
                <td className="py-2 px-4">
                  <Link href={`/admin/posts/${post.slug}`} className="text-blue-600 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}