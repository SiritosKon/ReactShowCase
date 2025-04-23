import { cn } from "@/shared/lib/classNames";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Loader = ({ className, size = "md" }: LoaderProps) => {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-4 border-gray-200 border-t-primary",
        {
          "w-6 h-6 border-2": size === "sm",
          "w-8 h-8 border-3": size === "md",
          "w-12 h-12 border-4": size === "lg",
        },
        className
      )}
    />
  );
};
