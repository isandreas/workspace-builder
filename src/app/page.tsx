"use client";

import WorkspaceCanvas from "@/components/Canvas/WorkspaceCanvas";
import { FloatingToolbar } from "@/components/FloatingToolbar";
import { ItemInspector } from "@/components/ItemInspector";
import { LifestyleZones } from "@/components/LifestyleZones";
import { ProductShelf } from "@/components/ProductShelf";
import { RentSummaryBar } from "@/components/RentSummaryBar";
import { useWorkspaceStore } from "@/hooks/useWorkspaceStore";

export default function Home() {
  const store = useWorkspaceStore();

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white font-sans">
      {/* ═══════════ MAIN ROW ═══════════ */}
      <div className="flex flex-1 overflow-hidden">
        {/* ── Left: Product Shelf (280px) ── */}
        <ProductShelf
          selectedProductId={store.selectedProductId ?? undefined}
          onProductSelect={store.selectProduct}
          activeSlotFilter={store.selectedSlot}
        />

        {/* ── Center: Canvas area ── */}
        <div className="relative flex flex-1 flex-col overflow-hidden">
          {/* Wordmark — top-left on canvas */}
          <div className="pointer-events-none absolute top-4 left-5 z-30 flex items-baseline gap-2.5">
            <span className="font-serif text-xl font-semibold tracking-[0.01em] text-ink">
              Workspace Builder
            </span>
            <span className="h-3.5 w-px bg-border-strong" />
            <span className="text-[11px] font-normal uppercase tracking-[0.06em] text-ink-muted">
              Office Rentals · Bali
            </span>
          </div>

          {/* Floating toolbar */}
          <FloatingToolbar
            onUndo={store.undo}
            canUndo={store.canUndo}
            onClearCanvas={store.clearCanvas}
            onTemplateClick={() => {
              /* TODO: open TemplatePicker modal */
            }}
          />

          {/* Canvas */}
          <WorkspaceCanvas
            filledSlots={store.filledSlots}
            selectedSlot={store.selectedSlot}
            onEmptySlotClick={store.selectSlot}
            onFilledSlotClick={store.selectSlot}
          />

          {/* Lifestyle Zones — bottom of canvas */}
          <LifestyleZones
            activeZone={store.activeZone}
            onZoneClick={store.setActiveZone}
          />
        </div>

        {/* ── Right: Item Inspector (300px, slides in) ── */}
        <ItemInspector
          open={store.inspectorOpen}
          product={store.selectedProduct}
          slotId={store.selectedSlot}
          duration={store.duration}
          onDurationChange={store.setDuration}
          onRemove={() => {
            if (store.selectedSlot) store.removeFromSlot(store.selectedSlot);
          }}
          onClose={store.closeInspector}
          filledItems={store.filledItems}
          totalPrice={store.totalPrice}
          itemCount={store.itemCount}
        />
      </div>

      {/* ═══════════ BOTTOM: Rent Summary Bar ═══════════ */}
      <RentSummaryBar
        itemCount={store.itemCount}
        totalPrice={store.totalPrice}
        duration={store.duration}
      />
    </div>
  );
}
