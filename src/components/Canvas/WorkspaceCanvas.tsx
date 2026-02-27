"use client";

import { motion, AnimatePresence } from "framer-motion";

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
      ease: [0.34, 1.56, 0.64, 1], // cubic-bezier bounce
    },
  }),
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.9,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const floatBob = (delay: number = 0) => ({
  y: [0, -5, 0],
  transition: {
    delay,
    duration: 2.8,
    ease: "easeInOut",
    repeat: Infinity,
  },
});

// ── Sub-components ──

function CodeLines({
  lines,
}: {
  lines: { width: number; color: string }[];
}) {
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

function Monitor({
  className,
  screenW,
  screenH,
  lines,
  screenBg,
  delay = 0,
}: {
  className?: string;
  screenW: number;
  screenH: number;
  lines: { width: number; color: string }[];
  screenBg?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute flex flex-col items-center ${className ?? ""}`}
      variants={itemDrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={delay}
    >
      {/* Screen */}
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
        {/* Screen glare */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-2/5"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)",
          }}
        />
        <CodeLines lines={lines} />
        {/* Bottom bezel */}
        <div
          className="absolute -bottom-[2px] left-1/2 h-[5px] w-3/5 -translate-x-1/2 rounded-b"
          style={{ background: "#2A2D3A" }}
        />
      </div>
      {/* Stand */}
      <div className="h-[11px] w-[2.5px]" style={{ background: "#2A2D3A" }} />
      {/* Base */}
      <div
        className="h-[3px] w-[22px] rounded-sm"
        style={{ background: "#2A2D3A" }}
      />
    </motion.div>
  );
}

function Lamp({ delay = 0.15 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute bottom-[8px] right-[18px]"
      variants={itemDrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={delay}
    >
      {/* Arm */}
      <div
        className="relative ml-[10px] h-[48px] w-[2.5px] origin-bottom -rotate-[14deg]"
        style={{ background: "#C0BDB8" }}
      >
        {/* Shade */}
        <div
          className="absolute -left-[11px] -top-[4px] h-[13px] w-[26px] rounded-t-[50%] rounded-b-[5px]"
          style={{
            background:
              "linear-gradient(180deg, #E8E4DC 0%, #D8D2C8 100%)",
            boxShadow: "0 5px 14px rgba(255,230,150,0.25)",
          }}
        />
      </div>
      {/* Base */}
      <div
        className="h-[5px] w-[22px] rounded-[3px]"
        style={{ background: "#C0BDB8" }}
      />
    </motion.div>
  );
}

function DeskPlant({ delay = 0.05 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute bottom-[6px] left-[4px]"
      variants={itemDrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={delay}
    >
      {/* Leaves */}
      <div className="-mb-[3px] flex justify-center">
        <div
          className="h-[18px] w-[13px] origin-bottom-right rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%]"
          style={{
            background: "linear-gradient(135deg, #5A8A6A 0%, #3A6A4A 100%)",
          }}
        />
        <div
          className="h-[18px] w-[13px] -rotate-[18deg] -scale-x-100 rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%]"
          style={{
            background: "linear-gradient(135deg, #5A8A6A 0%, #3A6A4A 100%)",
          }}
        />
        <div
          className="h-[18px] w-[13px] rotate-[18deg] rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%]"
          style={{
            background: "linear-gradient(135deg, #5A8A6A 0%, #3A6A4A 100%)",
          }}
        />
      </div>
      {/* Pot */}
      <div
        className="h-[17px] w-[22px] rounded-b-[5px] rounded-t-[2px]"
        style={{
          background:
            "linear-gradient(180deg, #D0C8BE 0%, #C0B8AE 100%)",
          clipPath: "polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%)",
        }}
      />
    </motion.div>
  );
}

function Keyboard() {
  const keys = Array.from({ length: 33 });
  return (
    <div
      className="absolute bottom-[2px] left-1/2 grid -translate-x-1/2 grid-cols-12 grid-rows-3"
      style={{
        width: 122,
        height: 30,
        background:
          "linear-gradient(180deg, #F0EDE8 0%, #E4E0D8 100%)",
        borderRadius: 4,
        boxShadow:
          "0 2px 6px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.7)",
        gap: "1.5px",
        padding: "4px 4px 3px",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {keys.map((_, i) =>
        i === 32 ? (
          <div
            key={i}
            className="rounded-[1.5px] bg-white"
            style={{
              gridColumn: "span 4",
              boxShadow: "0 1px 0 rgba(0,0,0,0.15)",
            }}
          />
        ) : (
          <div
            key={i}
            className="rounded-[1.5px] bg-white"
            style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.15)" }}
          />
        ),
      )}
    </div>
  );
}

function Mouse() {
  return (
    <div
      className="absolute bottom-[5px]"
      style={{
        left: "calc(50% + 68px)",
        width: 21,
        height: 28,
        background:
          "linear-gradient(180deg, #ECEAE5 0%, #DCD8D0 100%)",
        borderRadius: "10px 10px 7px 7px",
        boxShadow:
          "0 2px 6px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.7)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Scroll line */}
      <div
        className="absolute left-1/2 top-[7px] h-[10px] w-px -translate-x-1/2"
        style={{ background: "rgba(0,0,0,0.12)" }}
      />
    </div>
  );
}

function Chair({ delay = 0.25 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute bottom-[136px] left-1/2 -translate-x-1/2"
      variants={itemDrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={delay}
    >
      {/* Back */}
      <div
        className="relative mx-auto h-[66px] w-[58px] rounded-t-[7px] rounded-b-[3px]"
        style={{
          background:
            "linear-gradient(160deg, #2A2A35 0%, #1A1A24 100%)",
          boxShadow: "2px 6px 16px rgba(0,0,0,0.25)",
        }}
      >
        {/* Inner border */}
        <div
          className="absolute inset-x-[7px] inset-y-[8px] rounded"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        />
      </div>
      {/* Seat */}
      <div
        className="mx-auto h-[18px] w-[68px] rounded"
        style={{
          background:
            "linear-gradient(180deg, #252530 0%, #1A1A24 100%)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      />
      {/* Stem */}
      <div className="mx-auto h-[28px] w-[2px] bg-[#A0A09A]" />
      {/* Wheels */}
      <div className="mx-auto flex w-[58px] justify-between">
        <div className="h-[5px] w-[12px] rounded-[3px] bg-[#888]" />
        <div className="h-[5px] w-[12px] rounded-[3px] bg-[#888]" />
        <div className="h-[5px] w-[12px] rounded-[3px] bg-[#888]" />
      </div>
    </motion.div>
  );
}

function FloorPlant({ delay = 0.35 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute bottom-[138px] left-[72px]"
      variants={itemDrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={delay}
    >
      {/* Leaves */}
      <div className="-mb-[3px] flex justify-center">
        <div
          className="h-[28px] w-[18px] origin-bottom-right rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%]"
          style={{
            background: "linear-gradient(135deg, #5A8A6A 0%, #3A6A4A 100%)",
          }}
        />
        <div
          className="h-[28px] w-[18px] -rotate-[18deg] -scale-x-100 rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%]"
          style={{
            background: "linear-gradient(135deg, #5A8A6A 0%, #3A6A4A 100%)",
          }}
        />
        <div
          className="h-[28px] w-[18px] rotate-[18deg] rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%]"
          style={{
            background: "linear-gradient(135deg, #5A8A6A 0%, #3A6A4A 100%)",
          }}
        />
      </div>
      {/* Pot */}
      <div
        className="h-[24px] w-[30px] rounded-b-[6px] rounded-t-[2px]"
        style={{
          background:
            "linear-gradient(180deg, #D0C8BE 0%, #C0B8AE 100%)",
          clipPath: "polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%)",
        }}
      />
    </motion.div>
  );
}

// ── Hotspot Button ──

function Hotspot({
  label,
  style,
  delay = 0,
  onClick,
}: {
  label: string;
  style: React.CSSProperties;
  delay?: number;
  onClick?: () => void;
}) {
  return (
    <motion.button
      className="absolute z-30 cursor-pointer whitespace-nowrap rounded-[20px] border border-border-strong bg-white px-[11px] py-[5px] text-[10.5px] font-medium tracking-[0.01em] text-ink-secondary transition-colors duration-150 hover:border-ink hover:bg-ink hover:text-white"
      style={{
        ...style,
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
      }}
      animate={floatBob(delay)}
      onClick={onClick}
    >
      <span className="opacity-60">+ </span>
      {label}
    </motion.button>
  );
}

// ── Main Component ──

export interface WorkspaceCanvasProps {
  /** IDs of items currently placed in the workspace */
  placedItems?: string[];
  /** Called when a hotspot "add" button is clicked */
  onHotspotClick?: (zone: string) => void;
}

export default function WorkspaceCanvas({
  onHotspotClick,
}: WorkspaceCanvasProps) {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-off-white">
      {/* ── Dot grid background ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D4D4D0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Radial glow center ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(255,255,255,0.9) 0%, transparent 70%)",
        }}
      />

      {/* ── Scene Wrapper ── */}
      <div className="relative z-[1] flex flex-1 items-center justify-center px-5 pb-5 pt-16">
        <div className="relative" style={{ width: 640, height: 400 }}>
          {/* ── Hotspots ── */}
          <Hotspot
            label="Add Monitor"
            style={{ top: 42, left: 44 }}
            delay={0}
            onClick={() => onHotspotClick?.("monitor")}
          />
          <Hotspot
            label="Add Lamp"
            style={{ top: 62, right: 34 }}
            delay={0.5}
            onClick={() => onHotspotClick?.("lamp")}
          />
          <Hotspot
            label="Place a Plant"
            style={{ bottom: 112, left: 18 }}
            delay={1.0}
            onClick={() => onHotspotClick?.("plant")}
          />

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
            {/* ── Items ON the Desk ── */}
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
                {/* Left Monitor */}
                <Monitor
                  key="mon-left"
                  className="bottom-[10px] left-[28px]"
                  screenW={92}
                  screenH={60}
                  delay={0}
                  lines={[
                    { width: 58, color: "#58A6FF" },
                    { width: 42, color: "#79C0FF" },
                    { width: 66, color: "#56D364" },
                    { width: 36, color: "#FF7B72" },
                    { width: 52, color: "#58A6FF" },
                  ]}
                />

                {/* Center Monitor (main) */}
                <Monitor
                  key="mon-center"
                  className="bottom-[10px] left-[158px]"
                  screenW={114}
                  screenH={74}
                  delay={0.05}
                  lines={[
                    { width: 72, color: "#C9D1D9" },
                    { width: 88, color: "#58A6FF" },
                    { width: 62, color: "#56D364" },
                    { width: 78, color: "#79C0FF" },
                    { width: 50, color: "#FF7B72" },
                    { width: 82, color: "#C9D1D9" },
                  ]}
                />

                {/* Right Monitor */}
                <Monitor
                  key="mon-right"
                  className="bottom-[10px] right-[55px]"
                  screenW={82}
                  screenH={52}
                  delay={0.1}
                  screenBg="linear-gradient(135deg, #0d1117 0%, #161b22 100%)"
                  lines={[
                    { width: 50, color: "#8B949E" },
                    { width: 38, color: "#58A6FF" },
                    { width: 55, color: "#56D364" },
                  ]}
                />

                {/* Lamp */}
                <Lamp key="lamp" delay={0.15} />

                {/* Desk Plant */}
                <DeskPlant key="desk-plant" delay={0.05} />
              </AnimatePresence>

              {/* Keyboard (static) */}
              <Keyboard />

              {/* Mouse (static) */}
              <Mouse />
            </div>

            {/* ── Desk Surface (top) ── */}
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
              {/* Wood grain */}
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
                background:
                  "linear-gradient(180deg, #D8D2C8 0%, #C8C0B4 100%)",
                boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              {/* Drawers */}
              <div
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
              <div
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
            </div>

            {/* ── Desk Legs ── */}
            <div
              className="flex justify-between px-[36px]"
              style={{ width: 430 }}
            >
              <div
                className="h-[24px] w-[12px] rounded-b-[3px]"
                style={{
                  background:
                    "linear-gradient(180deg, #B8B0A4 0%, #A8A098 100%)",
                }}
              />
              <div
                className="h-[24px] w-[12px] rounded-b-[3px]"
                style={{
                  background:
                    "linear-gradient(180deg, #B8B0A4 0%, #A8A098 100%)",
                }}
              />
            </div>
          </div>

          {/* ── Chair (on the platform floor) ── */}
          <AnimatePresence>
            <Chair key="chair" delay={0.25} />
          </AnimatePresence>

          {/* ── Floor Plant ── */}
          <AnimatePresence>
            <FloorPlant key="floor-plant" delay={0.35} />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
