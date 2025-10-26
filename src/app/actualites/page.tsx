import React from "react";
import { getAllPosts } from "@/drizzle/queries";
import type { Post } from "@/drizzle/schema";
import Link from "next/link";
import Image from "next/image";

export default async function page() {
  const allPosts = await getAllPosts(); // Fetch all posts on server

  const fallbackThumbnail = "/images/default-thumbnail.jpg"; // ensure this file exists in /public/images or change to a path you have
  
  const renderPostItem = (item: Post) => {
    // Determine if post is external: it has a link that starts with "http" or "https"
    const isExternal = item.link && (item.link.startsWith('http') || item.link.startsWith('https'));
    // Determine if post is internal: it has a slug
    const isInternal = item.slug && !isExternal;

    return (
      <Link
        key={item.id}
        href={isInternal ? `/actualites/${item.slug}` : item.link || "#"}
        className="group p-6 sm:p-8 bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10 cursor-pointer"
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <div className="relative overflow-hidden">
          <Image
            className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
            src={item.thumbnail ?? fallbackThumbnail}
            alt={item.title ?? "post thumbnail"}
            width={500}
            height={300}
          />
        </div>
        <div className="mt-6 relative">
          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
        </div>
      </Link>
    );
  }

  return (
    <section className="w-full mx-auto">
      {/* Page header */}
      <div className="bg-[#00048E]">
        <div className="max-w-5xl mx-auto text-white text-5xl font-extrabold pt-32 pb-28">
          Actualités
        </div>
      </div>
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto text-white text-5xl font-extrabold">
        <nav className="flex py-3 text-gray-700" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary">
                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path>
                </svg>
                Accueil
              </Link>
            </li>
            
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">Actualités AIBS</span>
              </div>
            </li>

          </ol>
        </nav>
      </div>

      {/* Page content */}
      <div className="max-w-5xl mx-auto my-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => (
            renderPostItem(post)
          ))}
        </div>
      </div>
    </section>
  )
}
