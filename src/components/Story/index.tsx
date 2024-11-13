import { Image, ImageSourcePropType, Text, View } from "react-native";
import Cicle from "../../assets/icons/circleStory.png";
import { styles } from "./style";

interface PropsButton {
  source: ImageSourcePropType;
  text: string;
}

export const Story = ({ source, text }: PropsButton) => {
  return (
    <View style={styles.story}>
      <Image source={source} style={styles.imagemStory} />
      <Image source={Cicle} style={styles.overlayImage} />
      <Text style={styles.textStory}>{text}</Text>
    </View>
  );
};
