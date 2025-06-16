import { UnderConstruction } from "@/modules/core/components/Construction";
import { generateDynamicMetadata } from "@/modules/core/helpers/metadata.helper";
import { Metadata } from "next";

export const metadata: Metadata = generateDynamicMetadata({
  pageName: "Editor",
});

export default function Editor() {
  return <UnderConstruction />;
}
