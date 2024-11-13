import { TextInput } from "react-native";
import { styles } from "./style";

interface PropsInput {
  placeHolder: string;
  valueInput: string;
  handleFunctionInput: (value: string) => void;
  secureTextEntry?: boolean;
}

export const Input = ({
  placeHolder,
  valueInput,
  handleFunctionInput,
  secureTextEntry,
}: PropsInput) => {
  return (
    <TextInput
      onChangeText={handleFunctionInput}
      style={styles.input}
      placeholder={placeHolder}
      placeholderTextColor="#000"
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      value={valueInput}
    />
  );
};
