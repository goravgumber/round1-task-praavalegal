"use client";

import FloatingCard from "./FloatingCard";
import DarkModeToggle from "./DarkModeToggle";
import { ReceiptText, Gavel, CheckSquare, FileText } from "lucide-react";

/* ── Decorative pill shape ── */
function Pill({
  style,
  dark = false,
}: {
  style: React.CSSProperties;
  dark?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: 200,
        height: 60,
        borderRadius: 9999,
        background: dark ? "#2A2A4A" : "#D8DAF0",
        opacity: 0.7,
        zIndex: 0,
        ...style,
      }}
    />
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-[#EEEEF8] dark:bg-[#0F0F1A] transition-colors duration-300">

      {/* ── Dark mode toggle ── */}
      <DarkModeToggle />

      {/* ── Decorative pill shapes (behind everything) ── */}
      {/* Top-right, slight tilt */}
      <div aria-hidden="true" className="absolute pointer-events-none" style={{ zIndex: 0, top: "6%", right: "3%", transform: "rotate(-15deg)" }}>
        <div className="rounded-full bg-[#D8DAF0] dark:bg-[#2A2A4A] opacity-70" style={{ width: 210, height: 58 }} />
      </div>
      {/* Right-middle, vertical tilt */}
      <div aria-hidden="true" className="absolute pointer-events-none" style={{ zIndex: 0, top: "42%", right: "-2%", transform: "rotate(-75deg)" }}>
        <div className="rounded-full bg-[#D8DAF0] dark:bg-[#2A2A4A] opacity-70" style={{ width: 190, height: 55 }} />
      </div>
      {/* Bottom-right */}
      <div aria-hidden="true" className="absolute pointer-events-none" style={{ zIndex: 0, bottom: "8%", right: "6%", transform: "rotate(10deg)" }}>
        <div className="rounded-full bg-[#D8DAF0] dark:bg-[#2A2A4A] opacity-70" style={{ width: 220, height: 62 }} />
      </div>
      {/* Bottom-left */}
      <div aria-hidden="true" className="absolute pointer-events-none" style={{ zIndex: 0, bottom: "10%", left: "2%", transform: "rotate(-20deg)" }}>
        <div className="rounded-full bg-[#D8DAF0] dark:bg-[#2A2A4A] opacity-70" style={{ width: 185, height: 56 }} />
      </div>
      {/* Left-middle */}
      <div aria-hidden="true" className="absolute pointer-events-none" style={{ zIndex: 0, top: "38%", left: "-1%", transform: "rotate(70deg)" }}>
        <div className="rounded-full bg-[#D8DAF0] dark:bg-[#2A2A4A] opacity-70" style={{ width: 195, height: 58 }} />
      </div>
      {/* Top-left accent */}
      <div aria-hidden="true" className="absolute pointer-events-none" style={{ zIndex: 0, top: "5%", left: "8%", transform: "rotate(25deg)" }}>
        <div className="rounded-full bg-[#D8DAF0] dark:bg-[#2A2A4A] opacity-70" style={{ width: 180, height: 55 }} />
      </div>

      {/* ── Two-column layout ── */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24
                   flex flex-col md:flex-row items-center gap-12 md:gap-6"
        style={{ zIndex: 1 }}
      >

        {/* ── LEFT: Text — full width mobile, half desktop ── */}
        <div className="w-full md:w-1/2 flex flex-col gap-7 text-center md:text-left">

          <h1
            className="leading-[1.18] tracking-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            {/* Line 1 */}
            <span
              className="block font-normal text-[#8888AA] dark:text-[#8888AA]"
            >
              A single platform to
            </span>
            {/* Line 2 */}
            <span className="block">
              <span className="font-bold text-[#1a1a2e] dark:text-white">
                manage{" "}
              </span>
              <span className="font-normal text-[#8888AA] dark:text-[#8888AA]">
                every part of
              </span>
            </span>
            {/* Line 3 */}
            <span className="block">
              <span className="font-normal text-[#8888AA] dark:text-[#8888AA]">
                your{" "}
              </span>
              <span className="font-bold text-[#1a1a2e] dark:text-white">
                legal work
              </span>
            </span>
          </h1>

          <p
            className="leading-relaxed max-w-md mx-auto md:mx-0 text-[#6b7a99] dark:text-[#8888AA]"
            style={{ fontSize: 16 }}
          >
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication – all in one system.
          </p>
        </div>

        {/* ── RIGHT: Floating Cards — hidden on mobile ── */}
        <div
          className="hidden md:flex w-full md:w-1/2 relative mx-auto"
          style={{ height: "460px", maxWidth: "500px" }}
        >

          {/* Billing — blue pill, upper center-right */}
          <FloatingCard
            color="blue"
            rotation={-8}
            icon={<ReceiptText size={20} />}
            label="Billing"
            delay="0s"
            style={{ top: "55px", left: "80px" }}
          />

          {/* Matters — orange pill, middle-left */}
          <FloatingCard
            color="orange"
            rotation={6}
            icon={<Gavel size={20} />}
            label="Matters"
            delay="0.4s"
            style={{ top: "160px", left: "20px" }}
          />

          {/* Tasks — dark pill, lower-center */}
          <FloatingCard
            color="dark"
            rotation={-3}
            icon={<CheckSquare size={20} />}
            label="Tasks"
            delay="0.8s"
            style={{ top: "270px", left: "100px" }}
          />

          {/* Documents — dark pill, lower-right */}
          <FloatingCard
            color="dark"
            rotation={5}
            icon={<FileText size={20} />}
            label="Documents"
            delay="1.2s"
            style={{ top: "185px", right: "10px" }}
          />

          {/* John Doe Portal — rectangular card, bottom-center */}
          <FloatingCard
            color="portal"
            rotation={-3}
            label="John Doe - Portal"
            variant="portal"
            delay="1.6s"
            style={{ bottom: "20px", left: "110px" }}
          />

        </div>
      </div>
    </section>
  );
}
