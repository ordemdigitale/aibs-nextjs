'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ProgramsStructure } from '@/drizzle/schema';

export default function Programmes() {
  const [programmes, setProgrammes] = useState<ProgramsStructure[]>([]);

  useEffect(() => {
    const fetchProgrammes = async () => {
      const response = await fetch('/api/programs');
      const data = await response.json();
      setProgrammes(data);
    };

    fetchProgrammes();
  }, []);

  const fallbackThumbnail = "/images/default-thumbnail.jpg"; // ensure this file exists in /public/images or change to a path you have

  return (
    <section className="p-6 w-full">
      <div className="container mx-auto py-10">
        <div className="flex flex-col text-center max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 uppercase">Nos Programmes de Formation</h2>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Display only parent programmes */}
        <div className="grid gap-4 justify-center sm:grid-cols-2 lg:grid-cols-4">
          {programmes.filter((p: ProgramsStructure) => !p.parentId).map((programme: ProgramsStructure) => (
            <Link key={programme.id} href={`/programme/${programme.slug}`} className="flex flex-col group">
              <div className="relative w-full aspect-w-13 aspect-h-12 overflow-hidden">
                <Image
                  className="w-full h-full object-cover transform group-hover:scale-105 group-focus:scale-105 duration-300"
                  src={programme.thumbnail ?? fallbackThumbnail}
                  alt={programme.name}
                  width={500}
                  height={300}
                />
              </div>

              <div className="h-3/6 bg-white font-karla font-semibold text-xl group-hover:bg-blue-700 group-hover:text-white group-focus:bg-primary group-focus:text-white transition-colors duration-150 px-5 flex justify-center items-center text-center">
                <h4 className="h5">{programme.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
