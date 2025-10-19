CREATE TABLE `nav_links` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`order` integer NOT NULL,
	`created_at` text DEFAULT 'datetime(''now'')',
	`updated_at` text DEFAULT 'datetime(''now'')'
);
--> statement-breakpoint
CREATE TABLE `nested_links` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`href` text NOT NULL,
	`parent_id` integer NOT NULL,
	`order` integer NOT NULL,
	`created_at` text DEFAULT 'datetime(''now'')',
	`updated_at` text DEFAULT 'datetime(''now'')',
	FOREIGN KEY (`parent_id`) REFERENCES `sub_links`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `programs` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(200) NOT NULL,
	`slug` text NOT NULL,
	`description` text,
	`thumbnail` text,
	`cover` text,
	`parent_id` integer,
	`level` text(50),
	`campus` text(100),
	`langue` text(50),
	`rythm` text(100),
	`duration` text(50),
	`order` integer NOT NULL,
	FOREIGN KEY (`parent_id`) REFERENCES `programs`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `sub_links` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`href` text NOT NULL,
	`parent_id` integer NOT NULL,
	`order` integer NOT NULL,
	`created_at` text DEFAULT 'datetime(''now'')',
	`updated_at` text DEFAULT 'datetime(''now'')',
	FOREIGN KEY (`parent_id`) REFERENCES `nav_links`(`id`) ON UPDATE no action ON DELETE cascade
);
