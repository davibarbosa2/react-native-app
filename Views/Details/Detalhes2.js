import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { css } from "../../assets/css/Css";
import Cores from "../Components/Cores";
import Tamanhos from "../Components/Tamanhos";
import Button from "../Components/ButtonComprar";
import Footer from "../Components/Footer";

export default function Detalhes({ navigation }) {
  navigation.setOptions({
    headerTitle: "Tênis 3ST.004",
  });

  return (
    <ScrollView style={css.containerDetalhe}>
      <Image
        source={require("../../assets/images/tenis2.webp")}
        style={css.imgDetalhe}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[css.titleDetalhe, { fontSize: 22 }]}>R$549,99</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[css.titleDetalhe, { fontSize: 30 }]}>
            Tênis 3ST.004
          </Text>
        </View>

        <View style={css.coresDetalhe}>
          <Cores color="#000" />
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
          <Text style={css.textTitleDetalhes}> Tênis 3ST.004</Text>
          <Text style={css.descricaoDetalhes}>
            Alta responsividade da entressola Boost. Um tênis de skate que
            oferece desempenho excepcional. Produzido com insights da equipe da
            adidas Skateboarding, este tênis tem entressola Boost com
            amortecimento energizado e um clipe moldado no calcanhar para maior
            estabilidade.
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 25 }}>
            - Categoria: Originals
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 25 }}>
            - Material : Adiprene
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
