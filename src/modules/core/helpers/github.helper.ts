import { join } from "node:path";

const CDN_PATH = process.env.NEXT_PUBLIC_CDN_PATH;

/**
 * Resolves a GitHub resource path against the configured CDN path.
 *
 * In non-production environments, or when `NEXT_PUBLIC_CDN_PATH` is not
 * configured, the original path is returned unchanged.
 *
 * In production, the CDN path is prepended to the provided resource path.
 * The root path (`"/"`) resolves directly to the CDN path.
 *
 * @param path - The resource path to resolve.
 * @returns The original path or the path prefixed with the production CDN path.
 *
 * @example
 * ```ts
 * githubPath("/assets/logo.svg");
 * // Development: "/assets/logo.svg"
 * // Production: "https://cdn.example.com/assets/logo.svg"
 * ```
 *
 * @example
 * ```ts
 * githubPath("/");
 * // Production: "https://cdn.example.com"
 * ```
 */
export function githubPath(path: string) {
  if (!CDN_PATH || process.env.NODE_ENV !== "production") {
    return path;
  }

  if (path === "/") {
    return CDN_PATH;
  }

  return join(CDN_PATH, path);
}
