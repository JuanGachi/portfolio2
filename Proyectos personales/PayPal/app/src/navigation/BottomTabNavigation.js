import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { HomeStack, PaymentsStack, WalletStack } from "./stacks";
import { screens } from "../utils";

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: "#646464",
        tabBarActiveTintColor: "#003087",
        tabBarIcon: ({ color, size }) => screenIcon(route, color, size),
      })}
    >
      <Tab.Screen
        name={screens.tab.home.root}
        component={HomeStack}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name={screens.tab.payments.root}
        component={PaymentsStack}
        options={{ title: "Pagos" }}
      />
      <Tab.Screen
        name={screens.tab.wallet.root}
        component={WalletStack}
        options={{ title: "Cartera" }}
      />
    </Tab.Navigator>
  );
}

function screenIcon(route, color, size) {
  let iconName;

  if (route.name === screens.tab.home.root) {
    iconName = "home";
  }
  if (route.name === screens.tab.payments.root) {
    iconName = "euro";
  }
  if (route.name === screens.tab.wallet.root) {
    iconName = "money";
  }

  return <Icon type="font-awesome" name={iconName} color={color} size={size} />;
}
