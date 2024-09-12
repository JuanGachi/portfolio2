import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { historyCtrl } from "../../../api";
import { HistoryList } from "./HistoryList";

export function TransactionHistory(props) {
  const { refreshing, limit } = props;
  const [history, setHistory] = useState(null);

  useFocusEffect(
    useCallback(() => {
      getHistory();
      return () => getHistory();
    }, [refreshing])
  );

  const getHistory = async () => {
    try {
      const response = await historyCtrl.getAll(limit);
      setHistory(response);
    } catch (error) {
      console.error(error);
    }
  };

  return <HistoryList history={history} />;
}
