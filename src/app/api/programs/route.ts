import { NextResponse } from "next/server";
import { getProgramsStructure } from "@/drizzle/queries";

// API route to fetch all programs data
export async function GET() {
  try {
    const programsData = await getProgramsStructure();
    // Filter sub-pages to return only direct children of "Programmes" page
    const filteredPrograms = programsData ? programsData.subPages : [];
    return NextResponse.json(filteredPrograms);
  } catch (error) {
    console.error('Failed to fetch programs data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch programs data' },
      { status: 500 }
    );
  }
}