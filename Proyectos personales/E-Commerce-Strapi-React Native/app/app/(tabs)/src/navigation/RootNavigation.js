import { AuthScreen } from "../screens/Auth";
import { AppNavigation } from "./AppNavigation";

export function RootNavigation()   {
    const user = "JuanJose";
    return user ? <AppNavigation/> : <AuthScreen />;
  
}