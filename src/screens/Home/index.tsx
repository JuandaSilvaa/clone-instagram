import React from "react";
import { FlatList, Image, StatusBar, View } from "react-native";
import Logo from "../../assets/icons/logos_instagram2.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import Footer from "../../components/Footer";
import Post from "../../components/Post";
import StorySection from "../../components/StorySection";
import { DataAPI } from "../../Mock/Data";
import { styles } from "./style";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        data={DataAPI}
        keyExtractor={(dados) => dados.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.content}>
            <Post
              source={item.image}
              sourceImg={item.imagePost}
              textUser={item.name}
              likes={item.likes}
              conteudo={item.conteudo}
              allcoments={item.allcomentarios}
              imgComentario={item.ImageUserComent}
            />
          </View>
        )}
        ListHeaderComponent={
          <>
            <View style={styles.containerHeader}>
              <Image source={Logo} />
              <View style={styles.buttonsHeader}>
                <ButtonIcon source={require("../../assets/icons/Add.png")} />
                <ButtonIcon source={require("../../assets/icons/heart.png")} />
                <ButtonIcon source={require("../../assets/icons/direct.png")} />
              </View>
            </View>
            <StorySection />
          </>
        }
      />
      <Footer />
    </View>
  );
}
