"use client";

import { ProductImage } from "@/components/ui/ProductImage";
import type { Product, SlotId } from "@/data/products";
import type { RentalDuration } from "@/hooks/useWorkspaceStore";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

// ── Props ──

export interface ItemInspectorProps {
  open: boolean;
  product?: Product;
  slotId?: SlotId | null;
  duration: RentalDuration;
  onDurationChange: (d: RentalDuration) => void;
  onRemove: () => void;
  onClose: () => void;
  /** All items currently in workspace (for summary list) */
  filledItems: { product: Product; slotId: SlotId }[];
  totalPrice: number;
  itemCount: number;
}

// ── Component ──

const DURATIONS: { key: RentalDuration; label: string }[] = [
  { key: "day", label: "Day" },
  { key: "week", label: "Week" },
  { key: "month", label: "Month" },
];

export function ItemInspector({
  open,
  product,
  slotId,
  duration,
  onDurationChange,
  onRemove,
  onClose,
  filledItems,
  totalPrice,
  itemCount,
}: ItemInspectorProps) {
  const price =
    product &&
    (duration === "day"
      ? product.pricePerDay
      : duration === "week"
        ? product.pricePerWeek
        : product.pricePerMonth);

  return (
    <AnimatePresence>
      {open && product && (
        <motion.aside
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="flex w-75 shrink-0 flex-col overflow-hidden border-l border-border bg-white"
        >
          {/* ── Header ── */}
          <div className="border-b border-border px-4.5 pt-4.5 pb-3.5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-widest text-ink-muted">
                  Selected Item
                </p>
                <h3 className="mt-1.25 font-serif text-xl font-semibold leading-[1.2] text-ink">
                  {product.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="mt-0.5 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                ✕
              </button>
            </div>
            <p className="mt-1 text-[11px] font-light leading-normal text-ink-muted">
              {product.description}
            </p>
          </div>

          {/* ── Preview ── */}
          <div className="flex items-center gap-3 border-b border-border bg-surface px-4.5 py-3.5">
            <ProductImage
              src={product.imageUrl}
              emoji={product.emoji}
              alt={product.name}
              size={56}
              className="rounded-lg"
            />
            <div className="flex-1">
              <p className="text-[13px] font-medium">{product.name}</p>
              <p className="mt-0.5 text-[11px] font-light leading-[1.45] text-ink-muted">
                {product.description}
              </p>
            </div>
          </div>

          {/* ── Duration Selector ── */}
          <div className="border-b border-border px-4.5 py-3.5">
            <p className="mb-2.25 text-[10px] font-medium uppercase tracking-[0.09em] text-ink-muted">
              Rental Duration
            </p>
            <div className="flex gap-0.5 rounded-lg border border-border bg-surface p-0.75">
              {DURATIONS.map((d) => (
                <button
                  key={d.key}
                  onClick={() => onDurationChange(d.key)}
                  className={cn(
                    "flex-1 cursor-pointer rounded-md px-1 py-1.25 text-center text-[11.5px] font-normal text-ink-muted transition-all duration-180",
                    duration === d.key &&
                      "bg-white font-medium text-ink shadow-soft",
                  )}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Price Display ── */}
          <div className="flex items-baseline gap-1.5 border-b border-border px-4.5 py-3.5">
            <span className="font-serif text-[30px] font-semibold tracking-[-0.01em] text-ink">
              ${price}
            </span>
            <span className="text-[11px] font-light text-ink-muted">
              per {duration}
            </span>
          </div>

          {/* ── Remove Button ── */}
          {slotId && (
            <div className="px-4.5 pt-3">
              <button
                onClick={onRemove}
                className="w-full cursor-pointer rounded-lg border border-border-strong bg-transparent px-2 py-2 font-sans text-xs font-normal text-ink-secondary transition-all duration-180 hover:border-ink hover:text-ink"
              >
                Remove from workspace
              </button>
            </div>
          )}

          {/* ── Workspace Summary ── */}
          <div className="mx-4.5 mt-3 flex-1 overflow-y-auto">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[10px] font-medium uppercase tracking-[0.09em] text-ink-muted">
                Your Setup
              </p>
              <span className="rounded-[10px] bg-surface px-1.75 py-0.5 text-[10px] font-medium text-ink-secondary">
                {itemCount} items
              </span>
            </div>

            {filledItems.map(({ product: p, slotId: sid }) => (
              <div
                key={sid}
                className="flex items-center justify-between border-b border-border py-1.75 text-[11.5px] last:border-b-0"
              >
                <span className="flex items-center gap-1.5 font-normal text-ink">
                  <ProductImage
                    src={p.imageUrl}
                    emoji={p.emoji}
                    alt={p.name}
                    size={20}
                    className="rounded-sm"
                  />
                  {p.name}
                </span>
                <span className="text-[11px] font-light text-ink-muted">
                  $
                  {duration === "day"
                    ? p.pricePerDay
                    : duration === "week"
                      ? p.pricePerWeek
                      : p.pricePerMonth}
                </span>
              </div>
            ))}

            {filledItems.length === 0 && (
              <p className="py-4 text-center text-[11px] text-ink-muted">
                No items placed yet
              </p>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
