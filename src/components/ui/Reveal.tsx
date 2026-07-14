"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const offsets = {
  up: { y: 28 },
  left: { x: -40 },
  right: { x: 40 },
  none: {},
} as const;

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span";
  direction?: keyof typeof offsets;
}) {
  const MotionTag = as === "span" ? motion.span : motion.div;
  const offset = offsets[direction];

  return (
    <MotionTag
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const revealItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={revealItemVariants} className={className}>
      {children}
    </motion.div>
  );
}
