import { ProgramsStructure } from '@/drizzle/schema';
import Image from 'next/image';

type Props = {
  program: ProgramsStructure;
};

export function LicenceDroitLayout({ program }: Props) {
  return (
    <div className="min-h-screen">
      {/* Modern Law Theme Header */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-white">{program.name}</h1>
              {program.description && (
                <p className="mt-4 text-xl text-gray-300">{program.description}</p>
              )}
              <div className="mt-8 flex flex-wrap gap-4">
                {program.level && (
                  <span className="rounded-full bg-blue-600 px-4 py-2 text-white">
                    {program.level}
                  </span>
                )}
                {program.duration && (
                  <span className="rounded-full bg-blue-600 px-4 py-2 text-white">
                    {program.duration}
                  </span>
                )}
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-lg shadow-xl">
              {program.cover && (
                <Image
                  src={program.cover}
                  alt={program.name}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-16 px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              {program.campus && (
                <>
                  <h2 className="text-2xl font-bold">Objectifs</h2>
                  <p>{program.campus}</p>
                </>
              )}

              {program.level && (
                <>
                  <h2 className="mt-8 text-2xl font-bold">Prérequis</h2>
                  <p>{program.level}</p>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
              <h3 className="text-xl font-semibold">Détails du Programme</h3>
              <dl className="mt-4 space-y-4">
                {program.campus && (
                  <div>
                    <dt className="font-medium text-gray-600">Campus</dt>
                    <dd>{program.campus}</dd>
                  </div>
                )}
                {program.langue && (
                  <div>
                    <dt className="font-medium text-gray-600">Langue</dt>
                    <dd>{program.langue}</dd>
                  </div>
                )}
                {program.rythm && (
                  <div>
                    <dt className="font-medium text-gray-600">Rythme</dt>
                    <dd>{program.rythm}</dd>
                  </div>
                )}
                {program.rythm && (
                  <div>
                    <dt className="font-medium text-gray-600">Tarif</dt>
                    <dd>{program.rythm} FCFA</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>

        {/* Subprograms */}
        {program.subPrograms && program.subPrograms.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-3xl font-bold">Spécialisations</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {program.subPrograms.map((subprogram) => (
                <div
                  key={subprogram.id}
                  className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-1"
                >
                  {subprogram.thumbnail && (
                    <div className="relative h-48">
                      <Image
                        src={subprogram.thumbnail}
                        alt={subprogram.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{subprogram.name}</h3>
                    {subprogram.description && (
                      <p className="mt-2 text-gray-600">
                        {subprogram.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}