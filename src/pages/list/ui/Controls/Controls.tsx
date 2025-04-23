import { Button } from "@/shared/ui/Button/Button";
import { useState } from "react";

interface ControlsProps {
  onStart?: () => void;
  onReset?: () => void;
}

export const Controls = ({ onStart, onReset }: ControlsProps) => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    onStart?.();
  };

  const handleReset = () => {
    setIsStarted(false);
    onReset?.();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
      <h2 className="text-xl font-semibold mb-4">Controls</h2>
      <div className="space-y-2">
        <Button
          size="lg"
          className="w-full"
          onClick={handleStart}
          disabled={isStarted}
        >
          Start
        </Button>
        <Button
          size="lg"
          className="w-full bg-red-500 hover:bg-red-500/90"
          onClick={handleReset}
          disabled={!isStarted}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
