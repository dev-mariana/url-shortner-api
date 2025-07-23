CREATE TABLE "url" (
	"id" varchar(16) PRIMARY KEY NOT NULL,
	"short_code" varchar(16) NOT NULL,
	"long_url" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "url_short_code_unique" UNIQUE("short_code")
);
