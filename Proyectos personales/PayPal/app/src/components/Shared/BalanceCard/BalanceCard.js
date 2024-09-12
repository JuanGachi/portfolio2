import { View, Text, Image } from "react-native";
import { useAuth } from "../../../hooks";
import logo from "../../../../assets/logo.png";
import { styles } from "./BalanceCard.styles";

export function BalanceCard() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={logo} style={styles.logo} />
          <Text>Saldo de PayPal</Text>
        </View>
        <Text style={styles.headerBalance}>{user.wallet.balance} EUR</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{user.wallet.balance} EUR</Text>
      </View>
    </View>
  );
}
