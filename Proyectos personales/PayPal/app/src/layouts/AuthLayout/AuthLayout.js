import { Image, SafeAreaView, StatusBar, View } from "react-native";
import logo from "../../../assets/logo.png";
import { styles } from "./AuthLayout.styles";

export function AuthLayout(props) {
  const { children } = props;

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        {children}
      </SafeAreaView>
    </>
  );
}
