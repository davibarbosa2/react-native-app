import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { css } from "../../assets/css/Css";
import Cores from "../Components/Cores";
import Tamanhos from "../Components/Tamanhos";
import Button from "../Components/ButtonComprar";
import Footer from "../Components/Footer";

export default function Detalhes({ navigation }) {
  navigation.setOptions({
    headerTitle: "Tênis 3MC",
  });

  return (
    <ScrollView style={css.containerDetalhe}>
      <Image
        source={require("../../assets/images/tenis1.webp")}
        style={css.imgDetalhe}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[css.titleDetalhe, { fontSize: 22 }]}>R$299,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[css.titleDetalhe, { fontSize: 30 }]}>
            Originals Tênis 3MC
          </Text>
        </View>

        <View style={css.coresDetalhe}>
          <Cores color="#ddd" />
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
          <Text style={css.textTitleDetalhes}> Originals Tênis 3MC</Text>
          <Text style={css.descricaoDetalhes}>
            Inspirado no skate, confortável para o ano inteiro Sinônimo de
            skate, o tênis adidas 3MC é um clássico. Por um bom motivo. O solado
            de borracha vulcanizada garante mais aderência e estabilidade. Seu
            design de cano baixo garante um look casual. (Embora você nunca
            tenha pensado em mudar isso.)
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 25 }}>
            - Categoria: Originals
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
