import { cn } from "@/shared/lib/classNames";
import { Loader } from "../Loader/Loader";

interface PageLoaderProps {
  overlayColor?: string | null;
}

export const PageLoader = ({
  overlayColor = "bg-black/50",
}: PageLoaderProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center",
        overlayColor
      )}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <Loader size="lg" />
      </div>
    </div>
  );
};
