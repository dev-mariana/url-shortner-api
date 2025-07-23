import type { Url } from "@/domain/url/entity";
import type { IUrlRepository } from "@/domain/url/repository";
import { eq } from "drizzle-orm";
import { db } from "../connection";
import { createId } from "../helpers/create-id";
import { url } from "../schema/url";

export class UrlRepository implements IUrlRepository {
  async createUrl(data: Url): Promise<Url> {
    const id = createId();
    const result = await db
      .insert(url)
      .values({ ...data, id })
      .returning();
    return result[0];
  }

  async getUrlByShortCode(short_code: string): Promise<Url | null> {
    const result = await db
      .select()
      .from(url)
      .where(eq(url.short_code, short_code))
      .limit(1);

    return result[0] ?? null;
  }
}
