import { Metadata } from "next";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { githubPath } from "./github.helper";

const DEFAULT_APP_NAME = "CV Builder";

const LIGHT_APP_ICON: Icon = {
  rel: "icon",
  type: "image/png",
  url: githubPath("/favicon-light.png"),
  media: "(prefers-color-scheme: light)",
};

const DARK_APP_ICON: Icon = {
  rel: "icon",
  type: "image/png",
  url: githubPath("/favicon-dark.png"),
  media: "(prefers-color-scheme: dark)",
};

export interface DynamicMetadataOptions {
  pageName?: string;
}

export function generateDynamicMetadata(
  options?: DynamicMetadataOptions
): Metadata {
  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? DEFAULT_APP_NAME;

  const title = options?.pageName
    ? `${appName} - ${options?.pageName}`
    : appName;

  return {
    title,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    icons: [LIGHT_APP_ICON, DARK_APP_ICON],
  };
}
