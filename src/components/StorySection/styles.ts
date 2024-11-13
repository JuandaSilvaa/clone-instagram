import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingLeft: 15,
    width: "100%",
  },

  containerStory: {
    flexDirection: "row",
    marginTop: 15,
  },

  imagemStory: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },

  story: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginTop: 2,
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
    top: "50%",
    left: "50%",
    width: 20,
    height: 20,
    transform: [{ translateX: 12 }, { translateY: -2 }],
  },
});
