"use client";

import type { FilledSlots } from "@/components/Canvas/WorkspaceCanvas";
import { getProductById, type Product, type SlotId } from "@/data/products";
import { useCallback, useMemo, useState } from "react";

// ── History entry for undo ──

interface HistoryEntry {
  filledSlots: FilledSlots;
  selectedSlot: SlotId | null;
  selectedProductId: string | null;
}

// ── Duration type ──

export type RentalDuration = "day" | "week" | "month";

// ── Return type ──

export interface WorkspaceStore {
  // Slot state
  filledSlots: FilledSlots;
  selectedSlot: SlotId | null;
  selectedProductId: string | null;
  selectedProduct: Product | undefined;

  // Duration
  duration: RentalDuration;
  setDuration: (d: RentalDuration) => void;

  // Lifestyle zone
  activeZone: string | undefined;
  setActiveZone: (zone: string) => void;

  // Actions
  selectSlot: (slotId: SlotId) => void;
  selectProduct: (product: Product) => void;
  placeProduct: (productId: string, slotId: SlotId) => void;
  removeFromSlot: (slotId: SlotId) => void;
  clearCanvas: () => void;
  undo: () => void;
  canUndo: boolean;

  // Inspector
  inspectorOpen: boolean;
  closeInspector: () => void;

  // Computed
  itemCount: number;
  totalPrice: number;
  filledItems: { product: Product; slotId: SlotId }[];
}

// ── Hook ──

export function useWorkspaceStore(): WorkspaceStore {
  const [filledSlots, setFilledSlots] = useState<FilledSlots>({});
  const [selectedSlot, setSelectedSlot] = useState<SlotId | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );
  const [duration, setDuration] = useState<RentalDuration>("month");
  const [activeZone, setActiveZoneState] = useState<string | undefined>(
    undefined,
  );
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  // ── Push to history before mutating ──

  const pushHistory = useCallback(() => {
    setHistory((prev) => [
      ...prev.slice(-19), // keep last 20
      { filledSlots, selectedSlot, selectedProductId },
    ]);
  }, [filledSlots, selectedSlot, selectedProductId]);

  // ── Derived ──

  const selectedProduct = useMemo(
    () => (selectedProductId ? getProductById(selectedProductId) : undefined),
    [selectedProductId],
  );

  const inspectorOpen = selectedProductId !== null && selectedSlot !== null;

  const filledItems = useMemo(() => {
    const items: { product: Product; slotId: SlotId }[] = [];
    for (const [slotId, productId] of Object.entries(filledSlots)) {
      if (productId) {
        const product = getProductById(productId);
        if (product) items.push({ product, slotId: slotId as SlotId });
      }
    }
    return items;
  }, [filledSlots]);

  const itemCount = filledItems.length;

  const totalPrice = useMemo(() => {
    return filledItems.reduce((sum, { product }) => {
      switch (duration) {
        case "day":
          return sum + product.pricePerDay;
        case "week":
          return sum + product.pricePerWeek;
        case "month":
          return sum + product.pricePerMonth;
      }
    }, 0);
  }, [filledItems, duration]);

  // ── Actions ──

  const selectSlot = useCallback(
    (slotId: SlotId) => {
      setSelectedSlot(slotId);
      // If slot is filled, select that product
      const productId = filledSlots[slotId];
      if (productId) {
        setSelectedProductId(productId);
      }
    },
    [filledSlots],
  );

  const selectProduct = useCallback(
    (product: Product) => {
      setSelectedProductId(product.id);

      // Auto-place: if a slot is selected and product is compatible, place it
      if (selectedSlot && product.compatibleSlots.includes(selectedSlot)) {
        pushHistory();
        setFilledSlots((prev) => ({ ...prev, [selectedSlot]: product.id }));
      }
    },
    [selectedSlot, pushHistory],
  );

  const placeProduct = useCallback(
    (productId: string, slotId: SlotId) => {
      pushHistory();
      setFilledSlots((prev) => ({ ...prev, [slotId]: productId }));
      setSelectedSlot(slotId);
      setSelectedProductId(productId);
    },
    [pushHistory],
  );

  const removeFromSlot = useCallback(
    (slotId: SlotId) => {
      pushHistory();
      setFilledSlots((prev) => {
        const next = { ...prev };
        delete next[slotId];
        return next;
      });
      setSelectedSlot(null);
      setSelectedProductId(null);
    },
    [pushHistory],
  );

  const clearCanvas = useCallback(() => {
    pushHistory();
    setFilledSlots({});
    setSelectedSlot(null);
    setSelectedProductId(null);
  }, [pushHistory]);

  const undo = useCallback(() => {
    if (history.length === 0) return;
    const prev = history[history.length - 1]!;
    setHistory((h) => h.slice(0, -1));
    setFilledSlots(prev.filledSlots);
    setSelectedSlot(prev.selectedSlot);
    setSelectedProductId(prev.selectedProductId);
  }, [history]);

  const closeInspector = useCallback(() => {
    setSelectedSlot(null);
    setSelectedProductId(null);
  }, []);

  const setActiveZone = useCallback((zone: string) => {
    setActiveZoneState((prev) => (prev === zone ? undefined : zone));
  }, []);

  return {
    filledSlots,
    selectedSlot,
    selectedProductId,
    selectedProduct,
    duration,
    setDuration,
    activeZone,
    setActiveZone,
    selectSlot,
    selectProduct,
    placeProduct,
    removeFromSlot,
    clearCanvas,
    undo,
    canUndo: history.length > 0,
    inspectorOpen,
    closeInspector,
    itemCount,
    totalPrice,
    filledItems,
  };
}
