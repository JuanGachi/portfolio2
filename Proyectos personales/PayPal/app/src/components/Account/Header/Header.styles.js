import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 160,
    zIndex: 1,
    resizeMode: "cover",
  },
  avatarContainer: {
    position: "absolute",
    bottom: -60,
    left: 16,
    borderWidth: 3,
    borderColor: "#fff",
    backgroundColor: "#003087",
  },
  avatarTitle: {
    textTransform: "uppercase",
  },
});
