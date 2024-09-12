import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SendMoneyUserScreen } from "../../screens/Global";
import { screens } from "../../utils";

const Stack = createNativeStackNavigator();

export function GlobalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.global.sendMoneyUserScreen}
        component={SendMoneyUserScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
