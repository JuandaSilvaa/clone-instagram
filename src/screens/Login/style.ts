import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  logoImg: {
    width: 175,
    height: 50,
    marginBottom: 10,
  },

  ContainerText: {
    marginTop: 8,
    flexDirection: "row",
  },

  TextTop: {
    fontSize: 12,
    color: "#868686",
  },

  linguagem: {
    marginTop: StatusBar.currentHeight || 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    bottom: "30%",
    height: 30,
    width: 100,
  },

  TextUm: {
    fontSize: 8,
    color: "#6D6D6D",
  },

  TextDois: {
    marginLeft: 2,
    fontSize: 8,
    fontWeight: "500",
    color: "#23244F",
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },

  eyeIcon: {
    position: "absolute",
    top: 28,
    right: 20,
  },
});
