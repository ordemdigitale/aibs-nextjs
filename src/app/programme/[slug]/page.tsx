import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProgramLayout } from '@/components/programs/layouts';
//import type { ProgramsStructure } from '@/drizzle/schema';
import { db } from '@/drizzle/db';
import { programs } from '@/drizzle/schema';
import { getProgramBySlug } from '@/drizzle/queries';

//import { PageProps } from 'next/types';

//type Params = { slug: string };

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  params: { slug: string } | Promise<{ slug: string }>;
  searchParams?: SearchParams | Promise<SearchParams>;
}

export async function generateStaticParams() {
  try {
    // Get all programs for static path generation
    const allPrograms = await db.select().from(programs);
    // Just return the slugs for each program
    const paths = allPrograms.map((program) => ({
      slug: program.slug
    }));
    return paths;
  } catch (error) {
    console.error('Error generating static paths:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await Promise.resolve(params);
    const program = await getProgramBySlug(slug);
    
    if (!program) {
      return {
        title: 'Programme non trouvé | AIBS',
        description: 'Le programme demandé n\'existe pas',
      };
    }

    return {
      title: `${program.name} | AIBS`,
      description: program.description || `Découvrez notre programme ${program.name} à l'AIBS`,
      openGraph: {
        title: program.name,
        description: program.description || `Découvrez notre programme ${program.name} à l'AIBS`,
        images: program.cover ? [{ url: program.cover }] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Erreur | AIBS',
      description: 'Une erreur est survenue lors du chargement du programme',
    };
  }
}

export default async function ProgrammePage({ params }: Props) {
  try {
    const { slug } = await Promise.resolve(params);
    const program = await getProgramBySlug(slug);

    if (!program) {
      notFound();
    }

    return <ProgramLayout program={program} />;
  } catch (error) {
    console.error('Error loading program:', error);
    return (
      <main className="container mx-auto py-20 px-6">
        <h1 className="text-2xl font-semibold">Erreur</h1>
        <p className="mt-4 text-gray-600">
          Une erreur est survenue lors du chargement du programme.
          Veuillez réessayer ultérieurement.
        </p>
        <Link href="/programme" className="mt-6 inline-block text-blue-600 hover:text-blue-800 transition-colors">
          Retour aux programmes
        </Link>
      </main>
    );
  }
}
