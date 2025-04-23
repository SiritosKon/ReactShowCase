import { useCallback, useState } from "react";

interface UseHttpRequestOptions<TParams> {
  url: string;
  params: TParams;
}

interface UseHttpRequestResult {
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

const MOCK_DELAY = 1000;

export function useHttpRequest<TParams>({
  url,
  params,
}: UseHttpRequestOptions<TParams>): UseHttpRequestResult {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      console.log("fetchData", {
        url,
        params,
      });
      await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));
    } finally {
      setIsLoading(false);
    }
  }, [params, url]);

  return {
    isLoading,
    fetchData,
  };
}
