import { View, Text, Pressable } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../../utils";
import { styles } from "./UserItem.styles";

export function UserItem(props) {
  const { user } = props;
  const { navigate } = useNavigation();

  const onPress = () => {
    navigate(screens.global.root, {
      screen: screens.global.sendMoneyUserScreen,
      params: {
        userId: user.id,
      },
    });
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon
        name="person"
        color="#fff"
        size={40}
        containerStyle={styles.iconContainer}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {user.first_name && user.last_name
            ? `${user.first_name} ${user.last_name}`
            : "..."}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </Pressable>
  );
}
