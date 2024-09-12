import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import { AppNavigation } from "./src/navigation";
import { AuthProvider } from "./src/contexts";
import { lightTheme } from "./src/themes";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthProvider>
            <AppNavigation />
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
