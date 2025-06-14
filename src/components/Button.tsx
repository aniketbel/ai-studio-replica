
import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center rounded-full font-medium focus:outline-none focus-visible:ring transition-all";
const sizes = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-7 py-3 text-lg",
};
const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200 shadow-sm",
  secondary:
    "bg-gray-100 text-blue-700 hover:bg-gray-200 focus-visible:ring-blue-200 border border-blue-100",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      className={cn(
        base,
        sizes[size],
        variants[variant],
        "duration-150",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
