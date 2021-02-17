import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { css } from "../assets/css/Css";

export default function Produtos(props) {
  function filterDesc(desc) {
    if (desc.length < 27) {
      return desc;
    }

    return `${desc.substring(0, 22)}...`;
  }

  return (
    <View>
      <TouchableOpacity style={css.containerTenis} onPress={props.onClick}>
        <Image source={props.img} style={css.imagemTenis} />
        <Text style={css.textTenis}>{filterDesc(props.children)}</Text>
        <View opacity={0.4}>
          <Text>{props.cost}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
