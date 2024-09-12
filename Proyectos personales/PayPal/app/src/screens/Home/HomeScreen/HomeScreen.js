import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import { Layout } from "../../../layouts";
import {
  Menu,
  Separator,
  TransactionHistory,
  BalanceSimple,
} from "../../../components/Shared";
import { styles } from "./HomeScreen.styles";

export function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Layout.Basic>
        <Menu user />
        <Separator height={30} />
        <BalanceSimple />
        <Separator height={30} />
        <View style={styles.full}>
          <TransactionHistory refreshing={refreshing} limit={1000} />
        </View>
      </Layout.Basic>
    </ScrollView>
  );
}
