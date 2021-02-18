import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { css } from "../../assets/css/Css";
import Produtos from "../Produtos";

export default function Footer() {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Inter_900Black",
          marginVertical: "2%",
          paddingHorizontal: "2%",
        }}
      >
        VEJA OUTROS PRODUTOS
      </Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Produtos
              img={require("../../assets/images/tenis1.webp")}
              cost="399,90"
            >
              Adidas Originals v1.0
            </Produtos>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Produtos
              img={require("../../assets/images/tenis4.webp")}
              cost="399,90"
            >
              Chuteira Predator Freak.3 Society
            </Produtos>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Produtos
              img={require("../../assets/images/tenis2.webp")}
              cost="299,90"
            >
              Adidas Originals v2.0 Preto 100% skateBoarding
            </Produtos>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
