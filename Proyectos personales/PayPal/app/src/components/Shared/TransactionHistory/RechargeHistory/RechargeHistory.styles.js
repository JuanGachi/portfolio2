import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 26,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#003087",
    borderRadius: 50,
    padding: 5,
    marginRight: 15,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  date: {
    opacity: 0.6,
    marginTop: 5,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  amount: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
  },
});
