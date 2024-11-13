import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  story: {
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  textStory: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    color: "#000000",
    fontWeight: "400",
  },

  overlayImage: {
    position: "absolute",
    width: 62,
    height: 62,
    transform: [{ translateX: 0 }, { translateY: -11 }],
  },

  imagemStory: {
    width: 58,
    height: 58,
    borderRadius: 100,
  },
});
