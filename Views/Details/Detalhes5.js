import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { css } from "../../assets/css/Css";
import Cores from "../Components/Cores";
import Tamanhos from "../Components/Tamanhos";
import Button from "../Components/ButtonComprar";
import Footer from "../Components/Footer";

export default function Detalhes({ navigation }) {
  navigation.setOptions({
    headerTitle: "Tênis NMD_R1 Spectoo",
  });

  return (
    <ScrollView style={css.containerDetalhe}>
      <Image
        source={require("../../assets/images/nmdDetalhe.webp")}
        style={css.imgDetalhe}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[css.titleDetalhe, { fontSize: 22 }]}>R$799,99</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[css.titleDetalhe, { fontSize: 30 }]}>
            Tênis NMD_R1 Spectoo
          </Text>
        </View>

        <View style={css.coresDetalhe}>
          <Cores color="#000" />
          <Cores color="#d9d9d9" />
          <Cores color="#fff" />
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Tamanhos bgColor="#17181a" color="#fff">
              40
            </Tamanhos>
            <Tamanhos>39</Tamanhos>
            <Tamanhos>35</Tamanhos>
            <Tamanhos>37</Tamanhos>
            <Tamanhos>42</Tamanhos>
            <Tamanhos>44</Tamanhos>
            <Tamanhos>38</Tamanhos>
          </ScrollView>
        </View>

        <View style={css.textDetalhes}>
          <Text style={css.textTitleDetalhes}> Tênis NMD_R1 Spectoo</Text>
          <Text style={css.descricaoDetalhes}>
            Desde o início, a franquia adidas NMD tem se concentrado no futuro.
            É sobre evolução. É sobre progresso. Inspirado na transmissão
            contínua de dados do nosso mundo conectado, o tênis adidas NMD_R1
            Spectoo traz um toque moderno ao estilo clássico do NMD. O arrojado
            cabedal de malha é marcado pela estampa escrita, e a lateral
            translúcida faz uma referência sutil à transição do explorador
            urbano para o viajante digital. Elástica e responsiva, a entressola
            Boost adidas é incrivelmente confortável, do primeiro ao último
            passo.
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 25 }}>
            - Categoria: Futebol
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 25 }}>
            - Material : Solado de borracha
          </Text>
        </View>

        <Button />
        <View
          style={{
            borderWidth: 1,
            borderBottomColor: "#ddd",
            marginVertical: "2%",
          }}
        />
      </View>

      <Footer />
    </ScrollView>
  );
}
