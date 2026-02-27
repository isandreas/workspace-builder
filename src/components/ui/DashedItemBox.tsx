"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export interface DashedItemBoxProps {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function DashedItemBox({
  children,
  selected = false,
  onClick,
  className,
}: DashedItemBoxProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={onClick}
      className={cn(
        // Base
        "group relative cursor-pointer rounded-[10px] border-[1.5px] border-dashed",
        "bg-[#FEFCF8] px-2 py-3 text-center",
        "transition-colors duration-180",
        // Hover — solid ink border
        "hover:border-solid hover:border-ink hover:shadow-soft",
        // Selected state
        selected && [
          "border-solid border-ink bg-off-white",
          "shadow-[0_0_0_3px_rgba(17,17,17,0.07)]",
        ],
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
