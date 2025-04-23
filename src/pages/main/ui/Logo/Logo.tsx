import { cn } from "@/shared/lib/classNames";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className, size = "md" }: LogoProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        "animate-fade-in-up",
        {
          "text-2xl": size === "sm",
          "text-4xl": size === "md",
          "text-6xl": size === "lg",
        },
        className
      )}
    >
      <span className="font-bold text-primary">Show</span>
      <span className="font-light">Case</span>
    </div>
  );
};
