import React from 'react'
import { getPostBySlug } from "@/drizzle/queries"
import { notFound } from 'next/navigation';
import Image from "next/image";

export default async function PageActualite({ params } : { params: Promise<{ slug: string }>}) {
  const data = await getPostBySlug((await params).slug);
  console.log("Post data: ", data);
  if (!data) {
    notFound();
  }
  //const data = page;
  return (
    <section className="w-full mx-auto font-poppins">
      {/* Page header */}
      <div className="bg-[#00048E]">
        <div className="max-w-5xl mx-auto text-white text-5xl font-extrabold pt-32 pb-28">
          {data.title}
        </div>
      </div>
      {/* Page content */}
      <div className="max-w-5xl mx-auto my-10">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        
        {data.content ? (
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: data.content }} />
        ) : data.link ? (
          <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Voir le contenu complet ici
          </a>
        ) : (
          <p className="text-gray-700">Content non disponible.</p>
        )}
      </div>
    </section>
  )
}
