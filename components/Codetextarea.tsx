import React from "react";
import { Textarea } from "./ui/textarea";

interface CodeTextareaProps {
  code: string;
  setCode: (value: string) => void;
}

function CodeTextarea({ code, setCode }: CodeTextareaProps) {
  return (
    <div className="w-full sm:max-w-[44vw] space-y-4 max-sm:space-y-4">
      <Textarea
        className="w-full h-48 p-4 rounded-md bg-neutral-900 text-white"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
      />
    </div>
  );
}

export default CodeTextarea;
