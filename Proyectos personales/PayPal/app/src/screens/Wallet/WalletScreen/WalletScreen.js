import { useCallback, useState } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import { Layout } from "../../../layouts";
import { useAuth } from "../../../hooks";
import {
  Menu,
  Separator,
  BalanceCard,
  TransactionHistory,
} from "../../../components/Shared";
import { styles } from "./WalletScreen.styles";

export function WalletScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const { reloadUser } = useAuth();

  const onRefresh = useCallback(() => {
    reloadUser();

    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Layout.Basic>
        <Menu recharge />
        <Separator height={20} />
        <BalanceCard />
        <Separator height={20} />
        <View style={styles.full}>
          <TransactionHistory refreshing={refreshing} />
        </View>
      </Layout.Basic>
    </ScrollView>
  );
}
