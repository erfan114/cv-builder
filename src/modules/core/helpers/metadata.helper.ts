import { Metadata } from "next";

const DEFAULT_APP_NAME = "CV Builder";

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
  };
}
