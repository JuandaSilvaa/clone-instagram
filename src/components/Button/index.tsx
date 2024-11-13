import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface PropsButton {
  title?: string;
  propsBackgroundColor?: string;
  handleFunction: () => void;
}

export const Button = ({
  title,
  propsBackgroundColor,
  handleFunction,
}: PropsButton) => {
  return (
    <TouchableOpacity
      onPress={handleFunction}
      activeOpacity={0.2}
      style={[
        styles.styleButton,
        {
          backgroundColor: propsBackgroundColor ? propsBackgroundColor : "blue",
        },
      ]}
    >
      <Text style={styles.text}>{title ? title : "Entrar"}</Text>
    </TouchableOpacity>
  );
};
