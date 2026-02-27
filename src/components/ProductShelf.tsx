"use client";

import { DashedItemBox } from "@/components/ui/DashedItemBox";
import { ProductImage } from "@/components/ui/ProductImage";
import {
  categories,
  products,
  searchProducts,
  type Category,
  type Product,
  type SlotId,
} from "@/data/products";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";

// ── Props ──

export interface ProductShelfProps {
  /** Currently selected product id (highlighted in the grid) */
  selectedProductId?: string;
  /** Callback when a product card is clicked */
  onProductSelect?: (product: Product) => void;
  /** Optional: only show products compatible with this slot */
  activeSlotFilter?: SlotId | null;
}

// ── Component ──

export function ProductShelf({
  selectedProductId,
  onProductSelect,
  activeSlotFilter,
}: ProductShelfProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  // ── Filtered products ──

  const filtered = useMemo(() => {
    let result: Product[];

    // Text search first
    if (search.trim()) {
      result = searchProducts(search);
    } else {
      result = products;
    }

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Slot compatibility filter
    if (activeSlotFilter) {
      result = result.filter((p) =>
        p.compatibleSlots.includes(activeSlotFilter),
      );
    }

    return result;
  }, [search, activeCategory, activeSlotFilter]);

  const handleCardClick = useCallback(
    (product: Product) => {
      onProductSelect?.(product);
    },
    [onProductSelect],
  );

  return (
    <aside className="flex w-70 shrink-0 flex-col overflow-hidden border-r border-border bg-white">
      {/* ── Header ── */}
      <div className="border-b border-border px-4.5 pt-4.5 pb-3.5">
        <h2 className="font-serif text-[17px] font-semibold tracking-[0.01em] text-ink">
          Equipment
        </h2>
        <p className="mt-0.75 text-[11px] font-light tracking-[0.02em] text-ink-muted">
          Click any item to place it
        </p>
      </div>

      {/* ── Search ── */}
      <div className="mx-3.5 my-3 flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.75">
        <span className="text-xs opacity-40">⌕</span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search items…"
          className="flex-1 border-none bg-transparent font-sans text-xs text-ink outline-none placeholder:text-ink-muted"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="text-[10px] text-ink-muted transition-colors hover:text-ink"
          >
            ✕
          </button>
        )}
      </div>

      {/* ── Category Tabs ── */}
      <div className="flex gap-0 overflow-x-auto border-b border-border px-3.5 scrollbar-none">
        {/* "All" pseudo-tab */}
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "shrink-0 cursor-pointer border-b-[1.5px] border-transparent px-2.25 py-2",
            "text-[11.5px] font-medium tracking-[0.01em] text-ink-muted",
            "whitespace-nowrap transition-all duration-180",
            activeCategory === "all" && "border-b-ink text-ink",
          )}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "shrink-0 cursor-pointer border-b-[1.5px] border-transparent px-2.25 py-2",
              "text-[11.5px] font-medium tracking-[0.01em] text-ink-muted",
              "whitespace-nowrap transition-all duration-180",
              activeCategory === cat.id && "border-b-ink text-ink",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Product Grid ── */}
      <div className="flex-1 overflow-y-auto px-3.5 py-3">
        <div className="grid grid-cols-2 gap-2 content-start">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.18 }}
              >
                <DashedItemBox
                  selected={selectedProductId === product.id}
                  onClick={() => handleCardClick(product)}
                >
                  {/* + button */}
                  <span
                    className={cn(
                      "absolute top-1.75 right-1.75",
                      "flex h-4.5 w-4.5 items-center justify-center",
                      "rounded-full bg-ink text-[13px] leading-none text-white",
                      "opacity-0 transition-opacity duration-180",
                      "group-hover:opacity-100",
                    )}
                  >
                    +
                  </span>

                  {/* Product image with emoji fallback */}
                  <div className="mb-1.5 flex justify-center">
                    <ProductImage
                      src={product.imageUrl}
                      emoji={product.emoji}
                      alt={product.name}
                      size={48}
                      className="rounded-md"
                    />
                  </div>

                  {/* Name */}
                  <span className="block text-[10.5px] font-medium leading-[1.3] text-ink">
                    {product.name}
                  </span>

                  {/* Price */}
                  <div className="mt-0.75 text-[10px] font-light text-ink-muted">
                    ${product.pricePerDay} / day
                  </div>
                </DashedItemBox>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="col-span-2 py-8 text-center">
              <p className="text-xs text-ink-muted">No items found</p>
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="mt-2 text-[11px] font-medium text-ink underline underline-offset-2"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="flex items-center gap-1.5 border-t border-border bg-surface px-4.5 py-2.5 text-[11px] font-light text-ink-muted">
        <span>🚚</span> Free delivery &amp; setup in Bali
      </div>
    </aside>
  );
}
