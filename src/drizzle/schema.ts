import { sqliteTable, text, integer, AnySQLiteColumn } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// Refactored navigation & programs schema with relationships and TypeScript types
export const pages = sqliteTable("pages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  parentId: integer('parent_id').references((): AnySQLiteColumn => pages.id, { onDelete: 'cascade' }), // Self-referencing for hierarchy
  name: text("name").notNull(), // Display name for navigation and page title
  slug: text("slug").notNull().unique(), // URL path (e.g., "/about", "/programs/undergraduate")
  order: integer("order").notNull(), // For maintaining display order
  link: text("link"), // Optional external link
  content: text("content"), // Page content (e.g., HTML, Markdown)
  thumbnail: text("thumbnail"), // URL or path to thumbnail image
  cover: text("cover"), // URL or path to cover image
  level: text("level", { length: 50 }), // e.g., "Bac +2", "Bac +3"
  campus: text("campus", { length: 100 }), // e.g., "Cocody Danga"
  langue: text("langue", { length: 50 }), // e.g., "Français"
  rythm: text("rythm", { length: 100 }), // e.g., "Cours du jour"
  professionnalisation: text("professionnalisation", { length: 100 }), // e.g., "Stage garanti"
  internationalisation: text("internationalisation", { length: 100 }), // e.g., "Séjour linguistique"
  duration: text("duration", { length: 50 }), // e.g., "2 ans"
  createdAt: text("created_at").default("datetime('now')"),
  updatedAt: text("updated_at").default("datetime('now')"),
});

export const pagesRelations = relations(pages, ({ one, many }) => ({
  parent: one(pages, {
    fields: [pages.parentId],
    references: [pages.id],
    relationName: 'subPages',
  }),
  subPages: many(pages, { relationName: 'subPages' }),
}));

export type Page = typeof pages.$inferSelect;
export type PagesStructure = Page & {
  subPages: PagesStructure[];
};

// --- Posts table ---
export const posts = sqliteTable("posts", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title', { length: 255 }).notNull(),
  slug: text("slug").unique(), // URL path (e.g., "/about", "/posts/visite-entreprise")
  link: text('link'), // URL to the full post
  content: text("content"), // New field for WYSIWYG content
  thumbnail: text('thumbnail'), // URL or path to image (image on home page)
  createdAt: text("created_at").default("datetime('now')"),
  updatedAt: text("updated_at").default("datetime('now')"),
});
// TypeScript type for posts
export type Post = typeof posts.$inferSelect;

// --- Videos table ---
export const videos = sqliteTable("videos", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title', { length: 255 }).notNull(),
  videoid: text('video_id').notNull(), // YT video ID
});
// TypeScript type for videos
export type Video = typeof videos.$inferSelect;

// --- Partenaires table ---
export const partenaires = sqliteTable("partenaires", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  logo: text("logo"), // URL or path to logo image
});
// TypeScript type for partners
export type TPartners = typeof partenaires.$inferSelect;