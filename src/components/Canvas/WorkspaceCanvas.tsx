"use client";

import type { SlotId } from "@/data/products";
import { AnimatePresence, motion } from "framer-motion";

// ── Slot definitions ──

export interface SlotDef {
  id: SlotId;
  label: string;
  /** "desk" slots live inside the perspective desk-items layer */
  zone: "desk" | "floor";
  /** Absolute CSS position within host layer */
  position: React.CSSProperties;
  /** Placeholder rectangle size */
  width: number;
  height: number;
  /** Always render (keyboard) — no empty placeholder shown */
  alwaysVisible?: boolean;
}

export const SLOTS: SlotDef[] = [
  {
    id: "monitor-left",
    label: "Monitor",
    zone: "desk",
    position: { bottom: 10, left: 28 },
    width: 92,
    height: 80,
  },
  {
    id: "monitor-center",
    label: "Monitor",
    zone: "desk",
    position: { bottom: 10, left: 158 },
    width: 114,
    height: 94,
  },
  {
    id: "monitor-right",
    label: "Monitor",
    zone: "desk",
    position: { bottom: 10, right: 55 },
    width: 82,
    height: 72,
  },
  {
    id: "lamp",
    label: "Lamp",
    zone: "desk",
    position: { bottom: 8, right: 18 },
    width: 30,
    height: 62,
  },
  {
    id: "keyboard",
    label: "Keyboard",
    zone: "desk",
    position: { bottom: 2, left: "50%", transform: "translateX(-50%)" },
    width: 160,
    height: 34,
    alwaysVisible: true,
  },
  {
    id: "plant-desk",
    label: "Plant",
    zone: "desk",
    position: { bottom: 6, left: 4 },
    width: 28,
    height: 38,
  },
  {
    id: "chair",
    label: "Chair",
    zone: "floor",
    position: { bottom: 136, left: "50%", transform: "translateX(-50%)" },
    width: 68,
    height: 120,
  },
  {
    id: "plant-floor",
    label: "Plant",
    zone: "floor",
    position: { bottom: 138, left: 72 },
    width: 50,
    height: 55,
  },
  {
    id: "side-table",
    label: "Side Table",
    zone: "floor",
    position: { bottom: 138, right: 72 },
    width: 50,
    height: 55,
  },
];

// ── Hotspot definitions ──

interface HotspotDef {
  slotId: SlotId;
  label: string;
  /** Percentage-based position within the 640×400 scene container */
  position: { top?: string; bottom?: string; left?: string; right?: string };
  /** Stagger delay for the float animation (seconds) */
  animDelay: number;
}

const HOTSPOTS: HotspotDef[] = [
  {
    slotId: "monitor-left",
    label: "Add Monitor!",
    position: { top: "10%", left: "7%" },
    animDelay: 0,
  },
  {
    slotId: "monitor-center",
    label: "Add Monitor!",
    position: { top: "5%", left: "42%" },
    animDelay: 0.4,
  },
  {
    slotId: "monitor-right",
    label: "Add Monitor!",
    position: { top: "10%", right: "7%" },
    animDelay: 0.8,
  },
  {
    slotId: "lamp",
    label: "Add Lamp",
    position: { top: "16%", right: "3%" },
    animDelay: 0.6,
  },
  {
    slotId: "plant-floor",
    label: "Add Plant",
    position: { bottom: "28%", left: "5%" },
    animDelay: 1.0,
  },
  {
    slotId: "chair",
    label: "Place a Chair",
    position: { bottom: "18%", left: "44%" },
    animDelay: 1.2,
  },
];

// ── Animation Variants ──

const itemDrop = {
  hidden: { opacity: 0, y: -18, scale: 0.85 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay,
      duration: 0.45,
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
    },
  }),
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.9,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

const floatBob = {
  y: [0, -5, 0],
  transition: {
    duration: 2.8,
    ease: "easeInOut" as const,
    repeat: Infinity,
  },
};

// ── Visual item renderers (pure CSS illustrations) ──

function CodeLines({ lines }: { lines: { width: number; color: string }[] }) {
  return (
    <div className="flex flex-col gap-[3.5px] p-[7px]">
      {lines.map((line, i) => (
        <div
          key={i}
          className="h-[2.5px] rounded-sm opacity-70"
          style={{ width: line.width, background: line.color }}
        />
      ))}
    </div>
  );
}

function MonitorVisual({
  screenW,
  screenH,
  lines,
  screenBg,
}: {
  screenW: number;
  screenH: number;
  lines: { width: number; color: string }[];
  screenBg?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-t-[6px] rounded-b-[2px]"
        style={{
          width: screenW,
          height: screenH,
          background:
            screenBg ??
            "linear-gradient(135deg, #0F1117 0%, #1A1D27 50%, #0F1117 100%)",
          border: "2.5px solid #2A2D3A",
          boxShadow:
            "0 4px 16px rgba(0,0,0,0.3), inset 0 0 30px rgba(80,120,200,0.05)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-2/5"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)",
          }}
        />
        <CodeLines lines={lines} />
        <div
          className="absolute -bottom-[2px] left-1/2 h-[5px] w-3/5 -translate-x-1/2 rounded-b"
          style={{ background: "#2A2D3A" }}
        />
      </div>
      <div className="h-[11px] w-[2.5px]" style={{ background: "#2A2D3A" }} />
      <div
        className="h-[3px] w-[22px] rounded-sm"
        style={{ background: "#2A2D3A" }}
      />
    </div>
  );
}

function LampVisual() {
  return (
    <div>
      <div
        className="relative ml-[10px] h-[48px] w-[2.5px] origin-bottom -rotate-[14deg]"
        style={{ background: "#C0BDB8" }}
      >
        <div
          className="absolute -left-[11px] -top-[4px] h-[13px] w-[26px] rounded-t-[50%] rounded-b-[5px]"
          style={{
            background: "linear-gradient(180deg, #E8E4DC 0%, #D8D2C8 100%)",
            boxShadow: "0 5px 14px rgba(255,230,150,0.25)",
          }}
        />
      </div>
      <div
        className="h-[5px] w-[22px] rounded-[3px]"
        style={{ background: "#C0BDB8" }}
      />
    </div>
  );
}

function PlantVisual({ size = "sm" }: { size?: "sm" | "lg" }) {
  const leafH = size === "lg" ? 28 : 18;
  const leafW = size === "lg" ? 18 : 13;
  const potH = size === "lg" ? 24 : 17;
  const potW = size === "lg" ? 30 : 22;
  const potR = size === "lg" ? 6 : 5;
  return (
    <div>
      <div className="-mb-[3px] flex justify-center">
        <div
          className="origin-bottom-right rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%]"
          style={{
            height: leafH,
            width: leafW,
            background: "linear-gradient(135deg, #5A8A6A 0%, #3A6A4A 100%)",
          }}
        />
        <div
          className="-rotate-[18deg] -scale-x-100 rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%]"
          style={{
            height: leafH,
            width: leafW,
            background: "linear-gradient(135deg, #5A8A6A 0%, #3A6A4A 100%)",
          }}
        />
        <div
          className="rotate-[18deg] rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%]"
          style={{
            height: leafH,
            width: leafW,
            background: "linear-gradient(135deg, #5A8A6A 0%, #3A6A4A 100%)",
          }}
        />
      </div>
      <div
        className="rounded-t-[2px]"
        style={{
          height: potH,
          width: potW,
          borderRadius: `2px 2px ${potR}px ${potR}px`,
          background: "linear-gradient(180deg, #D0C8BE 0%, #C0B8AE 100%)",
          clipPath: "polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%)",
        }}
      />
    </div>
  );
}

function KeyboardVisual() {
  const keys = Array.from({ length: 33 });
  return (
    <div
      className="grid grid-cols-12 grid-rows-3"
      style={{
        width: 122,
        height: 30,
        background: "linear-gradient(180deg, #F0EDE8 0%, #E4E0D8 100%)",
        borderRadius: 4,
        boxShadow:
          "0 2px 6px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.7)",
        gap: "1.5px",
        padding: "4px 4px 3px",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {keys.map((_, i) => (
        <div
          key={i}
          className="rounded-[1.5px] bg-white"
          style={{
            gridColumn: i === 32 ? "span 4" : undefined,
            boxShadow: "0 1px 0 rgba(0,0,0,0.15)",
          }}
        />
      ))}
    </div>
  );
}

function MouseVisual() {
  return (
    <div
      className="absolute bottom-[5px]"
      style={{
        left: "calc(50% + 68px)",
        width: 21,
        height: 28,
        background: "linear-gradient(180deg, #ECEAE5 0%, #DCD8D0 100%)",
        borderRadius: "10px 10px 7px 7px",
        boxShadow:
          "0 2px 6px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.7)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="absolute left-1/2 top-[7px] h-[10px] w-px -translate-x-1/2"
        style={{ background: "rgba(0,0,0,0.12)" }}
      />
    </div>
  );
}

function ChairVisual() {
  return (
    <div>
      <div
        className="relative mx-auto h-[66px] w-[58px] rounded-t-[7px] rounded-b-[3px]"
        style={{
          background: "linear-gradient(160deg, #2A2A35 0%, #1A1A24 100%)",
          boxShadow: "2px 6px 16px rgba(0,0,0,0.25)",
        }}
      >
        <div
          className="absolute inset-x-[7px] inset-y-[8px] rounded"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        />
      </div>
      <div
        className="mx-auto h-[18px] w-[68px] rounded"
        style={{
          background: "linear-gradient(180deg, #252530 0%, #1A1A24 100%)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      />
      <div className="mx-auto h-[28px] w-[2px] bg-[#A0A09A]" />
      <div className="mx-auto flex w-[58px] justify-between">
        <div className="h-[5px] w-[12px] rounded-[3px] bg-[#888]" />
        <div className="h-[5px] w-[12px] rounded-[3px] bg-[#888]" />
        <div className="h-[5px] w-[12px] rounded-[3px] bg-[#888]" />
      </div>
    </div>
  );
}

function SideTableVisual() {
  return (
    <div className="flex flex-col items-center">
      {/* Top */}
      <div
        className="h-[6px] w-[44px] rounded-t-[3px]"
        style={{
          background: "linear-gradient(180deg, #F0EDE8 0%, #E0D8CC 100%)",
          boxShadow: "0 -1px 4px rgba(0,0,0,0.06)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      />
      {/* Legs */}
      <div className="flex w-[38px] justify-between">
        <div
          className="h-[32px] w-[3px] rounded-b-[2px]"
          style={{
            background: "linear-gradient(180deg, #C8C0B4 0%, #B8B0A4 100%)",
          }}
        />
        <div
          className="h-[32px] w-[3px] rounded-b-[2px]"
          style={{
            background: "linear-gradient(180deg, #C8C0B4 0%, #B8B0A4 100%)",
          }}
        />
      </div>
    </div>
  );
}

// ── Monitor variants for the three slots ──

const MONITOR_PRESETS: Record<
  string,
  {
    screenW: number;
    screenH: number;
    lines: { width: number; color: string }[];
    screenBg?: string;
  }
> = {
  "monitor-left": {
    screenW: 92,
    screenH: 60,
    lines: [
      { width: 58, color: "#58A6FF" },
      { width: 42, color: "#79C0FF" },
      { width: 66, color: "#56D364" },
      { width: 36, color: "#FF7B72" },
      { width: 52, color: "#58A6FF" },
    ],
  },
  "monitor-center": {
    screenW: 114,
    screenH: 74,
    lines: [
      { width: 72, color: "#C9D1D9" },
      { width: 88, color: "#58A6FF" },
      { width: 62, color: "#56D364" },
      { width: 78, color: "#79C0FF" },
      { width: 50, color: "#FF7B72" },
      { width: 82, color: "#C9D1D9" },
    ],
  },
  "monitor-right": {
    screenW: 82,
    screenH: 52,
    screenBg: "linear-gradient(135deg, #0d1117 0%, #161b22 100%)",
    lines: [
      { width: 50, color: "#8B949E" },
      { width: 38, color: "#58A6FF" },
      { width: 55, color: "#56D364" },
    ],
  },
};

// ── Render the correct visual for a filled slot ──

function SlotVisual({ slotId }: { slotId: SlotId }) {
  if (slotId.startsWith("monitor-")) {
    const p = MONITOR_PRESETS[slotId] ?? MONITOR_PRESETS["monitor-center"]!;
    return <MonitorVisual {...p} />;
  }
  switch (slotId) {
    case "lamp":
      return <LampVisual />;
    case "plant-desk":
      return <PlantVisual size="sm" />;
    case "plant-floor":
      return <PlantVisual size="lg" />;
    case "chair":
      return <ChairVisual />;
    case "keyboard":
      return <KeyboardVisual />;
    case "side-table":
      return <SideTableVisual />;
    default:
      return null;
  }
}

// ── Contextual Hotspot Button ──

function Hotspot({ def, onClick }: { def: HotspotDef; onClick: () => void }) {
  return (
    <motion.button
      className="absolute z-40 flex cursor-pointer items-center gap-[3px] whitespace-nowrap rounded-full border bg-white px-[12px] py-[5px] text-[10.5px] font-medium tracking-[0.01em] transition-all duration-[180ms] hover:scale-[1.04] hover:shadow-md active:scale-[0.97]"
      style={{
        ...def.position,
        borderColor: "#C27A5C",
        color: "#B5694D",
        boxShadow:
          "0 1px 4px rgba(194,122,92,0.12), 0 4px 16px rgba(194,122,92,0.06)",
        animation: `hotspotFloat 2.8s ease-in-out ${def.animDelay}s infinite`,
      }}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6, transition: { duration: 0.2 } }}
      transition={{
        delay: 0.5 + def.animDelay,
        duration: 0.4,
        ease: "easeOut",
      }}
      onClick={onClick}
      aria-label={def.label}
    >
      <span className="text-[11px] opacity-60">+</span>
      <span>{def.label}</span>
    </motion.button>
  );
}

// ── Empty slot placeholder ──

function EmptySlotPlaceholder({
  slot,
  onClick,
}: {
  slot: SlotDef;
  onClick: () => void;
}) {
  return (
    <motion.button
      className="absolute z-20 flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-[1.5px] border-dashed border-border-strong/60 bg-white/30 backdrop-blur-[2px] transition-colors duration-200 hover:border-ink/40 hover:bg-white/60"
      style={{
        ...slot.position,
        width: slot.width,
        height: slot.height,
      }}
      animate={floatBob}
      onClick={onClick}
      aria-label={`Add ${slot.label}`}
    >
      <span className="text-[16px] leading-none text-ink/20">+</span>
      <span className="text-[8px] font-medium tracking-wide text-ink-muted/50">
        {slot.label}
      </span>
    </motion.button>
  );
}

// ── Filled slot wrapper ──

function FilledSlot({
  slot,
  isSelected,
  delay,
  onClick,
}: {
  slot: SlotDef;
  isSelected: boolean;
  delay: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      className="absolute z-20 cursor-pointer"
      style={{
        ...slot.position,
        filter: isSelected
          ? "drop-shadow(0 0 8px rgba(100,120,200,0.35))"
          : undefined,
      }}
      variants={itemDrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={delay}
      onClick={onClick}
      aria-label={`Select ${slot.label}`}
    >
      {isSelected && (
        <div
          className="pointer-events-none absolute -inset-[4px] rounded-lg border-[1.5px] border-ink/30"
          style={{ boxShadow: "0 0 12px rgba(100,120,200,0.15)" }}
        />
      )}
      <SlotVisual slotId={slot.id} />
    </motion.button>
  );
}

// ── Main Component ──

export type FilledSlots = Partial<Record<SlotId, string>>;

export interface WorkspaceCanvasProps {
  /** Map of slotId → productId for filled slots */
  filledSlots?: FilledSlots;
  /** Currently selected slot */
  selectedSlot?: SlotId | null;
  /** Fired when an empty slot is clicked */
  onEmptySlotClick?: (slotId: SlotId) => void;
  /** Fired when a filled slot is clicked */
  onFilledSlotClick?: (slotId: SlotId) => void;
}

export default function WorkspaceCanvas({
  filledSlots = {},
  selectedSlot = null,
  onEmptySlotClick,
  onFilledSlotClick,
}: WorkspaceCanvasProps) {
  const deskSlots = SLOTS.filter((s) => s.zone === "desk");
  const floorSlots = SLOTS.filter((s) => s.zone === "floor");

  function renderSlot(slot: SlotDef, delay: number) {
    const isFilled = slot.id in filledSlots;
    const isAlwaysVisible = slot.alwaysVisible;

    // Always-visible slots (keyboard) render their visual directly
    if (isAlwaysVisible) {
      return (
        <div key={slot.id} className="absolute z-20" style={slot.position}>
          <SlotVisual slotId={slot.id} />
          {/* Mouse sits next to keyboard — always rendered */}
          <MouseVisual />
        </div>
      );
    }

    if (isFilled) {
      return (
        <FilledSlot
          key={slot.id}
          slot={slot}
          isSelected={selectedSlot === slot.id}
          delay={delay}
          onClick={() => onFilledSlotClick?.(slot.id)}
        />
      );
    }

    return (
      <EmptySlotPlaceholder
        key={slot.id}
        slot={slot}
        onClick={() => onEmptySlotClick?.(slot.id)}
      />
    );
  }

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-off-white">
      {/* ── Hotspot float keyframes (injected once) ── */}
      <style>{`
        @keyframes hotspotFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
      {/* ── Dot grid background ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D4D4D0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Radial glow ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(255,255,255,0.9) 0%, transparent 70%)",
        }}
      />

      {/* ── Scene ── */}
      <div className="relative z-[1] flex flex-1 items-center justify-center px-5 pb-5 pt-16">
        <div className="relative" style={{ width: 640, height: 400 }}>
          {/* ── Contextual Hotspot Buttons ── */}
          <AnimatePresence>
            {HOTSPOTS.map(
              (hs) =>
                !(hs.slotId in filledSlots) && (
                  <Hotspot
                    key={`hs-${hs.slotId}`}
                    def={hs}
                    onClick={() => onEmptySlotClick?.(hs.slotId)}
                  />
                ),
            )}
          </AnimatePresence>

          {/* ── Oval Platform ── */}
          <div
            className="absolute bottom-[10px] left-1/2 -translate-x-1/2"
            style={{
              width: 580,
              height: 130,
              background:
                "linear-gradient(160deg, #FFFFFF 0%, #F0EFEB 40%, #E6E4DE 100%)",
              borderRadius: "50%",
              boxShadow:
                "0 24px 60px rgba(0,0,0,0.10), 0 8px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          />

          {/* ── Desk Container ── */}
          <div
            className="absolute bottom-[88px] left-1/2 -translate-x-1/2"
            style={{ width: 430 }}
          >
            {/* ── Desk Items Layer (perspective) ── */}
            <div
              className="absolute bottom-full left-0"
              style={{
                width: 430,
                height: 145,
                transform: "perspective(700px) rotateX(-4deg)",
                transformOrigin: "bottom center",
              }}
            >
              <AnimatePresence>
                {deskSlots.map((slot, i) => renderSlot(slot, i * 0.05))}
              </AnimatePresence>
            </div>

            {/* ── Desk Surface ── */}
            <div
              className="relative"
              style={{
                width: 430,
                height: 52,
                background:
                  "linear-gradient(180deg, #F8F5F0 0%, #EDE8E0 40%, #E0D8CC 100%)",
                borderRadius: "5px 5px 0 0",
                boxShadow: "0 -2px 6px rgba(0,0,0,0.06)",
                transform: "perspective(700px) rotateX(-7deg)",
                transformOrigin: "bottom center",
                borderTop: "1px solid rgba(255,255,255,0.8)",
              }}
            >
              <div
                className="absolute inset-0 rounded-t-[5px]"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, transparent 0px, transparent 36px, rgba(0,0,0,0.015) 36px, rgba(0,0,0,0.015) 37px)",
                }}
              />
            </div>

            {/* ── Desk Front ── */}
            <div
              className="relative flex items-center justify-around px-[50px]"
              style={{
                width: 430,
                height: 80,
                background: "linear-gradient(180deg, #D8D2C8 0%, #C8C0B4 100%)",
                boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="relative h-[28px] w-[100px] rounded-[3px]"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <div
                    className="absolute left-1/2 top-1/2 h-[3px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-sm"
                    style={{ background: "rgba(255,255,255,0.25)" }}
                  />
                </div>
              ))}
            </div>

            {/* ── Desk Legs ── */}
            <div
              className="flex justify-between px-[36px]"
              style={{ width: 430 }}
            >
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="h-[24px] w-[12px] rounded-b-[3px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #B8B0A4 0%, #A8A098 100%)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Floor Slots (chair, plants, side table) ── */}
          <AnimatePresence>
            {floorSlots.map((slot, i) => renderSlot(slot, 0.2 + i * 0.1))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
