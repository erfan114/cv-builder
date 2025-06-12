import React from "react";
import { AppFooter } from "../components/AppFooter";

export function pageWithFooter(children: React.ReactNode) {
  return (
    <>
      {children}
      <AppFooter />
    </>
  );
}
