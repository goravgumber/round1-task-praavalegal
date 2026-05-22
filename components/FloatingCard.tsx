"use client";

import React from "react";

export type CardColor = "blue" | "orange" | "dark" | "portal";

export interface FloatingCardProps {
  color: CardColor;
  rotation: number;
  icon?: React.ReactNode;
  label: string;
  variant?: "default" | "portal";
  delay?: string;
  style?: React.CSSProperties;
}

const bgMap: Record<CardColor, string> = {
  blue:   "#3B5BFF",
  orange: "#E8813A",
  dark:   "#1E1E3F",
  portal: "#E8E8F5",
};

const textMap: Record<CardColor, string> = {
  blue:   "#ffffff",
  orange: "#ffffff",
  dark:   "#ffffff",
  portal: "#1E1E3F",
};

export default function FloatingCard({
  color,
  rotation,
  icon,
  label,
  variant = "default",
  delay = "0s",
  style,
}: FloatingCardProps) {
  const baseStyle: React.CSSProperties = {
    "--rotation": `${rotation}deg`,
    "--delay": delay,
    background: bgMap[color],
    color: textMap[color],
    borderRadius: "9999px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
    ...style,
  } as React.CSSProperties;

  /* ── Portal variant — rectangular card, not a pill ── */
  if (variant === "portal") {
    return (
      <div
        className="card-float absolute cursor-default hover:scale-105 transition-transform duration-200"
        style={{
          ...baseStyle,
          borderRadius: "20px",
          padding: "14px 18px",
          width: "260px",
          background: "#E8E8F5",
          color: "#1E1E3F",
          boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <div
            className="flex-shrink-0 flex items-center justify-center text-white text-xs font-bold select-none"
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#5C3D2E",
            }}
          >
            JD
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, lineHeight: 1.3 }}>
            {label}
          </span>
        </div>
        {/* Message */}
        <p style={{ fontSize: 11, opacity: 0.75, lineHeight: 1.5, marginBottom: 4 }}>
          Hey! Could you please review a document for me?
        </p>
        {/* Ticket */}
        <p style={{ fontSize: 10, opacity: 0.5, fontWeight: 500, letterSpacing: "0.02em" }}>
          MAT-2235 &bull; 21 min ago
        </p>
      </div>
    );
  }

  /* ── Default pill card ── */
  return (
    <div
      className="card-float absolute cursor-default hover:scale-105 transition-transform duration-200 flex items-center gap-3"
      style={{
        ...baseStyle,
        padding: "14px 28px",
      }}
    >
      {icon && (
        <span className="flex-shrink-0" style={{ display: "flex" }}>
          {icon}
        </span>
      )}
      <span style={{ fontSize: 15, fontWeight: 600, whiteSpace: "nowrap" }}>
        {label}
      </span>
    </div>
  );
}
