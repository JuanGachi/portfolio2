import { Text } from "react-native";
import { Layout } from "../../../layouts";
import { ListUsers } from "../../../components/Users";
import { styles } from "./PaymentsScreen.styles";

export function PaymentsScreen() {
  return (
    <Layout.Basic>
      <Text style={styles.title}>Pagos</Text>
      <Text style={styles.subtitle}>Enviar</Text>
      <ListUsers />
    </Layout.Basic>
  );
}
