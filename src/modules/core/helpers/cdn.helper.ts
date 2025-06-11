import { join } from "path";

export function cdnSource(src: string) {
  const cdnPath = process.env.NEXT_PUBLIC_CDN_PATH;

  if (!cdnPath || process.env.NODE_ENV !== "production") return src;

  return join(cdnPath, src);
}
