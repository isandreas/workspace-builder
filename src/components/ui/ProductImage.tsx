"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export interface ProductImageProps {
  src: string;
  emoji: string;
  alt: string;
  size?: number;
  className?: string;
}

/**
 * Displays a product image with emoji fallback.
 * Falls back to emoji if the image fails to load.
 */
export function ProductImage({
  src,
  emoji,
  alt,
  size = 48,
  className,
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <span
        className={cn("flex items-center justify-center", className)}
        style={{ width: size, height: size, fontSize: size * 0.55 }}
        role="img"
        aria-label={alt}
      >
        {emoji}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("object-contain", className)}
      onError={() => setFailed(true)}
      unoptimized
    />
  );
}
