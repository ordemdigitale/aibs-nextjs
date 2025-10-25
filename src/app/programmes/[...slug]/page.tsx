import { getProgramBySlug } from "@/drizzle/queries";
import ProgramPage from "@/components/programs/ProgramPage";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string[];
  };
};

export default async function Page({ params }: Props) {
  // The last segment of the slug array is the actual program slug
  const programSlug = params.slug[params.slug.length - 1];
  
  // Get program data including parent info
  const program = await getProgramBySlug(programSlug);
  
  // If program not found, show 404
  if (!program) {
    notFound();
  }
  
  console.log('Program data:', program);
  
  return <ProgramPage program={program} />;
}