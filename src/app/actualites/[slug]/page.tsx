import React from 'react'
import { getPostBySlug } from "@/drizzle/queries"
import { notFound } from 'next/navigation';

export default async function page({ params } : { params: Promise<{ slug: string }>}) {
  const data = await getPostBySlug((await params).slug);
  console.log("Post data: ", data);
  if (!data) {
    notFound();
  }
  //const data = page;
  return (
    <section className="w-full mx-auto font-poppins">
      {/* Page content */}
      <div className="max-w-5xl mx-auto my-10">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-700">
          Contenu en cours de développment...
        </p>
      </div>
    </section>
  )
}
