import { Combine } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <Combine className="animate-pulse size-32 text-blue-600" />
    </div>
  );
}
