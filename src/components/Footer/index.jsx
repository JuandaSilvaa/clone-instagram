import React from "react";
import { View } from "react-native";
import { ButtonIcon } from "../ButtonIcon";
import { styles } from "./style";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.buttonsFooter}>
        <ButtonIcon source={require("../../assets/icons/home.png")} />
        <ButtonIcon source={require("../../assets/icons/lupa.png")} />
        <ButtonIcon source={require("../../assets/icons/video.png")} />
        <ButtonIcon source={require("../../assets/icons/bolsa.png")} />
        <ButtonIcon source={require("../../assets/icons/user.png")} />
      </View>
    </View>
  );
}
