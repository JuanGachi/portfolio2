import { View } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../utils";
import { styles } from "./Menu.styles";

export function Menu(props) {
  const { user = false, recharge = false } = props;
  const { navigate } = useNavigation();

  const goToAccount = () => {
    navigate(screens.account.root);
  };

  const goToRecharge = () => {
    navigate(screens.tab.wallet.root, {
      screen: screens.tab.wallet.amountRechargeScreen,
    });
  };

  return (
    <View style={styles.container}>
      <View />

      <View style={styles.right}>
        {user && (
          <Icon
            type="font-awesome"
            name="user"
            color="#003087"
            style={styles.icon}
            onPress={goToAccount}
          />
        )}
        {recharge && (
          <Icon
            type="font-awesome"
            name="plus"
            color="#003087"
            style={styles.icon}
            onPress={goToRecharge}
          />
        )}
      </View>
    </View>
  );
}
