import { NextResponse } from "next/server";
import { getAllPosts } from "@/drizzle/queries";

// API route to fetch all posts data
export async function GET() {
  try {
    const postsData = await getAllPosts();
    return NextResponse.json(postsData);
  } catch (error) {
    console.error('Failed to fetch posts data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts data' },
      { status: 500 }
    );
  }
}