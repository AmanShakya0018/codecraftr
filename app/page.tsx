"use client";

import React, { useState, useEffect } from "react";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { filename, themes } from "@/constants";
import { saveCodeSnapshot } from "@/lib/saveSnapshot";
import DownloadButton from "@/components/Downloadbutton";
import FontSizeInput from "@/components/Fontsizeinput";
import BackgroundGradientInput from "@/components/backgroundgradientinput";
import LanguageSelect from "@/components/Languageselect";
import FixedTopSection from "@/components/Fixedsection";
import Maincontainer from "@/components/Maincontainer";
import CodeTextarea from "@/components/Codetextarea";
import Codesnippet from "@/components/Codesnippet";
import Highlightedcode from "@/components/Highlightedcode";
import MainCode from "@/components/Maincode";

export default function Home() {
  const [code, setCode] = useState<string>("");
  const [fontSize, setFontSize] = useState<number>(14);
  const [language, setLanguage] = useState<string>("typescript");
  const [theme, setTheme] = useState<typeof nightOwl>(nightOwl);
  const [loading, setLoading] = useState<boolean>(false);
  const [gradient, setGradient] = useState<string>("linear-gradient(100deg, rgba(245,230,60,0.6) 10%, rgba(255,160,20,1) 80%)");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Maincontainer>
      <CodeTextarea code={code} setCode={setCode} />
      <MainCode
        id="code-snap"
        gradient={gradient}
      >
        <Codesnippet>
          <Highlightedcode
            language={language}
            theme={theme}
            fontSize={fontSize}
            code={code}
          />
        </Codesnippet>
      </MainCode>

      <FixedTopSection>
        <div className="space-y-1">
          <Label className="text-xs text-black dark:text-white" htmlFor="theme">
            Theme
          </Label>
          <Select
            onValueChange={(value: string) => {
              setTheme(themes[value]);
            }}
          >
            <SelectTrigger className="w-28 h-8 text-xs text-black dark:text-white text-center bg-white dark:bg-black border-zinc-300 dark:border-neutral-800">
              <SelectValue placeholder="nightOwl" className="text-center " />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(themes).map((theme) => (
                <SelectItem key={theme} value={theme}>
                  {theme}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <LanguageSelect setLanguage={setLanguage} />
        <BackgroundGradientInput
          gradient={gradient}
          setGradient={setGradient}
        />
        <FontSizeInput fontSize={fontSize} setFontSize={setFontSize} />
        <DownloadButton saveCodeSnapshot={() => saveCodeSnapshot("code-snap", filename, setLoading)} loading={loading} />
      </FixedTopSection>

    </Maincontainer>
  );
}
