import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TextInput,
  View,
} from "react-native";
import { ButtonIcon } from "../ButtonIcon";
import { styles } from "./style";

interface PropsPost {
  textUser: string;
  source: ImageSourcePropType;
  sourceImg: ImageSourcePropType;
  likes?: string;
  conteudo?: string;
  allcoments?: string;
  imgComentario?: ImageSourcePropType;
}

export default function Post({
  source,
  textUser,
  sourceImg,
  likes,
  conteudo,
  allcoments,
  imgComentario,
}: PropsPost) {
  return (
    <View style={styles.containerPost}>
      <View style={styles.linha} />
      <View style={styles.headerPost}>
        <View style={styles.perfilUser}>
          <Image source={source} style={styles.imagenPerfil} />
          <Text style={styles.textUser}>{textUser}</Text>
        </View>
        <ButtonIcon
          source={require("../../assets/icons/trespontos.png")}
          style={{ width: 20, height: 20 }}
        />
      </View>
      <View style={styles.imagemContainer}>
        <Image
          source={sourceImg}
          style={styles.imagenPost}
          resizeMode="cover"
        />
      </View>
      <View style={styles.botoesContainer}>
        <View style={styles.botoesEsquerda}>
          <ButtonIcon source={require("../../assets/icons/heart.png")} />
          <ButtonIcon
            source={require("../../assets/icons/comentario.png")}
            style={{ width: 24, height: 24 }}
          />
          <ButtonIcon
            source={require("../../assets/icons/compartilhar.png")}
            style={{ width: 27, height: 25 }}
          />
        </View>
        <ButtonIcon source={require("../../assets/icons/salvar.png")} />
      </View>
      <View style={styles.textPost}>
        <Text style={styles.likes}>{likes}</Text>
        <Text style={styles.conteudo}>{conteudo}</Text>
        <View style={styles.allComentsContainer}>
          <Text>{allcoments}</Text>
        </View>
      </View>
      <View style={styles.comentarioContainer}>
        <View style={styles.comentarioUser}>
          <Image source={imgComentario} style={styles.imagComentario} />
          <TextInput
            style={styles.input}
            placeholder="Add a comment..."
            placeholderTextColor="#525151"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.icones}>
          <Text>❤️</Text>
          <Text>🙌</Text>
          <Image
            style={styles.iconeAdd}
            source={require("../../assets/icons/addnew.png")}
          />
        </View>
      </View>
    </View>
  );
}
