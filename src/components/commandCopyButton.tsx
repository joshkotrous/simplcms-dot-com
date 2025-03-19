"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CommandCopyButtonProps {
  command: string;
  className?: string;
}

export function CommandCopyButton({
  command,
  className,
}: CommandCopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={cn("w-fit flex justify-center", className)}>
      <div className="relative w-full max-w-md">
        <div className="bg-background rounded-lg flex justify-between items-center p-4 pr-12 border border-border font-mono text-sm overflow-x-auto">
          {command}
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
          onClick={copyToClipboard}
          aria-label="Copy command to clipboard"
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
