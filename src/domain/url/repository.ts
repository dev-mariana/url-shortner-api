import type { Url } from "./entity";

export interface IUrlRepository {
  createUrl(data: Url): Promise<Url>;
  getUrlByShortCode(short_code: string): Promise<Url | null>;
}
