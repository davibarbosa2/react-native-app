import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { css } from "../../assets/css/Css";

export default function Button() {
  return (
    <View style={css.containerButton}>
      <TouchableOpacity style={css.button}>
        <Text style={css.textButton}>COMPRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
