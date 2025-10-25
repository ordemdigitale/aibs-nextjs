import Image from 'next/image';
import Link from 'next/link';
import type { ProgramsStructure } from '@/drizzle/schema';
import PageHeader from '@/components/layout/PageHeader';
import ProgramContent from '@/components/programsContent/ProgramContent';

type Props = {
  program: ProgramsStructure;
};

// Custom display names mapping
const displayNames: Record<string, string> = {
  'brevet de technicien supérieur (bts)': 'BTS',
};

export function BTSLayout({ program }: Props) {
  const imageSrc = program.cover || '/images/default-program.jpg';
  console.log('BTSLayout received program:', program);
  console.log('BTSLayout subprograms:', program.subPrograms);

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
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">{displayNames[program.name.toLowerCase()] || program.name}</span>
              </div>
            </li>
            :
            <>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">BTS</span>
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
      <ProgramContent program={program} />
    </main>
  );
}