import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/shared/lib/classNames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          {
            "bg-primary text-white hover:bg-primary/90": variant === "primary",
            "bg-secondary text-white hover:bg-secondary/90":
              variant === "secondary",
            "border border-primary text-primary hover:bg-primary/10":
              variant === "outline",
            "px-3 py-1.5 text-sm": size === "sm",
            "px-4 py-2 text-base": size === "md",
            "px-6 py-3 text-lg": size === "lg",
            "opacity-50 cursor-not-allowed": disabled,
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
