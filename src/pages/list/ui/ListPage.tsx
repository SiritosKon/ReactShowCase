import { AppRoutes } from "@/shared/config/route";
import { Controls } from "./Controls/Controls";
import { List } from "@/widgets/List/ui/List";
import { useState } from "react";

export const ListPage = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleReset = () => {
    setIsStarted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-3">
            <Controls onStart={handleStart} onReset={handleReset} />
          </div>

          <div className="lg:col-span-9 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            <h2 className="text-xl font-semibold mb-4">List</h2>
            <List isStarted={isStarted} />
          </div>
        </div>
      </div>
    </div>
  );
};

ListPage.routeName = AppRoutes.LIST;
