import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const url = pgTable("url", {
  id: varchar({ length: 16 }).primaryKey(),
  short_code: varchar({ length: 16 }).notNull().unique(),
  long_url: text().notNull(),
  created_at: timestamp().defaultNow().notNull(),
});
