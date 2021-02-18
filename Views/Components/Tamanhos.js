import React from "react";
import { View, Text } from "react-native";
import { css } from "../../assets/css/Css";

export default function Tamanhos(props) {
  return (
    <View
      style={[
        css.containerTamanhos,
        { backgroundColor: props.bgColor || "#fff" },
      ]}
    >
      <Text style={[css.textTamanhos, { color: props.color || "#c9c" }]}>
        {props.children}
      </Text>
    </View>
  );
}
