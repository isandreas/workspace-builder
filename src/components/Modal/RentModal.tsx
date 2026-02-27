"use client";

import type { Product, SlotId } from "@/data/products";
import type { RentalDuration } from "@/hooks/useWorkspaceStore";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// ── Props ──

export interface RentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filledItems: { product: Product; slotId: SlotId }[];
  totalPrice: number;
  duration: RentalDuration;
}

// ── Duration label helper ──

const DURATION_LABELS: Record<RentalDuration, string> = {
  day: "/ day",
  week: "/ week",
  month: "/ month",
};

function getPrice(product: Product, duration: RentalDuration) {
  switch (duration) {
    case "day":
      return product.pricePerDay;
    case "week":
      return product.pricePerWeek;
    case "month":
      return product.pricePerMonth;
  }
}

// ── Component ──

export function RentModal({
  open,
  onOpenChange,
  filledItems,
  totalPrice,
  duration,
}: RentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    whatsapp: "",
    address: "",
    moveInDate: "",
  });

  const handleClose = (v: boolean) => {
    onOpenChange(v);
    if (!v) {
      // Reset on close
      setTimeout(() => setSubmitted(false), 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* ── Overlay ── */}
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>

            {/* ── Content ── */}
            <Dialog.Content asChild>
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="max-h-[85vh] w-130 overflow-y-auto rounded-2xl border border-border bg-white shadow-elevated outline-none"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {submitted ? (
                    <SuccessState onClose={() => handleClose(false)} />
                  ) : (
                    <CheckoutForm
                      filledItems={filledItems}
                      totalPrice={totalPrice}
                      duration={duration}
                      form={form}
                      onUpdateField={updateField}
                      onSubmit={handleSubmit}
                      onClose={() => handleClose(false)}
                    />
                  )}
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

// ── Success State ──

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="flex flex-col items-center px-8 py-12 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="text-[52px]">🎉</span>
      <h2 className="mt-4 font-serif text-2xl font-semibold text-ink">
        Workspace booked!
      </h2>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
        We&apos;ll WhatsApp you within 1 hour to confirm your delivery details
        and schedule.
      </p>
      <button
        onClick={onClose}
        className="mt-8 cursor-pointer rounded-xl bg-ink px-8 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-hover hover:shadow-md"
      >
        Done
      </button>
    </motion.div>
  );
}

// ── Checkout Form ──

function CheckoutForm({
  filledItems,
  totalPrice,
  duration,
  form,
  onUpdateField,
  onSubmit,
  onClose,
}: {
  filledItems: { product: Product; slotId: SlotId }[];
  totalPrice: number;
  duration: RentalDuration;
  form: {
    fullName: string;
    whatsapp: string;
    address: string;
    moveInDate: string;
  };
  onUpdateField: (
    field: "fullName" | "whatsapp" | "address" | "moveInDate",
    value: string,
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}) {
  const isValid =
    form.fullName.trim() &&
    form.whatsapp.trim() &&
    form.address.trim() &&
    form.moveInDate;

  return (
    <form onSubmit={onSubmit}>
      {/* ── Header ── */}
      <div className="flex items-center justify-between border-b border-border px-6 py-5">
        <Dialog.Title className="font-serif text-xl font-semibold text-ink">
          Your Bali Office Awaits 🌴
        </Dialog.Title>
        <button
          type="button"
          onClick={onClose}
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-surface hover:text-ink"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      {/* ── Summary Table ── */}
      <div className="border-b border-border px-6 py-4">
        <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[0.06em] text-ink-muted">
          Your Workspace
        </h3>
        <div className="space-y-2">
          {filledItems.map(({ product, slotId }) => (
            <div
              key={slotId}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <span className="text-base">{product.emoji}</span>
                <span className="truncate text-[13px] text-ink">
                  {product.name}
                </span>
              </div>
              <span className="shrink-0 text-[13px] font-medium tabular-nums text-ink">
                ${getPrice(product, duration)}
              </span>
            </div>
          ))}
        </div>

        {/* ── Total ── */}
        <div className="mt-4 flex items-baseline justify-between border-t border-border pt-3">
          <span className="text-sm font-medium text-ink">Total</span>
          <span
            className="font-serif text-[22px] font-semibold"
            style={{ color: "#B5694D" }}
          >
            ${totalPrice}
            <span className="ml-1 font-sans text-xs font-light text-ink-muted">
              {DURATION_LABELS[duration]}
            </span>
          </span>
        </div>
      </div>

      {/* ── Delivery Info ── */}
      <div className="border-b border-border px-6 py-4">
        <div className="flex items-start gap-3 rounded-xl bg-surface px-4 py-3">
          <span className="mt-0.5 text-base">🛵</span>
          <p className="text-[12.5px] leading-relaxed text-ink-secondary">
            We&apos;ll deliver and set up your workspace within{" "}
            <strong className="font-medium text-ink">48 hours</strong> anywhere
            in Bali.
          </p>
        </div>
      </div>

      {/* ── Form Fields ── */}
      <div className="space-y-3.5 px-6 py-5">
        <FormField
          label="Full Name"
          type="text"
          placeholder="e.g. Sarah Chen"
          value={form.fullName}
          onChange={(v) => onUpdateField("fullName", v)}
          required
        />
        <FormField
          label="WhatsApp Number"
          type="tel"
          placeholder="+62 812 3456 7890"
          value={form.whatsapp}
          onChange={(v) => onUpdateField("whatsapp", v)}
          required
        />
        <FormField
          label="Delivery Address in Bali"
          type="text"
          placeholder="e.g. Jl. Pantai Berawa No. 42, Canggu"
          value={form.address}
          onChange={(v) => onUpdateField("address", v)}
          required
        />
        <FormField
          label="Move-in Date"
          type="date"
          value={form.moveInDate}
          onChange={(v) => onUpdateField("moveInDate", v)}
          required
        />
      </div>

      {/* ── Submit ── */}
      <div className="border-t border-border px-6 py-5">
        <button
          type="submit"
          disabled={!isValid}
          className="w-full cursor-pointer rounded-xl bg-ink py-3.5 text-[14px] font-medium tracking-[0.01em] text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-px hover:bg-accent-hover hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          Confirm &amp; Rent →
        </button>
      </div>
    </form>
  );
}

// ── Reusable Form Field ──

function FormField({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11.5px] font-medium tracking-[0.02em] text-ink-secondary">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="rounded-lg border border-border bg-white px-3.5 py-2.5 text-[13px] text-ink outline-none transition-all duration-180 placeholder:text-ink-muted/50 focus:border-ink/30 focus:ring-2 focus:ring-ink/5"
      />
    </div>
  );
}
