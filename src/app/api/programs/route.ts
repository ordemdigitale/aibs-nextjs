import { NextResponse } from "next/server";
import { getAllPrograms } from "@/drizzle/queries";

// API route to fetch all programs data
export async function GET() {
  try {
    const programsData = await getAllPrograms();
    return NextResponse.json(programsData);
  } catch (error) {
    console.error('Failed to fetch programs data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch programs data' },
      { status: 500 }
    );
  }
}