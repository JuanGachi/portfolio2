import { SafeAreaView, StatusBar } from "react-native";
import { styles } from "./BasicLayout.styles";

export function BasicLayout(props) {
  const { children } = props;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </>
  );
}
