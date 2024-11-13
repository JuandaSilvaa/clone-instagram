import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  containerHeader: {
    paddingTop: StatusBar.currentHeight || 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    paddingHorizontal: 5,
  },

  buttonsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    justifyContent: "space-between",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  linha: {
    marginTop: 5,
    width: "100%",
    height: 1,
    backgroundColor: "#E0E0E0",
  },

  scrollContainer: {
    width: "100%",
  },
});
