import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import StoryImg from "../../Mock/images/foto3.jpg";
import StoryAdd from "../../assets/icons/addstory.png";
import { Story } from "../Story";
import { styles } from "./styles";

export default function StorySection() {
  return (
    <View style={styles.containerStory}>
      <ScrollView
        horizontal={true}
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.story}>
          <Image source={StoryImg} style={styles.imagemStory} />
          <Text style={styles.textStory}>Your story</Text>
          <Image source={StoryAdd} style={styles.overlayImage} />
        </View>
        <Story source={require("../../Mock/images/foto2.png")} text="Bruna" />
        <Story source={require("../../Mock/images/foto1.png")} text="Gustavo" />
        <Story source={require("../../Mock/images/foto4.png")} text="Messi" />
        <Story source={require("../../Mock/images/foto5.png")} text="Melissa" />
        <Story source={require("../../Mock/images/foto6.png")} text="Rodrigo" />
        <Story source={require("../../Mock/images/foto7.png")} text="Ana" />
      </ScrollView>
      <View />
    </View>
  );
}
