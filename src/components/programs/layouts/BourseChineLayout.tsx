import { ProgramsStructure } from '@/drizzle/schema';
import Image from 'next/image';

type Props = {
  program: ProgramsStructure;
};

export function BourseChineLayout({ program }: Props) {
  const coverImage = program.cover;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Chinese Theme */}
      <div className="relative overflow-hidden bg-red-700">
        <div className="absolute inset-0">
          {coverImage && (
            <Image
              src={coverImage}
              alt={program.name}
              fill
              className="object-cover opacity-30"
              priority
            />
          )}
        </div>
        <div className="relative container mx-auto py-20 px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-red-500/20 px-4 py-2">
              <span className="text-sm font-medium text-red-100">
                Opportunité internationale
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {program.name}
            </h1>
            {program.description && (
              <p className="mt-6 text-xl leading-8 text-red-100">
                {program.description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-4">
              {program.level && (
                <div className="rounded-lg bg-red-600/30 px-4 py-2 text-red-100">
                  Niveau: {program.level}
                </div>
              )}
              {program.duration && (
                <div className="rounded-lg bg-red-600/30 px-4 py-2 text-red-100">
                  Durée: {program.duration}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Content Area */}
          <div className="lg:col-span-2">
            {/* Program Features */}
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">
                  Opportunités Internationales
                </h3>
                <p className="mt-2 text-gray-600">
                  Étudiez dans des universités chinoises prestigieuses et
                  développez votre réseau international.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Immersion Culturelle</h3>
                <p className="mt-2 text-gray-600">
                  Découvrez la culture chinoise et apprenez le mandarin dans un
                  environnement authentique.
                </p>
              </div>
            </div>

            {/* Program Description */}
            {program.description && (
              <div className="mt-12">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold">À propos du programme</h2>
                  <p>{program.description}</p>
                </div>
              </div>
            )}

            {/* Subprograms */}
            {program.subPrograms && program.subPrograms.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-8 text-2xl font-bold">
                  Programmes disponibles
                </h2>
                <div className="grid gap-6">
                  {program.subPrograms.map((subProgram) => (
                    <div
                      key={subProgram.id}
                      className="group overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                    >
                      <div className="grid gap-6 md:grid-cols-3">
                        {subProgram.thumbnail && (
                          <div className="relative h-48 overflow-hidden rounded-lg md:h-full">
                            <Image
                              src={subProgram.thumbnail}
                              alt={subProgram.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="md:col-span-2">
                          <h3 className="text-xl font-semibold">
                            {subProgram.name}
                          </h3>
                          {subProgram.description && (
                            <p className="mt-2 text-gray-600">
                              {subProgram.description}
                            </p>
                          )}
                          <div className="mt-4 flex flex-wrap gap-2">
                            {subProgram.level && (
                              <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
                                {subProgram.level}
                              </span>
                            )}
                            {subProgram.duration && (
                              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                                {subProgram.duration}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-6 space-y-6">
              {/* Program Info */}
              <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="bg-red-700 p-6">
                  <h3 className="text-xl font-bold text-white">
                    Informations clés
                  </h3>
                </div>
                <div className="p-6">
                  <dl className="space-y-4">
                    {program.campus && (
                      <div>
                        <dt className="font-medium text-gray-600">Campus</dt>
                        <dd className="mt-1">{program.campus}</dd>
                      </div>
                    )}
                    {program.langue && (
                      <div>
                        <dt className="font-medium text-gray-600">Langue</dt>
                        <dd className="mt-1">{program.langue}</dd>
                      </div>
                    )}
                    {program.rythm && (
                      <div>
                        <dt className="font-medium text-gray-600">Rythme</dt>
                        <dd className="mt-1">{program.rythm}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>

              {/* Contact Card */}
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Besoin d&apos;informations ?</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Nos conseillers sont à votre disposition pour vous guider dans
                  votre projet d&apos;études en Chine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}