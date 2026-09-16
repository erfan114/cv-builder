"use client";

import { FC } from "react";
import { EditTools } from "./tools/Edit";
import { HelpTools } from "./tools/Help";
import { ProjectTools } from "./tools/Project";

export const ToolBar: FC = () => {
  return (
    <div className="border-b px-5 py-1 flex justify-between items-center">
      <div className="flex">
        <ProjectTools />
        <EditTools />
        <HelpTools />
      </div>
      <h3 className="font-medium text-lg text-slate-600">پروژه من</h3>
    </div>
  );
};
