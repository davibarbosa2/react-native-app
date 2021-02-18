import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { css } from "../assets/css/Css";
import { MaterialIcons } from "@expo/vector-icons";
import Produtos from "./Produtos";

export default function Loja({ navigation }) {
  return (
    <View style={css.containerLoja}>
      <View style={css.headerLoja}>
        <Image
          source={require("../assets/images/banner-adidas2.jpg")}
          style={[css.headerLoja, { height: 150 }]}
        />

        <View style={css.textContainer}>
          <Text style={css.textHeader}>TENIS</Text>
          <Text style={[css.textHeader, { color: "#cececf" }]}>-</Text>
          <Text style={[css.textHeader, { color: "#cececf" }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons name="filter-list" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={css.line} />

      <ScrollView style={css}>
        <Text style={[css.textHeader, { marginTop: 15, marginBottom: 15 }]}>
          LANÇAMENTOS
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Produtos
            onClick={() => navigation.navigate("Detalhes1")}
            img={require("../assets/images/tenis1.webp")}
            cost="R$399,90"
          >
            Originals Tênis 3MC
          </Produtos>
          <Produtos
            onClick={() => navigation.navigate("Detalhes2")}
            img={require("../assets/images/tenis2.webp")}
            cost="R$299,90"
          >
            Adidas Originals v2.0 Preto 100% skateBoarding
          </Produtos>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Produtos
            onClick={() => navigation.navigate("Detalhes3")}
            img={require("../assets/images/tenis3.webp")}
            cost="R$999,99"
          >
            Tênis Ultraboost 21
          </Produtos>
          <Produtos
            onClick={() => navigation.navigate("Detalhes4")}
            img={require("../assets/images/tenis4.webp")}
            cost="R$399,99"
          >
            Chuteira Predator Freak.3 Society
          </Produtos>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Produtos
            onClick={() => navigation.navigate("Detalhes5")}
            img={require("../assets/images/tenis5.webp")}
            cost="R$799,99"
          >
            Tênis NMD_R1 Spectoo
          </Produtos>
          <Produtos
            onClick={() => navigation.navigate("Detalhes6")}
            img={require("../assets/images/tenis6.webp")}
            cost="R$499,90"
          >
            Sandálias Pharrell Williams HU Slides
          </Produtos>
        </View>
      </ScrollView>
    </View>
  );
}
