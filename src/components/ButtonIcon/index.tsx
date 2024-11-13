import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

interface PropsButtonIcon {
  source: ImageSourcePropType;
  style?: ImageStyle;
}

export const ButtonIcon = ({ source, style }: PropsButtonIcon) => {
  return (
    <TouchableOpacity activeOpacity={0.2} style={styles.styleButton}>
      <Image source={source} style={style} />
    </TouchableOpacity>
  );
};
