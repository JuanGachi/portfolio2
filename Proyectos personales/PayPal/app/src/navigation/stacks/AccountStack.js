import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AccountScreen,
  ChangeFullNameScreen,
  ChangeEmailScreen,
  ChangePasswordScreen,
} from "../../screens/Account";
import { screens } from "../../utils";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.account.accountScreen}
        component={AccountScreen}
        options={{
          title: "Perfil",
          headerTintColor: "#fff",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name={screens.account.changeFullNameScreen}
        component={ChangeFullNameScreen}
        options={{
          title: "Editar nombre y apellidos",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name={screens.account.changeEmailScreen}
        component={ChangeEmailScreen}
        options={{
          title: "Editar email",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name={screens.account.changePasswordScreen}
        component={ChangePasswordScreen}
        options={{
          title: "Cambiar contraseña",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
