import { cache } from "react";
import { db } from '@/drizzle/db';
import { navLinks, subLinks, nestedLinks, programs, posts } from '@/drizzle/schema';
import { eq, asc } from 'drizzle-orm';
import type { NavigationStructure, ProgramsStructure } from '@/drizzle/schema';

// Query function to get all navigation data with the same structure
export const getNavigationData = cache(async (): Promise<NavigationStructure[]> => {
  const result = await db.query.navLinks.findMany({
    orderBy: [asc(navLinks.order)],
    with: {
      subLinks: {
        orderBy: [asc(subLinks.order)],
        with: {
          nestedLinks: {
            orderBy: [asc(nestedLinks.order)]
          }
        }
      }
    }
  });

  return result;
});

// Function to get navigation data for a specific main nav item
export const getNavItemByName = cache(async (name: string): Promise<NavigationStructure | null> => {
  const result = await db.query.navLinks.findFirst({
    where: eq(navLinks.name, name),
    with: {
      subLinks: {
        orderBy: [asc(subLinks.order)],
        with: {
          nestedLinks: {
            orderBy: [asc(nestedLinks.order)]
          }
        }
      }
    }
  });

  return result || null;
});

// Function to add a new main navigation item
export async function addMainNavItem(name: string, slug: string, order: number) {
  return await db.insert(navLinks).values({
    name,
    slug,
    order
  }).returning();
}

// Function to add a sub-link to an existing main nav item
export async function addSubLink(name: string, slug: string, parentId: number, order: number) {
  return await db.insert(subLinks).values({
    name,
    slug,
    parentId,
    order
  }).returning();
}

// Function to add a nested link to an existing sub-link
export async function addNestedLink(name: string, slug: string, parentId: number, order: number) {
  return await db.insert(nestedLinks).values({
    name,
    slug,
    parentId,
    order
  }).returning();
}

// Query function to get all programs data
export const getAllPrograms = cache(async (): Promise<ProgramsStructure[]> => {
  const result = await db.query.programs.findMany({
    orderBy: [asc(programs.order)],
    with: { subPrograms: true }
  });

  return result;
});

// Function to get a program by its slug
export const getProgramBySlug = cache(async (slug: string): Promise<ProgramsStructure | null> => {
  const result = await db.query.programs.findFirst({
    where: eq(programs.slug, slug),
    with: { subPrograms: true }
  });

  return result || null;
});

// Query function to get all posts data
export const getAllPosts = cache(async () => {
  const result = await db.query.posts.findMany({
    orderBy: [asc(posts.id)]
  });

  return result;
});

// Query function to get all videos data
/* export const getAllVideos = cache(async () => {
  const result = await db.query.videos.findMany({
    orderBy: [asc(videos.id)]
  });

  return result;
}); */