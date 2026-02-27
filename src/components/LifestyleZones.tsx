"use client";

import { cn } from "@/lib/utils";

// ── Zone data ──

interface Zone {
  emoji: string;
  label: string;
}

const ZONES: Zone[] = [
  { emoji: "☕", label: "Coffee Station" },
  { emoji: "🏄", label: "Outdoor Gear" },
  { emoji: "🛋️", label: "Relax Zone" },
  { emoji: "🔧", label: "Garage Space" },
];

// ── Props ──

export interface LifestyleZonesProps {
  activeZone?: string;
  onZoneClick?: (label: string) => void;
}

// ── Component ──

export function LifestyleZones({
  activeZone,
  onZoneClick,
}: LifestyleZonesProps) {
  return (
    <div className="flex h-9 shrink-0 items-center border-t border-border bg-surface">
      {ZONES.map((zone, i) => (
        <button
          key={zone.label}
          onClick={() => onZoneClick?.(zone.label)}
          className={cn(
            "flex h-full flex-1 cursor-pointer items-center justify-center gap-1.5",
            "text-[11px] font-normal tracking-[0.01em] text-ink-muted",
            "transition-all duration-180",
            "hover:bg-white hover:text-ink",
            // Divider between pills (all but last)
            i < ZONES.length - 1 && "border-r border-border",
            // Active state
            activeZone === zone.label && "bg-white text-ink",
          )}
        >
          <span>{zone.emoji}</span>
          {zone.label}
        </button>
      ))}
    </div>
  );
}
