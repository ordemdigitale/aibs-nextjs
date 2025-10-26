import { cache } from "react";
import { db } from '@/drizzle/db';
import { pages, posts } from '@/drizzle/schema';
import { eq, asc } from 'drizzle-orm';
import type { Page, PagesStructure, Post } from '@/drizzle/schema';

// Helper function to build hierarchical tree from flat pages
function buildPageTree(flatPages: Page[]): PagesStructure[] {
  const map = new Map<number, PagesStructure>();
  flatPages.forEach(page => {
    map.set(page.id, { ...page, subPages: [] });
  });
  
  const roots: PagesStructure[] = [];
  flatPages.forEach(page => {
    if (page.parentId === null) {
      roots.push(map.get(page.id)!);
    } else {
      const parent = map.get(page.parentId);
      if (parent) {
        parent.subPages.push(map.get(page.id)!);
      }
    }
  });

  // Recursively sort subPages by order
  const sortSubPages = (node: PagesStructure) => {
    node.subPages.sort((a, b) => a.order - b.order);
    node.subPages.forEach(sortSubPages);
  };
  roots.sort((a, b) => a.order - b.order);
  roots.forEach(sortSubPages);

  return roots;
}

// Query to get all navigation data (top-level pages with sub-pages)
export const getNavigationData = cache(async (): Promise<PagesStructure[]> => {
  const flatPages = await db.query.pages.findMany({
    orderBy: [asc(pages.order)],
  });
  return buildPageTree(flatPages);
});

// Query to get a page by its name (searches recursively in the hierarchy)
export const getPageByName = cache(async (name: string): Promise<PagesStructure | null> => {
  const flatPages = await db.query.pages.findMany();
  const tree = buildPageTree(flatPages);

  function findInTree(node: PagesStructure, targetName: string): PagesStructure | null {
    if (node.name === targetName) return node;
    for (const sub of node.subPages) {
      const found = findInTree(sub, targetName);
      if (found) return found;
    }
    return null;
  }

  for (const root of tree) {
    const found = findInTree(root, name);
    if (found) return found;
  }
  return null;
});

// Query to get a page by its slug (with subPages for hierarchy)
export const getPageBySlug = cache(async (slug: string): Promise<PagesStructure | null> => {
  const page = await db.query.pages.findFirst({
    where: eq(pages.slug, slug),
    with: {
      subPages: {
        with: {
          subPages: {
            with: {
              subPages: true, // Supports up to 4 levels; extend if needed
            },
          },
        },
      },
    },
  });
  return page || null;
});

// Function to add a new page (main or sub-page)
  /*Partial type makes all fields optional. Whereas Page type requires some fields to be mandatory.
  Use type assertion to ensure that the "data" object conforms to Page type.
  */
export async function addPage(data: Partial<Page>) { 
  return await db.insert(pages).values(data as Page).returning();
}

// Query to get all programs (pages with level not null, built into hierarchy)
export const getAllPrograms = cache(async (): Promise<PagesStructure[]> => {
  const flatPrograms = await db.query.pages.findMany({
    //where: isNotNull(pages.level),
    orderBy: [asc(pages.order)],
  });
  return buildPageTree(flatPrograms);
});

// Query to get the full programs structure (under "Programmes" page)
export const getProgramsStructure = cache(async (): Promise<PagesStructure | null> => {
  return await getPageByName("Programmes");
});

// Query to get all posts
export const getAllPosts = cache(async (): Promise<Post[]> => {
  return await db.query.posts.findMany({
    orderBy: [asc(posts.id)],
  });
});

// Query to get all videos
/* export const getAllVideos = cache(async (): Promise<Video[]> => {
  return await db.query.videos.findMany({
    orderBy: [asc(videos.id)],
  });
}); */

// Additional useful query: Get sub-pages by parent slug
export const getSubPagesByParentSlug = cache(async (parentSlug: string): Promise<PagesStructure[]> => {
  const parent = await db.query.pages.findFirst({
    where: eq(pages.slug, parentSlug),
  });
  if (!parent) return [];

  const subPages = await db.query.pages.findMany({
    where: eq(pages.parentId, parent.id),
    orderBy: [asc(pages.order)],
    with: {
      subPages: {
        with: {
          subPages: true, // Nested up to 3 levels
        },
      },
    },
  });
  return subPages;
});

// Additional useful query: Get page content by slug (flat, without hierarchy)
export const getPageContentBySlug = cache(async (slug: string): Promise<string | null> => {
  const page = await db.query.pages.findFirst({
    where: eq(pages.slug, slug),
    columns: { content: true },
  });
  return page?.content || null;
});

// Additional useful query: Search pages by keyword in name or content
export const searchPages = cache(async (keyword: string): Promise<Page[]> => {
  return await db.query.pages.findMany({
    where: (pages, { or, like }) => or(
      like(pages.name, `%${keyword}%`),
      like(pages.content, `%${keyword}%`)
    ),
    orderBy: [asc(pages.order)],
  });
});