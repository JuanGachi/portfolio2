import { useState } from "react";
import { Text, KeyboardAvoidingView, Platform } from "react-native";
import { Input, Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Layout } from "../../../layouts";
import { useAuth } from "../../../hooks";
import { Separator } from "../../../components/Shared";
import { screens } from "../../../utils";
import { styles } from "./AmountRechargeScreen.styles";

export function AmountRechargeScreen() {
  const [amount, setAmount] = useState();
  const { user } = useAuth();
  const { navigate } = useNavigation();

  const goToPayment = () => {
    if (!amount) return null;

    const amountFinal = parseFloat(amount.replace(",", "."));

    if (amountFinal > 0) {
      navigate(screens.tab.wallet.rechargeScreen, { amount: amountFinal });
    }
  };

  return (
    <>
      <Layout.Basic>
        <Separator height={25} />
        <Input
          placeholder="0,00€"
          keyboardType="numeric"
          autoFocus
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyles}
          onChangeText={(text) => setAmount(text)}
          value={amount}
        />
        <Text style={styles.description}>
          Saldo de PayPal: {user.wallet.balance} EUR (disponible)
        </Text>
      </Layout.Basic>

      <KeyboardAvoidingView
        style={styles.containerButton}
        behavior="padding"
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
      >
        <Button
          title="Siguiente"
          buttonStyle={styles.btn}
          onPress={goToPayment}
        />
      </KeyboardAvoidingView>
    </>
  );
}
