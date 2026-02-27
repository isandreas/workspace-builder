"use client";

import type { RentalDuration } from "@/hooks/useWorkspaceStore";

// ── Props ──

export interface RentSummaryBarProps {
  itemCount: number;
  totalPrice: number;
  duration: RentalDuration;
}

// ── Component ──

export function RentSummaryBar({
  itemCount,
  totalPrice,
  duration,
}: RentSummaryBarProps) {
  return (
    <div className="z-100 flex h-14.5 shrink-0 items-center justify-between border-t border-border bg-white px-6">
      {/* ── Left: item count + total ── */}
      <div className="flex flex-col">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.07em] text-ink-muted">
          {itemCount} items in workspace
        </span>
        <span className="font-serif text-[22px] font-semibold leading-[1.1] text-ink">
          ${totalPrice}
          <span className="ml-0.75 font-sans text-xs font-light text-ink-muted">
            / {duration}
          </span>
        </span>
      </div>

      {/* ── Center: delivery note ── */}
      <p className="text-center text-[11px] font-light text-ink-muted">
        Delivered &amp; set up anywhere in Bali · 48h
      </p>

      {/* ── Right: CTA ── */}
      <button
        className="cursor-pointer rounded-[10px] bg-ink px-7 py-3 text-[13.5px] font-medium tracking-[0.01em] text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-px hover:bg-accent-hover hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)]"
        onClick={() => {
          /* TODO: checkout flow */
        }}
      >
        Rent My Setup →
      </button>
    </div>
  );
}
