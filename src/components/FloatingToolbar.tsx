"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

// ── Props ──

export interface FloatingToolbarProps {
  onUndo: () => void;
  canUndo: boolean;
  onClearCanvas: () => void;
  onTemplateClick: () => void;
}

// ── Component ──

export function FloatingToolbar({
  onUndo,
  canUndo,
  onClearCanvas,
  onTemplateClick,
}: FloatingToolbarProps) {
  const [showGrid, setShowGrid] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  const handleClear = () => {
    if (confirmClear) {
      onClearCanvas();
      setConfirmClear(false);
    } else {
      setConfirmClear(true);
      // Auto-dismiss confirmation after 2.5s
      setTimeout(() => setConfirmClear(false), 2500);
    }
  };

  return (
    <div className="absolute top-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-0.5 rounded-[10px] border border-border bg-white p-1 shadow-mid">
      {/* Template picker */}
      <button
        onClick={onTemplateClick}
        className="cursor-pointer whitespace-nowrap rounded-[7px] bg-ink px-3 py-1.25 text-[11.5px] font-medium text-white transition-all duration-180 hover:bg-accent-hover"
      >
        Start from template
      </button>

      <Divider />

      {/* Grid toggle */}
      <button
        onClick={() => setShowGrid((v) => !v)}
        className={cn(
          "cursor-pointer whitespace-nowrap rounded-[7px] px-3 py-1.25 text-[11.5px] font-medium text-ink-muted transition-all duration-180",
          "hover:bg-surface hover:text-ink",
          showGrid && "bg-surface text-ink",
        )}
      >
        ⊞ Grid
      </button>

      {/* Undo */}
      <button
        onClick={onUndo}
        disabled={!canUndo}
        className={cn(
          "cursor-pointer whitespace-nowrap rounded-[7px] px-3 py-1.25 text-[11.5px] font-medium text-ink-muted transition-all duration-180",
          "hover:bg-surface hover:text-ink",
          !canUndo && "cursor-not-allowed opacity-40",
        )}
      >
        ↩ Undo
      </button>

      <Divider />

      {/* Clear canvas */}
      <button
        onClick={handleClear}
        className={cn(
          "cursor-pointer whitespace-nowrap rounded-[7px] px-3 py-1.25 text-[11.5px] font-medium transition-all duration-180",
          confirmClear
            ? "bg-destructive text-white"
            : "text-ink-muted hover:bg-surface hover:text-ink",
        )}
      >
        {confirmClear ? "Confirm clear?" : "🗑"}
      </button>
    </div>
  );
}

function Divider() {
  return <div className="mx-0.5 h-5 w-px bg-border" />;
}
