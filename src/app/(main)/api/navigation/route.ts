import { NextResponse } from "next/server";
import { getNavigationData } from "@/drizzle/queries";

// API route to fetch navigation data
export async function GET() {
  try {
    const navData = await getNavigationData();
    return NextResponse.json(navData);
  } catch (error) {
    console.error('Failed to fetch navigation data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch navigation data' },
      { status: 500 }
    );
  }
}