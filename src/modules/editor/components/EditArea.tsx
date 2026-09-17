"use client";

import { useDroppable } from "@dnd-kit/core";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  Edge,
  MiniMap,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FC, useCallback, useState } from "react";
import { PageNode } from "./nodes/PageNode";

/* 
  Page -> Container -> Component
*/

/* 
  Page
  Properties:
  - Background color
  - Color
  - Children
*/

/* 
  Container
  Properties:
  - Children
*/

const nodeTypes = {
  page: PageNode,
};

export const EDIT_AREA_ID = "edit-area";

const initialNodes: Node[] = [
  {
    id: "base",
    type: "page",
    position: { x: 0, y: 0 },
    data: { label: "Hello world" },
  },
];
const initialEdges: Edge[] = [];

export const EditorEditArea: FC = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect: OnConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  const { setNodeRef } = useDroppable({
    id: EDIT_AREA_ID,
  });

  return (
    <div className="flex-1">
      <ReactFlow
        ref={setNodeRef}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        minZoom={0.1}
        maxZoom={5}
        fitView
      >
        <MiniMap />
        <Controls showInteractive={false} />
        <Background />
      </ReactFlow>
    </div>
  );
};
