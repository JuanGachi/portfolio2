import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30,
  },
  iconContainer: {
    backgroundColor: "#003087",
    borderRadius: 50,
    marginRight: 15,
    padding: 10,
  },
  infoContainer: {
    paddingRight: 70,
    justifyContent: "center",
  },
  name: {
    fontWeight: "600",
    fontSize: 25,
    marginBottom: 2,
  },
  email: {
    opacity: 0.6,
    fontSize: 18,
  },
  inputContainer: {
    borderColor: "transparent",
  },
  inputStyle: {
    fontSize: 30,
    textAlign: "center",
  },
});
