import Image from 'next/image';
import Link from 'next/link';
import type { ProgramsStructure } from '@/drizzle/schema';

type Props = {
  program: ProgramsStructure;
};

export function BachelorLayout({ program }: Props) {
  const imageSrc = program.cover || program.thumbnail || '/images/default-program.jpg';

  return (
    <main className="container mx-auto py-12 px-6">
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Left side: Program info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6">{program.name}</h1>
          <p className="text-xl text-gray-600 mb-8">{program.description || 'Aucune description disponible.'}</p>
          
          {/* Key info pills */}
          <div className="flex flex-wrap gap-4 mb-8">
            {program.level && (
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                {program.level}
              </span>
            )}
            {program.duration && (
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
                {program.duration}
              </span>
            )}
            {program.langue && (
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">
                {program.langue}
              </span>
            )}
          </div>
        </div>

        {/* Right side: Image */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={program.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Program details in a modern card layout */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {program.campus && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <span className="text-2xl mb-4 block">📍</span>
            <h3 className="font-semibold mb-2">Campus</h3>
            <p className="text-gray-600">{program.campus}</p>
          </div>
        )}
        {program.rythm && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <span className="text-2xl mb-4 block">📅</span>
            <h3 className="font-semibold mb-2">Rythme</h3>
            <p className="text-gray-600">{program.rythm}</p>
          </div>
        )}
        {program.duration && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <span className="text-2xl mb-4 block">⏱️</span>
            <h3 className="font-semibold mb-2">Durée</h3>
            <p className="text-gray-600">{program.duration}</p>
          </div>
        )}
      </div>

      {/* Sub-programs in a modern grid */}
      {program.subPrograms && program.subPrograms.length > 0 && (
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-8">Spécialisations Bachelor</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.subPrograms.map((sub) => (
              <Link
                key={sub.id}
                href={`/programs/${sub.slug}`}
                className="group bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all"
              >
                {sub.thumbnail && (
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={sub.thumbnail}
                      alt={sub.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h3 className="text-lg font-medium text-blue-600 group-hover:text-blue-700">
                  {sub.name}
                </h3>
                {sub.description && (
                  <p className="mt-2 text-sm text-gray-600">{sub.description}</p>
                )}
                <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                  {sub.level && <span className="mr-4">🎓 {sub.level}</span>}
                  {sub.duration && <span>⏱️ {sub.duration}</span>}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}