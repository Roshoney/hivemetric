import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 text-black font-medium shadow-[0_1px_0_0_rgba(255,255,255,0.35)_inset,0_8px_24px_-8px_rgba(232,184,75,0.55)] hover:brightness-110 active:brightness-95",
  secondary:
    "bg-elevated border border-border-strong text-foreground hover:border-gold-500/60 hover:bg-elevated-2",
  ghost: "text-foreground/80 hover:text-foreground",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 whitespace-nowrap ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
