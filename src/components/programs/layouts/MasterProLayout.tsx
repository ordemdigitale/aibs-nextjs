import { ProgramsStructure } from '@/drizzle/schema';
import Image from 'next/image';

type Props = {
  program: ProgramsStructure;
};

export function MasterProLayout({ program }: Props) {
  const coverImage = program.cover;
  
  return (
    <div className="min-h-screen">
      {/* Modern Gradient Header with Side Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90" />
        <div className="container relative mx-auto grid min-h-[60vh] grid-cols-1 gap-8 py-16 px-6 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white lg:text-5xl">
              {program.name}
            </h1>
            {program.description && (
              <p className="mt-6 text-lg text-white/90">{program.description}</p>
            )}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {program.level && (
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-sm text-white/80">Niveau</div>
                  <div className="font-medium text-white">{program.level}</div>
                </div>
              )}
              {program.duration && (
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-sm text-white/80">Durée</div>
                  <div className="font-medium text-white">{program.duration}</div>
                </div>
              )}
              {program.rythm && (
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-sm text-white/80">Rythme</div>
                  <div className="font-medium text-white">{program.rythm}</div>
                </div>
              )}
            </div>
          </div>
          <div className="relative flex items-center">
            {coverImage && (
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
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

      {/* Main Content */}
      <div className="container mx-auto py-16 px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              {program.description && (
                <div>
                  <h2 className="text-2xl font-bold">Description</h2>
                  <p>{program.description}</p>
                </div>
              )}
            </div>

            {/* Subprograms */}
            {program.subPrograms && program.subPrograms.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-8 text-2xl font-bold">Spécialisations</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {program.subPrograms.map((subProgram) => (
                    <div
                      key={subProgram.id}
                      className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                    >
                      {subProgram.thumbnail && (
                        <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                          <Image
                            src={subProgram.thumbnail}
                            alt={subProgram.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <h3 className="text-xl font-semibold">{subProgram.name}</h3>
                      {subProgram.description && (
                        <p className="mt-2 text-gray-600">
                          {subProgram.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div>
            <div className="sticky top-6 space-y-6">
              <div className="rounded-xl bg-gray-50 p-6 shadow-lg">
                <h3 className="text-xl font-semibold">Détails du Programme</h3>
                <dl className="mt-4 space-y-4">
                  {program.campus && (
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-600">Campus</dt>
                      <dd>{program.campus}</dd>
                    </div>
                  )}
                  {program.langue && (
                    <div className="flex justify-between">
                      <dt className="font-medium text-gray-600">Langue</dt>
                      <dd>{program.langue}</dd>
                    </div>
                  )}
                  {program.rythm && (
                    <div className="flex justify-between">
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
  );
}