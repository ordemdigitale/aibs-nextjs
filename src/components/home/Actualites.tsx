"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Post, Video } from "@/drizzle/schema";

export default function Actualites() {
  // typed posts array to match drizzle Post type
  const [posts, setPosts] = useState<Post[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) return;
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        // ignore fetch errors for now
        console.error("Failed to fetch posts", err);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/videos");
        if (!response.ok) return;
        const data: Video[] = await response.json();
        setVideos(data);
      } catch (err) {
        // ignore fetch errors for now
        console.error("Failed to fetch videos", err);
      }
    };

    fetchVideos();
  }, []);

  const fallbackThumbnail = "/images/default-thumbnail.jpg"; // ensure this file exists in /public/images or change to a path you have

  return (
    <section className="p-6 w-full bg-gray-50">
      <div className="container mx-auto py-10">
        <div className="flex flex-col text-center max-w-5xl mx-auto mb-10">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 uppercase">Actualités de aibs</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* slice first 3 posts */}
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={post.link ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <Image
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  src={post.thumbnail ?? fallbackThumbnail}
                  alt={post.title ?? "post thumbnail"}
                  width={500}
                  height={300}
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/actualites"
            className="text-white bg-blue-700 border-2 border-transparent transition duration-700 ease-in-out hover:bg-white hover:text-blue-700 hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-6 py-5 text-center">
            Voir plus d&apos;actualités
          </Link>
        </div>
      </div>

      <div className="max-w-full mx-auto px-6 md:px-12 xl:px-6">

        <div className="grid grid-cols-2 gap-4">
        {videos.slice(0, 2).map((video) => (
          <div key={video.id}>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.videoid}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`YouTube video ${video.videoid}`}
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="font-medium mt-4 text-center">{video.title}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {videos.slice(2, 4).map((video) => (
          <div key={video.id}>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.videoid}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`YouTube video ${video.videoid}`}
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="font-medium mt-4 text-center">{video.title}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
