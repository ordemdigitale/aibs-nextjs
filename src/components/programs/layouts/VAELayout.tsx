import Image from 'next/image';
import Link from 'next/link';
import type { ProgramsStructure } from '@/drizzle/schema';
import PageHeader from '@/components/layout/PageHeader';
import ProgramContent from '@/components/programsContent/ProgramContent';

type Props = {
  program: ProgramsStructure;
};

export function VAELayout({ program }: Props) {
  const coverImage = program.cover;
  //const ContentComponent = PROGRAM_CONTENT_COMPONENTS[program.name];

  return (
    <main className="w-full mx-auto font-poppins">
      {/* Page header */}
      <PageHeader />
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
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">Programme</span>
              </div>
            </li>

            {!program.parentId ?
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">{program.name}</span>
              </div>
            </li>
            :
            <>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">VAE/VAP</span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">{program.name}</span>
                </div>
              </li>
            </>
            }
            

          </ol>
        </nav>
      </div> 
      {/* Page content */}
      {/* Content Component */}
      <ProgramContent program={program} />   

      <div className="min-h-screen">
        {/* Modern Header with Accent */}
        <div className="relative overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            {coverImage && (
              <Image
                src={coverImage}
                alt={program.name}
                fill
                className="object-cover opacity-20"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 mix-blend-multiply" />
          </div>

          <div className="relative">
            <div className="container mx-auto py-20 px-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-2">
                  <span className="text-sm font-medium text-emerald-300">
                    Validation des Acquis
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
              </div>
            </div>
          </div>
        </div>

        {/* Content with Cards */}
        <div className="container mx-auto py-16 px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Program Features */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-8 shadow-lg">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Expérience Valorisée</h3>
                  <p className="mt-2 text-gray-600">
                    Faites reconnaître votre expérience professionnelle et obtenez
                    une certification officielle.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-8 shadow-lg">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Accompagnement Personnalisé
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Bénéficiez d&apos;un suivi individuel tout au long de votre démarche
                    de validation.
                  </p>
                </div>
              </div>

              {/* Subprograms */}
              {program.subPrograms && program.subPrograms.length > 0 && (
                <div className="mt-12">
                  <h2 className="mb-8 text-2xl font-bold">
                    Diplômes accessibles en VAE/VAP
                  </h2>
                  <div className="grid gap-6">
                    {program.subPrograms.map((subProgram) => (
                      <div
                        key={subProgram.id}
                        className="group overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                      >
                        <div className="flex items-start justify-between">
                          <div>
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
                                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
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
                          {subProgram.thumbnail && (
                            <div className="relative ml-4 h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                              <Image
                                src={subProgram.thumbnail}
                                alt={subProgram.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
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
                {/* Info Card */}
                <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                  <div className="bg-emerald-600 p-6">
                    <h3 className="text-xl font-bold text-white">
                      Informations Pratiques
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
                    Nos conseillers sont à votre disposition pour répondre à vos
                    questions sur la VAE/VAP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}