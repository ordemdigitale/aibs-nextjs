import { ProgramsStructure } from '@/drizzle/schema';
import Image from 'next/image';

type Props = {
  program: ProgramsStructure;
};

export function MBALayout({ program }: Props) {
  const coverImage = program.cover;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-10" />
          {coverImage && (
            <Image
              src={coverImage}
              alt={program.name}
              fill
              className="object-cover opacity-20"
              priority
            />
          )}
        </div>
        <div className="container relative mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-yellow-500/10 px-4 py-2">
              <span className="text-sm font-medium text-yellow-400">
                Master of Business Administration
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {program.name}
            </h1>
            {program.description && (
              <p className="mt-6 text-xl leading-8 text-gray-300">
                {program.description}
              </p>
            )}
            <div className="mt-10 flex flex-wrap gap-4">
              {program.level && (
                <div className="rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur-sm">
                  Niveau: {program.level}
                </div>
              )}
              {program.duration && (
                <div className="rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur-sm">
                  Durée: {program.duration}
                </div>
              )}
              {program.rythm && (
                <div className="rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur-sm">
                  Rythme: {program.rythm}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto py-16 px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              {program.description && (
                <div className="rounded-2xl bg-white p-8 shadow-lg">
                  <h2 className="text-2xl font-bold">À propos du programme</h2>
                  <p className="mt-4">{program.description}</p>
                </div>
              )}
            </div>

            {/* Subprograms as Premium Cards */}
            {program.subPrograms && program.subPrograms.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-8 text-2xl font-bold">Spécialisations MBA</h2>
                <div className="grid gap-8 sm:grid-cols-2">
                  {program.subPrograms.map((subProgram) => (
                    <div
                      key={subProgram.id}
                      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
                    >
                      {subProgram.thumbnail && (
                        <div className="relative h-56">
                          <Image
                            src={subProgram.thumbnail}
                            alt={subProgram.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                      )}
                      <div className="relative p-6">
                        <h3 className="text-xl font-bold">{subProgram.name}</h3>
                        {subProgram.description && (
                          <p className="mt-2 text-gray-600">
                            {subProgram.description}
                          </p>
                        )}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {subProgram.level && (
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                              {subProgram.level}
                            </span>
                          )}
                          {subProgram.duration && (
                            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                              {subProgram.duration}
                            </span>
                          )}
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
            <div className="sticky top-6">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6">
                  <h3 className="text-xl font-bold text-white">
                    Détails du Programme
                  </h3>
                </div>
                <div className="p-6">
                  <dl className="space-y-4">
                    {program.campus && (
                      <div className="flex items-center justify-between">
                        <dt className="font-medium text-gray-600">Campus</dt>
                        <dd>{program.campus}</dd>
                      </div>
                    )}
                    {program.langue && (
                      <div className="flex items-center justify-between">
                        <dt className="font-medium text-gray-600">Langue</dt>
                        <dd>{program.langue}</dd>
                      </div>
                    )}
                    {program.rythm && (
                      <div className="flex items-center justify-between">
                        <dt className="font-medium text-gray-600">Rythme</dt>
                        <dd>{program.rythm}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}