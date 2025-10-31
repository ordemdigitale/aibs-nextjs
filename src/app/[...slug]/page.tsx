import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/drizzle/queries';
import { db, pages } from '@/drizzle/db';
import type { PagesStructure } from '@/drizzle/schema';
//import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import { eq } from 'drizzle-orm';

export default async function DynamicPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const slug = (await params).slug;
  // Normalize slug to match database (remove leading/trailing slashes)
  const fullSlug = `${slug.join('/').replace(/^\/|\/$/g, '')}`; // e.g., "/programmes/bts"
  const page = await getPageBySlug(fullSlug);

  if (!page) {
    notFound();
  }

  // Function to get breadcrumb trail
  const getBreadcrumbTrail = async (): Promise<PagesStructure[]> => {
    const trail: PagesStructure[] = [];
    let currentPage: PagesStructure | null = page;

    while (currentPage) {
      trail.unshift(currentPage); // Add to start of array
      if (currentPage.parentId) {
        currentPage = await db.query.pages.findFirst({
          where: eq(pages.id, currentPage.parentId),
        });
      } else {
        break;
      }
    }

    // Optionally add a "Home" link to the root
    if (trail.length > 0 && trail[0].parentId === null) {
      trail.unshift({ id: 0, name: "Accueil",  } as PagesStructure);
    }

    return trail;
  };

  const breadcrumbTrail = await getBreadcrumbTrail();

  // Recursive function to render subPages
/*   const renderSubPages = (subPages: PagesStructure[]) => {
    if (!subPages || subPages.length === 0) return null;

    return (
      <div className="w-full space-y-4">
        <h2 className="text-xl font-semibold">Allez aux pages</h2>
        <ul className="list-disc pl-5">
          {subPages.map((subPage) => (
            <li key={subPage.id}>
              <Link href={subPage.slug} className="text-blue-600 hover:underline">
                {subPage.name}
              </Link>
              {subPage.subPages && subPage.subPages.length > 0 && renderSubPages(subPage.subPages)}
            </li>
          ))}
        </ul>
      </div>
    );
  }; */

  return (
    <section className="w-full mx-auto font-poppins">
      {/* Page header */}
      <PageHeader />
      
      {/* Breadcrumbs */}
      <div className="max-w-5xl mx-auto text-sm font-medium">
        <nav className="flex py-3 text-gray-700">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path>
            </svg>
            {breadcrumbTrail.map((crumb, index) => (
              <li key={crumb.id || index}>
                {index > 0 && <span className="mx-2">{'>'}</span>}
                {index === breadcrumbTrail.length - 1 ? (
                  <span className="text-gray-600">{crumb.name}</span>
                ) : (
                  <Link href={crumb.slug || '/'} className="hover:underline">
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* Page content with additional fields for programs */}
      {(page.level || page.campus || page.langue || page.rythm || page.duration) ? (
        <div className="max-w-5xl mx-auto my-10 flex flex-wrap justify-between">
          {/* Left block */}
          <div className="xl:max-w-[600px] w-full">
            {page.content && (
              <div className="prose" dangerouslySetInnerHTML={{ __html: page.content }} />
            )}
          </div>
          {/* Right block */}
          <div className="max-w-[370px] w-full">
            {/* Additional Fields for Programs */}
            <aside className="flex flex-col items-center px-3 mb-6">
              {/* Card info */}
              <div className="max-w-sm p-6 rounded-lg bg-[#e3ecfa] mb-6">
                {page.level &&
                <>
                <div className="flex justify-between gap-6">
                  <span className="uppercase font-bold">Niveau</span>
                  <span>{page.level}</span>
                </div>
                <hr className="my-4 border-slate-500 sm:mx-auto lg:my-6" />
                </>}

                {page.campus &&
                <>
                <div className="flex justify-between gap-6">
                  <span className="uppercase font-bold">Campus</span>
                  <span>{page.campus}</span>
                </div>
                <hr className="my-4 border-slate-500 sm:mx-auto lg:my-6" />
                </>}
                
                {page.langue &&
                <>
                <div className="flex justify-between gap-6">
                  <span className="uppercase font-bold">Langue</span>
                  <span>{page.langue}</span>
                </div>
                <hr className="my-4 border-slate-500 sm:mx-auto lg:my-6" />
                </>}

                {page.rythm &&
                <>
                <div className="flex justify-between gap-6">
                  <span className="uppercase font-bold">Rythme</span>
                  <span>{page.rythm}</span>
                </div>
                <hr className="my-4 border-slate-500 sm:mx-auto lg:my-6" />
                </>}

                {page.professionnalisation &&
                <>
                <div className="flex justify-between gap-6">
                  <span className="uppercase font-bold">Professionnalisation</span>
                  <span>{page.professionnalisation}</span>
                </div>
                </>}
              </div>
              {/* Card contact */}
              <div className="max-w-sm p-6 rounded-lg bg-[#e3ecfa] text-center mt-6">
                <p className="mb-3 font-bold text-xl text-blue-400">Vous avez des questions ?</p>
                <p className="mb-3 font-bold text-sm text-blue-800 uppercase">Contactez la Direction Commerciale au</p>
                <hr className="my-4 border-slate-500 sm:mx-auto lg:my-6" />
                <p className="font-bold text-lg">
                  <span>(+225) 27 22 44 50 49</span> <br />
                  <span>(+225) 01 42 27 27 20</span> <br />
                  <span>(+225) 07 97 76 71 29</span>
                </p>
              </div>

              {/* {page.slug === 'bts-gestion-commerciale' && <><span>Des questions sur le BTS Gestion Commerciale ?</span></>} */}
            </aside>
          </div>
          {/* Render nested pages if any */}
          {/* {renderSubPages(page.subPages)} */}
        </div>
      ) : (
        /* Full width content */
        <div className="max-w-5xl mx-auto my-10 flex flex-wrap justify-between">
          {page.content && (
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: page.content }} />
          )}
          {/* Render nested pages if any */}
          {/* {renderSubPages(page.subPages)} */}
        </div>
      )}
    </section>
  );
}

// Optional: Generate static params for pre-rendering
export async function generateStaticParams() {
  const pages = await db.query.pages.findMany({ columns: { slug: true } });
  return pages.map((page) => ({
    slug: page.slug.split('/').filter(Boolean), // e.g., ['programmes', 'bts']
  }));
}