import React from "react";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface LanguageSelectProps {
  setLanguage: (language: string) => void;
}

function LanguageSelect({ setLanguage }: LanguageSelectProps) {
  return (
    <div className="space-y-1">
      <Label className="text-xs text-black dark:text-white" htmlFor="language">
        Language
      </Label>
      <Select onValueChange={(value: string) => setLanguage(value)}>
        <SelectTrigger className="w-[100px] h-8 text-xs text-black dark:text-white bg-white dark:bg-black border-zinc-300 dark:border-neutral-800">
          <SelectValue placeholder="Typescript" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="typescript">TypeScript</SelectItem>
          <SelectItem value="javascript">JavaScript</SelectItem>
          <SelectItem value="html">HTML</SelectItem>
          <SelectItem value="css">CSS</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="c++">C++</SelectItem>
          <SelectItem value="kotlin">Kotlin</SelectItem>
          <SelectItem value="swift">Swift</SelectItem>
          <SelectItem value="rust">Rust</SelectItem>
          <SelectItem value="go">Go</SelectItem>
          <SelectItem value="ruby">Ruby</SelectItem>
          <SelectItem value="php">PHP</SelectItem>
          <SelectItem value="sql">SQL</SelectItem>
          <SelectItem value="c#">C#</SelectItem>
          <SelectItem value="dart">Dart</SelectItem>
          <SelectItem value="perl">Perl</SelectItem>
          <SelectItem value="solidity">Solidity</SelectItem>
          <SelectItem value="scss">SCSS</SelectItem>
          <SelectItem value="bash">Bash</SelectItem>
          <SelectItem value="yaml">YAML</SelectItem>
          <SelectItem value="xml">XML</SelectItem>

        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelect;
