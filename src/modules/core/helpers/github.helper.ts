import { join } from "node:path";

const CDN_PATH = process.env.NEXT_PUBLIC_CDN_PATH;

export function githubPath(path: string) {
  if (!CDN_PATH || process.env.NODE_ENV !== "production") {
    return path;
  }

  if (path === "/") {
    return CDN_PATH;
  }

  return join(CDN_PATH, path);
}
