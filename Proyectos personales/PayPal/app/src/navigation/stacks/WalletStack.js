import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  WalletScreen,
  AmountRechargeScreen,
  RechargeScreen,
} from "../../screens/Wallet";
import { screens } from "../../utils";

const Stack = createNativeStackNavigator();

export function WalletStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.tab.wallet.walletScreen}
        component={WalletScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.tab.wallet.amountRechargeScreen}
        component={AmountRechargeScreen}
        options={{ title: "Introduce el importe", headerTransparent: true }}
      />
      <Stack.Screen
        name={screens.tab.wallet.rechargeScreen}
        component={RechargeScreen}
        options={{ title: "Recargar dinero", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
