import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { css } from "../../assets/css/Css";
import Cores from "../Components/Cores";
import Tamanhos from "../Components/Tamanhos";
import Button from "../Components/ButtonComprar";
import Footer from "../Components/Footer";

export default function Detalhes({ navigation }) {
  navigation.setOptions({
    headerTitle: "Sandálias Pharrell Williams HU Slides",
  });

  return (
    <ScrollView style={css.containerDetalhe}>
      <Image
        source={require("../../assets/images/sandalhaDetail.webp")}
        style={css.imgDetalhe}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[css.titleDetalhe, { fontSize: 22 }]}>R$499,99</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[css.titleDetalhe, { fontSize: 30 }]}>
            Sandálias Pharrell Williams HU Slides
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
          <Text style={css.textTitleDetalhes}>
            Sandálias Pharrell Williams HU Slides
          </Text>
          <Text style={css.descricaoDetalhes}>
            O Chancletas Hu é novo para essas características de filtro em nosso
            website, na categoria Unisex. Mas você já pode visualizar as imagens
            acima e ter mais detalhes, para conhecer o produto de diferentes
            ângulos em primeira mão. Se você já experimentou o Chancletas Hu
            antes, deixe um comentário a seguir para nos contar o que você
            achou.
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
