"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SESSION_KEY = "hm-intro-shown";

const CANVAS = { width: 386, height: 546 };
const BARS = {
  left: { x: 9, y: 8, width: 55, height: 530 },
  middle: { x: 165, y: 172, width: 56, height: 216 },
  right: { x: 319, y: 8, width: 59, height: 530 },
} as const;

const STAGE_WIDTH = 108;
const SCALE = STAGE_WIDTH / CANVAS.width;
const STAGE_HEIGHT = CANVAS.height * SCALE;

const ease = [0.16, 1, 0.3, 1] as const;

function barStyle(bar: { x: number; y: number; width: number; height: number }) {
  return {
    left: bar.x * SCALE,
    top: bar.y * SCALE,
    width: bar.width * SCALE,
    height: bar.height * SCALE,
  };
}

function playRevealTone() {
  try {
    const AudioContextCtor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextCtor) return;

    const ctx = new AudioContextCtor();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(220, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.5);

    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.11, ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.65);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.7);
    osc.onended = () => {
      ctx.close().catch(() => {});
    };
  } catch {
    // Autoplay blocked or Web Audio unsupported — fail silently, this is decorative.
  }
}

export function LoadingScreen() {
  const [phase, setPhase] = useState<"hidden" | "in" | "out">("hidden");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    sessionStorage.setItem(SESSION_KEY, "1");

    const holdTime = reduced ? 150 : 2000;
    const exitTime = reduced ? 200 : 650;
    const soundDelay = reduced ? 0 : 850;

    const showTimer = setTimeout(() => {
      setReduced(reduced);
      setPhase("in");
    }, 0);
    const soundTimer = setTimeout(() => {
      if (!reduced) playRevealTone();
    }, soundDelay);
    const exitTimer = setTimeout(() => setPhase("out"), holdTime);
    const removeTimer = setTimeout(() => setPhase("hidden"), holdTime + exitTime);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(soundTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = phase === "hidden" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "hidden") return null;

  const isIn = phase === "in";

  const sideDuration = reduced ? 0.15 : 0.72;
  const sideExitDuration = reduced ? 0.2 : 0.6;
  const midDuration = reduced ? 0.15 : 0.6;
  const midExitDuration = reduced ? 0.15 : 0.22;

  return (
    <motion.div
      role="presentation"
      aria-hidden="true"
      style={{ pointerEvents: phase === "out" ? "none" : "auto" }}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-background"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isIn ? 1 : 0,
        scale: isIn ? 1 : 1.02,
        filter: isIn ? "blur(0px)" : "blur(6px)",
      }}
      transition={{ duration: reduced ? 0.2 : 0.65, ease }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(232,184,75,0.16), transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isIn ? 1 : 0 }}
        transition={{ duration: reduced ? 0.1 : 1.1, ease }}
      />

      <div className="flex flex-col items-center gap-7" style={{ perspective: 900 }}>
        <div className="relative" style={{ width: STAGE_WIDTH, height: STAGE_HEIGHT }}>
          <motion.div
            className="absolute"
            style={barStyle(BARS.left)}
            initial={{ opacity: 0, x: -46, y: -34, rotate: -14, scale: 0.75 }}
            animate={
              isIn
                ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }
                : { opacity: 0, x: -170, y: -6, rotate: -6, scale: 1.05 }
            }
            transition={{
              duration: isIn ? sideDuration : sideExitDuration,
              delay: isIn ? 0 : 0.05,
              ease,
            }}
          >
            <Image src="/brand/logo-bar-left.png" alt="" fill priority sizes={`${STAGE_WIDTH}px`} />
          </motion.div>

          <motion.div
            className="absolute"
            style={barStyle(BARS.right)}
            initial={{ opacity: 0, x: 46, y: -34, rotate: 14, scale: 0.75 }}
            animate={
              isIn
                ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }
                : { opacity: 0, x: 170, y: -6, rotate: 6, scale: 1.05 }
            }
            transition={{
              duration: isIn ? sideDuration : sideExitDuration,
              delay: isIn ? 0 : 0.05,
              ease,
            }}
          >
            <Image src="/brand/logo-bar-right.png" alt="" fill priority sizes={`${STAGE_WIDTH}px`} />
          </motion.div>

          <motion.div
            className="absolute"
            style={barStyle(BARS.middle)}
            initial={{ opacity: 0, y: 34, scale: 0.6 }}
            animate={
              isIn
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 10, scale: 0.7 }
            }
            transition={{
              duration: isIn ? midDuration : midExitDuration,
              delay: isIn ? (reduced ? 0 : 0.16) : 0,
              ease,
            }}
          >
            <Image src="/brand/logo-bar-middle.png" alt="" fill priority sizes={`${STAGE_WIDTH}px`} />
          </motion.div>

          {!reduced && (
            <div
              className="hm-sweep absolute inset-0"
              style={{
                maskImage: "url(/brand/logo-mark.png)",
                WebkitMaskImage: "url(/brand/logo-mark.png)",
              }}
            />
          )}
        </div>

        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={isIn ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
          transition={{
            delay: isIn ? (reduced ? 0 : 0.78) : 0,
            duration: reduced ? 0.15 : 0.5,
            ease,
          }}
        >
          <div className="flex flex-col items-center leading-none">
            <span className="font-display text-xl font-semibold tracking-[0.32em] text-foreground">
              HIVE
            </span>
            <span className="text-[0.65rem] font-medium tracking-[0.45em] text-gold-500 mt-1.5">
              METRIC
            </span>
          </div>
          <motion.span
            className="block h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isIn ? 1 : 0 }}
            transition={{
              delay: isIn ? (reduced ? 0 : 0.98) : 0,
              duration: reduced ? 0.1 : 0.6,
              ease,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
