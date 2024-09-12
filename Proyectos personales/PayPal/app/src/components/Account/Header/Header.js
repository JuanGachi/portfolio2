import { ImageBackground } from "react-native";
import { Avatar } from "@rneui/themed";
import { useAuth } from "../../../hooks";
import bgImage from "../../../../assets/blue-bg.jpg";
import { styles } from "./Header.styles";

export function Header() {
  const { user } = useAuth();

  const letters =
    user.first_name && user.last_name
      ? `${user.first_name.slice(0, 1)}${user.last_name.slice(0, 1)}`
      : user.email.slice(0, 2);

  return (
    <ImageBackground source={bgImage} style={styles.container}>
      <Avatar
        title={letters}
        size={120}
        rounded
        containerStyle={styles.avatarContainer}
        titleStyle={styles.avatarTitle}
      />
    </ImageBackground>
  );
}
