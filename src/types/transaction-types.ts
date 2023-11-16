export interface TransactionProps {
  boughtHistory?: TransactionHistories[];
  soldHistory?: TransactionHistories[];
  activeBought: boolean;
  activeSold: boolean;
}
export interface TransactionHistories {
  id: number;
  name: string;
  type: string;
  date: number;
}
export interface HistoryItemsProps {
  historyTransaction: TransactionHistories[] | undefined;
}
