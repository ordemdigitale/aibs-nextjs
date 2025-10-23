import Image from 'next/image';
import Link from 'next/link';
import type { ProgramsStructure } from '@/drizzle/schema';

type Props = {
  program: ProgramsStructure;
};

export function BTSLayout({ program }: Props) {
  const imageSrc = program.cover || program.thumbnail || '/images/default-program.jpg';

  return (
    <main className="container mx-auto py-12 px-6">
      {/* Hero section with large cover image */}
      <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={program.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{program.name}</h1>
            <p className="text-xl">{program.level}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Description du Programme</h2>
            <p className="text-gray-700">{program.description || 'Aucune description disponible.'}</p>
          </section>

          {/* Sub-programs section with cards */}
          {program.subPrograms && program.subPrograms.length > 0 && (
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">Spécialités BTS</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {program.subPrograms.map((sub) => (
                  <Link 
                    key={sub.id} 
                    href={`/programs/${sub.slug}`}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-medium text-blue-600">{sub.name}</h3>
                    {sub.description && (
                      <p className="mt-2 text-sm text-gray-600">{sub.description}</p>
                    )}
                    <div className="mt-3 text-sm text-gray-500">
                      {sub.duration && <span className="mr-4">⏱️ {sub.duration}</span>}
                      {sub.campus && <span>📍 {sub.campus}</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar with program details */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h3 className="text-xl font-semibold mb-4">Informations clés</h3>
            <ul className="space-y-4">
              {program.level && (
                <li className="flex items-start">
                  <span className="mr-2">🎓</span>
                  <div>
                    <span className="font-medium">Niveau:</span>
                    <p className="text-gray-600">{program.level}</p>
                  </div>
                </li>
              )}
              {program.duration && (
                <li className="flex items-start">
                  <span className="mr-2">⏱️</span>
                  <div>
                    <span className="font-medium">Durée:</span>
                    <p className="text-gray-600">{program.duration}</p>
                  </div>
                </li>
              )}
              {program.campus && (
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <div>
                    <span className="font-medium">Campus:</span>
                    <p className="text-gray-600">{program.campus}</p>
                  </div>
                </li>
              )}
              {program.langue && (
                <li className="flex items-start">
                  <span className="mr-2">🗣️</span>
                  <div>
                    <span className="font-medium">Langue:</span>
                    <p className="text-gray-600">{program.langue}</p>
                  </div>
                </li>
              )}
              {program.rythm && (
                <li className="flex items-start">
                  <span className="mr-2">📅</span>
                  <div>
                    <span className="font-medium">Rythme:</span>
                    <p className="text-gray-600">{program.rythm}</p>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}