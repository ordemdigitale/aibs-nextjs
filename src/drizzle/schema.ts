import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
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