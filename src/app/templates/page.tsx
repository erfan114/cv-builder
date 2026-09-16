import { UnderConstruction } from "@/modules/core/components/Construction";
import { pageMetadata } from "@/modules/core/helpers/metadata.helper";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata("Templates");

export default function Templates() {
  return <UnderConstruction />;
}
