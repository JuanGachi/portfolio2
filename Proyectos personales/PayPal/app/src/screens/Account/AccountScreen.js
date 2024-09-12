import { View } from "react-native";
import { Separator } from "../../components/Shared";
import { Menu, Header, UserInfo } from "../../components/Account";

export function AccountScreen() {
  return (
    <View>
      <Header />
      <UserInfo />
      <Separator height={15} />
      <Menu />
    </View>
  );
}
