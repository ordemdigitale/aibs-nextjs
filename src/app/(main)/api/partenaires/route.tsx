import { NextResponse } from "next/server";
import { getAllPartenaires } from "@/drizzle/partenairesQueries";

// API route to fetch all partenaires data
export async function GET() {
  try {
    const partenairesData = await getAllPartenaires();
    return NextResponse.json(partenairesData);
  } catch (error) {
    console.error('Failed to fetch partenaires data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch partenaires data' },
      { status: 500 }
    );
  }
}