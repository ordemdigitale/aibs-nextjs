import { sqliteTable, text, integer, AnySQLiteColumn } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// --- Main navigation links table ---
export const navLinks = sqliteTable("nav_links", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text('slug').notNull(),
  order: integer('order').notNull(), // For maintaining display order
  createdAt: text('created_at').default("datetime('now')"),
  updatedAt: text('updated_at').default("datetime('now')")
});

// --- Sub-links table (level 2) ---
export const subLinks = sqliteTable('sub_links', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  slug: text('href').notNull(),
  parentId: integer('parent_id').notNull().references(() => navLinks.id, { onDelete: 'cascade' }),
  order: integer('order').notNull(),
  createdAt: text('created_at').default("datetime('now')"),
  updatedAt: text('updated_at').default("datetime('now')")
});

// --- Nested links table (level 3) ---
export const nestedLinks = sqliteTable('nested_links', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  slug: text('href').notNull(),
  parentId: integer('parent_id').notNull().references(() => subLinks.id, { onDelete: 'cascade' }),
  order: integer('order').notNull(),
  createdAt: text('created_at').default("datetime('now')"),
  updatedAt: text('updated_at').default("datetime('now')")
});

// --- Relationships ---
export const navLinksRelations = relations(navLinks, ({ many }) => ({
  subLinks: many(subLinks),
}));

export const subLinksRelations = relations(subLinks, ({ one, many }) => ({
  parent: one(navLinks, {
    fields: [subLinks.parentId],
    references: [navLinks.id],
  }),
  nestedLinks: many(nestedLinks),
}));

export const nestedLinksRelations = relations(nestedLinks, ({ one }) => ({
  parent: one(subLinks, {
    fields: [nestedLinks.parentId],
    references: [subLinks.id],
  }),
}));

// TypeScript types for your components
export type NavLink = typeof navLinks.$inferSelect;
export type SubLink = typeof subLinks.$inferSelect;
export type NestedLink = typeof nestedLinks.$inferSelect;

// Type for the complete navigation structure
export type NavigationStructure = NavLink & {
  subLinks: (SubLink & {
    nestedLinks: NestedLink[];
  })[];
};

// --- Programs table ---
export const programs = sqliteTable("programs", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name', { length: 200 }).notNull(),
  slug: text('slug').notNull(),
  description: text('description'),
  thumbnail: text('thumbnail'), // URL or path to image (image on home page)
  cover: text('cover'), // URL or path to image (detail page cover)
  parentId: integer('parent_id').references((): AnySQLiteColumn => programs.id, { onDelete: 'cascade' }), // Self-referencing for hierarchy
  level: text('level', { length: 50 }), // e.g., "Bac +2", "Bac +3"
  campus: text('campus', { length: 100 }), // e.g., "Cocody Danga"
  langue: text('langue', { length: 50 }), // e.g., "Français"
  rythm: text('rythm', { length: 100 }), // e.g., "Cours du jour", "Cours du soir", "Alternance"
  duration: text('duration', { length: 50 }), // e.g., "2 ans", "3 ans"
  order: integer('order').notNull(), // For maintaining display order
});

// --- Relationships ---
export const programsRelations = relations(programs, ({ one, many }) => ({
  parent: one(programs, {
    fields: [programs.parentId],
    references: [programs.id],
    relationName: 'subPrograms', // For parent-child
  }),
  subPrograms: many(programs, { relationName: 'subPrograms' }), // Children (sub-programs)
}));

// TypeScript type for programs
export type Program = typeof programs.$inferSelect;
// Type for the complete programs structure
export type ProgramsStructure = Program & {
  subPrograms: Program[];
};

// --- Posts table ---
export const posts = sqliteTable("posts", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title', { length: 255 }).notNull(),
  thumbnail: text('thumbnail'), // URL or path to image (image on home page)
  link: text('link').notNull(), // URL to the full post
});
// TypeScript type for posts
export type Post = typeof posts.$inferSelect;

// --- Videos table ---
export const videos = sqliteTable("videos", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title', { length: 255 }).notNull(),
  videoid: text('video_id').notNull(), // YT video ID
  link: text('link').notNull(), // URL to the full post
});
// TypeScript type for videos
export type Video = typeof videos.$inferSelect;