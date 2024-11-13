import { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Logo from "../../assets/icons/logos_instagram.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input/Index";
import { styles } from "./style";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
    console.log("Pegando informações", email, password);
    setEmail("");
    setPassword("");
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.linguagem}>
          <Text style={styles.TextTop}>English</Text>
          <Image source={require("../../assets/icons/Left-Arrow.png")} />
        </View>
        <Image style={styles.logoImg} source={Logo} />
        <Input
          placeHolder="Phone number, email or username"
          valueInput={email}
          handleFunctionInput={handleEmail}
        />
        <View style={styles.passwordContainer}>
          <Input
            placeHolder="Password"
            valueInput={password}
            handleFunctionInput={handlePassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableWithoutFeedback
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Image
              source={
                isPasswordVisible
                  ? require("../../assets/icons/Eye-closed.png")
                  : require("../../assets/icons/Eye-open.png")
              }
              style={styles.eyeIcon}
            />
          </TouchableWithoutFeedback>
        </View>
        <Button
          title="Sign up"
          propsBackgroundColor="#1877F2"
          handleFunction={handleLogin}
        />
        <View style={styles.ContainerText}>
          <Text style={styles.TextUm}>Forget your loginn details?</Text>
          <Text style={styles.TextDois}>Get help logging in.</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
