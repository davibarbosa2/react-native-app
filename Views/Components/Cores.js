import React from "react";
import { View } from "react-native";
import { css } from "../../assets/css/Css";

export default function Cores(props) {
  return (
    <View style={[css.containerCores, { backgroundColor: props.color }]}></View>
  );
}
