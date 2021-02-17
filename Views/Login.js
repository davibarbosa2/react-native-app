import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
} from "react-native";

import { css } from "../assets/css/Css";

export default function Login({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      }),
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 75,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 85,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 155,
        duration: 100,
      }),
    ]).start();
  }

  return (
    <KeyboardAvoidingView
      style={css.background}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={css.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require("../assets/images/logo.png")}
        />
      </View>

      <Animated.View
        style={[
          css.container,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
        <TextInput
          style={css.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={css.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
          secureTextEntry={true}
        />

        <TouchableOpacity style={css.submitBtn}>
          <Text style={css.submitText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={css.registerBtn}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={css.registerText}>CADASTRE-SE</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
