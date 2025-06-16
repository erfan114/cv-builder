import { join } from "path";

export function githubPath(path: string) {
  const cdnPath = process.env.NEXT_PUBLIC_CDN_PATH;

  if (!cdnPath || process.env.NODE_ENV !== "production") return path;

  return join(cdnPath, path);
}
