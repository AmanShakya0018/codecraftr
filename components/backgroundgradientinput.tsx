import React from "react";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { gradients } from "@/constants";

interface BackgroundGradientInputProps {
  gradient: string;
  setGradient: (color: string) => void;
}

function BackgroundGradientInput({
  gradient,
  setGradient,
}: BackgroundGradientInputProps) {
  return (
    <div className="space-y-1">
      <Label className="text-xs text-black dark:text-white" htmlFor="language">
        Gradient
      </Label>
      <div className="flex flex-row gap-2">
        <Select
          onValueChange={(value: string) => {
            setGradient(value);
          }}
        >
          <SelectTrigger className="w-16 h-8 text-xs text-black dark:text-white text-center bg-white dark:bg-black border-zinc-300 dark:border-neutral-800">
            <div className="w-4 h-4 rounded-full" style={{ background: gradient }}></div>
          </SelectTrigger>
          <SelectContent className="!w-48">
            {
              gradients.map((item: { name: string; gradient: string; }, index: number) => (
                <SelectItem
                  key={index}
                  value={item.gradient}
                  className="flex items-center gap-2 whitespace-nowrap relative"
                >
                  <div className="min-w-[20px] h-5 rounded-full shrink-0" style={{ background: item.gradient }}>
                    <span className="absolute ml-7 text-xs inline-block">{item.name}</span>
                  </div>
                </SelectItem>
              ))
            }
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default BackgroundGradientInput;



