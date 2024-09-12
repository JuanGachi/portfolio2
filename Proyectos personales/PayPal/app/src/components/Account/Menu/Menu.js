import { View } from "react-native";
import { Icon, ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../hooks";
import { Separator } from "../../Shared";
import { screens } from "../../../utils";
import { styles } from "./Menu.styles";

export function Menu() {
  const { logout } = useAuth();
  const { navigate } = useNavigation();

  const goToChangeFullName = () => {
    navigate(screens.account.root, {
      screen: screens.account.changeFullNameScreen,
    });
  };

  const goToChangeEmail = () => {
    navigate(screens.account.root, {
      screen: screens.account.changeEmailScreen,
    });
  };

  const goToChangePassword = () => {
    navigate(screens.account.root, {
      screen: screens.account.changePasswordScreen,
    });
  };

  return (
    <>
      <View style={styles.container}>
        <ListItem bottomDivider onPress={goToChangeFullName}>
          <Icon name="person" color="#003087" />
          <ListItem.Content>
            <ListItem.Title>Nombre y apellidos</ListItem.Title>
            <ListItem.Subtitle>Cambiar nombre y apellidos</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>

        <ListItem bottomDivider onPress={goToChangeEmail}>
          <Icon name="email" color="#003087" />
          <ListItem.Content>
            <ListItem.Title>Correo electronico</ListItem.Title>
            <ListItem.Subtitle>Cambiar correo electronico</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>

        <ListItem bottomDivider onPress={goToChangePassword}>
          <Icon type="font-awesome-5" name="key" color="#003087" />
          <ListItem.Content>
            <ListItem.Title>Contaseña</ListItem.Title>
            <ListItem.Subtitle>Cambiar contraseña</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>

      <Separator height={15} />

      <View style={styles.container}>
        <View>
          <ListItem onPress={logout}>
            <Icon name="logout" color="#004087" />
            <ListItem.Content>
              <ListItem.Title>Cerrar sesión</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      </View>
    </>
  );
}
