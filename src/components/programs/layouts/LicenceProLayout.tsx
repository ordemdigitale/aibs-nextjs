import { ProgramsStructure } from '@/drizzle/schema';
import Image from 'next/image';

type Props = {
  program: ProgramsStructure;
};

export function LicenceProLayout({ program }: Props) {
  const coverImage = program.cover;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto py-16 px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl font-bold text-white lg:text-5xl">
                {program.name}
              </h1>
              {program.description && (
                <p className="mt-6 text-lg text-white/90">{program.description}</p>
              )}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {program.level && (
                  <div className="rounded-lg bg-white/10 p-4">
                    <div className="text-sm text-white/80">Niveau</div>
                    <div className="font-medium text-white">{program.level}</div>
                  </div>
                )}
                {program.duration && (
                  <div className="rounded-lg bg-white/10 p-4">
                    <div className="text-sm text-white/80">Durée</div>
                    <div className="font-medium text-white">{program.duration}</div>
                  </div>
                )}
                {program.rythm && (
                  <div className="rounded-lg bg-white/10 p-4">
                    <div className="text-sm text-white/80">Rythme</div>
                    <div className="font-medium text-white">{program.rythm}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="order-1 md:order-2">
              {coverImage && (
                <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[400px]">
                  <Image
                    src={coverImage}
                    alt={program.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-16 px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {program.description && (
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold">Description</h2>
                <p>{program.description}</p>
              </div>
            )}

            {/* Subprograms */}
            {program.subPrograms && program.subPrograms.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-8 text-2xl font-bold">Spécialisations</h2>
                <div className="grid gap-6">
                  {program.subPrograms.map((subProgram) => (
                    <div
                      key={subProgram.id}
                      className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl"
                    >
                      <div className="grid items-center gap-6 md:grid-cols-3">
                        {subProgram.thumbnail && (
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={subProgram.thumbnail}
                              alt={subProgram.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-6 md:col-span-2">
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
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-6 space-y-6">
              <div className="rounded-xl bg-gray-50 p-6 shadow-lg">
                <h3 className="text-xl font-semibold">Informations pratiques</h3>
                <dl className="mt-4 space-y-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}