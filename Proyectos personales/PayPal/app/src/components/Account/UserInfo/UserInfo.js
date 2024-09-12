import { View, Text } from "react-native";
import { useAuth } from "../../../hooks";
import { Separator } from "../../../components/Shared";
import { styles } from "./UserInfo.styles";

export function UserInfo() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{`${user.first_name} ${user.last_name}`}</Text>
      <Separator height={6} />
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
}
