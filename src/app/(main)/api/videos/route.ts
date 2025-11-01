import { NextResponse } from "next/server";
import { getAllVideos } from "@/drizzle/queries";

// API route to fetch all videos data
export async function GET() {
  try {
    const videosData = await getAllVideos();
    return NextResponse.json(videosData);
  } catch (error) {
    console.error('Failed to fetch videos data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos data' },
      { status: 500 }
    );
  }
}