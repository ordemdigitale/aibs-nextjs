import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/drizzle/queries';
import { db, pages } from '@/drizzle/db';
import type { PagesStructure } from '@/drizzle/schema';
import Image from 'next/image';
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
      trail.unshift({ id: 0, name: 'Home', slug: '/', subPages: [], parentId: null, order: 0, createdAt: '', updatedAt: '' } as PagesStructure);
    }

    return trail;
  };

  const breadcrumbTrail = await getBreadcrumbTrail();

  // Recursive function to render subPages
  const renderSubPages = (subPages: PagesStructure[]) => {
    if (!subPages || subPages.length === 0) return null;

    return (
      <div className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold">Sub-Pages</h2>
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
  };

  return (
    <section className="w-full mx-auto font-poppins">
      {/* Page header */}
      <PageHeader />
      {/* Breadcrumbs */}
      <nav className="mb-4 text-sm text-gray-600">
        <ol className="flex space-x-2">
          {breadcrumbTrail.map((crumb, index) => (
            <li key={crumb.id || index}>
              {index > 0 && <span className="mx-2">{'>'}</span>}
              {index === breadcrumbTrail.length - 1 ? (
                crumb.name
              ) : (
                <Link href={crumb.slug || '#'} className="text-blue-600 hover:underline">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4">{page.name}</h1>

      {/* Cover Image */}
      {page.cover && (
        <div className="mb-4">
          <Image src={page.cover} alt={page.name} width={800} height={400} className="w-full h-auto object-cover rounded-lg" />
        </div>
      )}

      {/* Thumbnail */}
      {page.thumbnail && (
        <div className="mb-4">
          <Image src={page.thumbnail} alt={page.name} width={300} height={200} className="w-full h-auto object-cover rounded-lg" />
        </div>
      )}

      {/* Content */}
      {page.content && (
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: page.content }} />
      )}

      {/* Additional Fields for Programs */}
      {(page.level || page.campus || page.langue || page.rythm || page.duration) && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          {page.level && <p><strong>Level:</strong> {page.level}</p>}
          {page.campus && <p><strong>Campus:</strong> {page.campus}</p>}
          {page.langue && <p><strong>Language:</strong> {page.langue}</p>}
          {page.rythm && <p><strong>Rhythm:</strong> {page.rythm}</p>}
          {page.professionnalisation && <p><strong>Professionalization:</strong> {page.professionnalisation}</p>}
          {page.internationalisation && <p><strong>Internationalization:</strong> {page.internationalisation}</p>}
          {page.duration && <p><strong>Duration:</strong> {page.duration}</p>}
        </div>
      )}

      {/* Render nested pages if any */}
      {renderSubPages(page.subPages)}
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