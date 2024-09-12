import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../hooks";
import { screens } from "../../../utils";
import logo from "../../../../assets/logo.png";
import { styles } from "./BalanceSimple.styles";

export function BalanceSimple() {
  const { user } = useAuth();
  const { navigate } = useNavigation();

  const goToWallet = () => {
    navigate(screens.tab.wallet.root);
  };

  return (
    <Pressable onPress={goToWallet} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.title}>{user.wallet.balance} EUR</Text>
        <Text style={styles.description}>Saldo de PayPal</Text>
      </View>
    </Pressable>
  );
}
