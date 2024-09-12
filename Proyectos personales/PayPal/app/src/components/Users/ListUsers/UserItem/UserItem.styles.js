import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 26,
    marginBottom: 10,
    borderRadius: 10,
  },
  iconContainer: {
    backgroundColor: "#003087",
    borderRadius: 50,
    padding: 5,
    marginRight: 15,
  },
  infoContainer: {
    paddingRight: 70,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  },
  email: {
    opacity: 0.6,
  },
});
