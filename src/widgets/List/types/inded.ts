export interface ListItemData {
  id: number;
  title: string;
  description: string;
}

export interface ListProps {
  isStarted: boolean;
}

export interface ListRequestParams {
  page: number;
  limit: number;
}
