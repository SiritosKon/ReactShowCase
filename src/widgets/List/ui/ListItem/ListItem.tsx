import { memo, useState } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { cn } from "@/shared/lib/classNames";

interface ListItemProps {
  item: {
    id: number;
    title: string;
    description: string;
  };
}

export const ListItem = memo(({ item }: ListItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
        </div>
        <Button size="sm" variant="outline" onClick={handleToggle}>
          {isExpanded ? "Collapse" : "Expand"}
        </Button>
      </div>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <p>Additional information for {item.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              ID: {item.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
