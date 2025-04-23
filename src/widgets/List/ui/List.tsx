import { useCallback, useEffect, useState } from "react";
import { Loader } from "@/shared/ui/Loader/Loader";
import { ListItem } from "./ListItem/ListItem";
import { Button } from "@/shared/ui/Button/Button";
import { cn } from "@/shared/lib/classNames";
import { useHttpRequest } from "@/shared/lib/hooks/useHttpRequest";
import { ListItemData, ListProps, ListRequestParams } from "../types/inded";

const ITEMS_PER_PAGE = 5;
const MAX_ITEMS = 10;

const generateMockData = (
  page: number,
  itemsPerPage: number
): ListItemData[] => {
  return Array.from({ length: itemsPerPage }, (_, index) => ({
    id: (page - 1) * itemsPerPage + index + 1,
    title: `Item ${(page - 1) * itemsPerPage + index + 1}`,
    description: `Description for item ${
      (page - 1) * itemsPerPage + index + 1
    }`,
  }));
};

export const List = ({ isStarted }: ListProps) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<ListItemData[]>([]);

  const { isLoading, fetchData } = useHttpRequest<ListRequestParams>({
    url: "/api/items",
    params: {
      page,
      limit: ITEMS_PER_PAGE,
    },
  });

  const handleFetchData = useCallback(async () => {
    await fetchData();
    const newItems = generateMockData(page, ITEMS_PER_PAGE);
    setItems((prev) => [...prev, ...newItems]);
  }, [fetchData, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (isStarted) {
      setPage(1);
      setItems([]);
      handleFetchData();
    }
  }, [isStarted]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isStarted && page > 1) {
      handleFetchData();
    }
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isStarted) {
    return (
      <div className="h-full flex justify-center items-center text-gray-500">
        Press Start to load items
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {isLoading && items.length === 0 ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader size="lg" />
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item: ListItemData, index: number) => (
              <div
                key={item.id}
                className={cn(
                  "transition-all duration-300",
                  "animate-fade-in-up",
                  isLoading && index >= items.length - ITEMS_PER_PAGE
                    ? "opacity-50"
                    : "opacity-100"
                )}
              >
                <ListItem item={item} />
              </div>
            ))}
          </div>
          {items.length < MAX_ITEMS && (
            <div className="flex justify-center mt-4">
              <Button
                variant="outline"
                onClick={handleLoadMore}
                disabled={isLoading}
                className="min-w-[120px]"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader size="sm" />
                    <span>Loading...</span>
                  </div>
                ) : (
                  `Load More (${MAX_ITEMS - items.length} left)`
                )}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
