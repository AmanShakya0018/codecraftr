import React from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
import { Spinner } from "./ui/spinner";

interface DownloadButtonProps {
  saveCodeSnapshot: () => void;
  loading: boolean; // Pass loading state
}

function DownloadButton({ saveCodeSnapshot, loading }: DownloadButtonProps) {
  return (
    <div className="space-y-1">
      <Label className="text-xs text-black dark:text-white" htmlFor="theme">
        Download
      </Label>
      <div>
        <Button
          onClick={saveCodeSnapshot}
          className={`h-8 w-14 bg-white dark:bg-black dark:text-neutral-200 border border-zinc-300 dark:border-neutral-800 text-neutral-800 hover:bg-gray-200 ${loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <Spinner size={"small"} />
          ) : (
            <DownloadIcon className="!h-4 !w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}

export default DownloadButton;
