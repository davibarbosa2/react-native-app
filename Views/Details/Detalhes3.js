import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { css } from "../../assets/css/Css";
import Cores from "../Components/Cores";
import Tamanhos from "../Components/Tamanhos";
import Button from "../Components/ButtonComprar";
import Footer from "../Components/Footer";

export default function Detalhes({ navigation }) {
  navigation.setOptions({
    headerTitle: "Tênis Ultraboost 21",
  });

  return (
    <ScrollView style={css.containerDetalhe}>
      <Image
        source={require("../../assets/images/detalhe-tenis.webp")}
        style={css.imgDetalhe}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[css.titleDetalhe, { fontSize: 22 }]}>R$999,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[css.titleDetalhe, { fontSize: 30 }]}>
            Tênis Ultraboost 21
          </Text>
        </View>

        <View style={css.coresDetalhe}>
          <Cores color="#2379f4" />
          <Cores color="#fb6e53" />
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
          </ScrollView>
        </View>

        <View style={css.textDetalhes}>
          <Text style={css.textTitleDetalhes}> Tênis Ultraboost 21</Text>
          <Text style={css.descricaoDetalhes}>
            A energia era só energia até encontrar o Ultraboost 21 Protótipo
            após protótipo. Inovação atrás de inovação. Testes e mais testes. A
            adidas oferece o ápice da harmonização: peso, amortecimento e
            responsividade na medida certa. Ultraboost 21. Descubra o mais
            incrível retorno de energia.
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 25 }}>
            - Categoria: Running
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 25 }}>
            - Material : Mash
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
