import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface FontSizeInputProps {
  fontSize: number;
  setFontSize: (size: number) => void;
}

function FontSizeInput({ fontSize, setFontSize }: FontSizeInputProps) {
  return (
    <div className="space-y-1">
      <Label className="text-xs text-black dark:text-white" htmlFor="fontSize">
        Font Size
      </Label>
      <Input
        type="number"
        value={fontSize}
        onChange={(e) => setFontSize(parseInt(e.target.value, 10) || 14)}
        className="w-16 text-center h-8 font-xs text-black dark:text-white border-zinc-300 dark:border-neutral-800"
      />
    </div>
  );
}

export default FontSizeInput;
