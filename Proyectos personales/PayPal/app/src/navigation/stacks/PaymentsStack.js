import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaymentsScreen } from "../../screens/Payments";
import { screens } from "../../utils";

const Stack = createNativeStackNavigator();

export function PaymentsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.tab.payments.paymentScreen}
        component={PaymentsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
