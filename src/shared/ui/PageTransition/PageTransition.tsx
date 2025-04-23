import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/shared/lib/classNames";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className={cn(
        "animate-fade-in",
        "min-h-screen",
        "fixed inset-0",
        "overflow-auto"
      )}
    >
      {children}
    </div>
  );
};
