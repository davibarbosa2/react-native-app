import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { css } from "../../assets/css/Css";
import Cores from "../Components/Cores";
import Tamanhos from "../Components/Tamanhos";
import Button from "../Components/ButtonComprar";
import Footer from "../Components/Footer";

export default function Detalhes({ navigation }) {
  navigation.setOptions({
    headerTitle: "Chuteira Predator Freak.3 Society",
  });

  return (
    <ScrollView style={css.containerDetalhe}>
      <Image
        source={require("../../assets/images/chuteiraDetalhe.webp")}
        style={css.imgDetalhe}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[css.titleDetalhe, { fontSize: 22 }]}>R$399,99</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[css.titleDetalhe, { fontSize: 30 }]}>
            Chuteira Predator Freak.3 Society
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
            {" "}
            Chuteira Predator Freak.3 Society
          </Text>
          <Text style={css.descricaoDetalhes}>
            As paredes não conseguem conter você. Os rivais não podem detê-lo.
            Na quadra, é você quem comanda. Libere sua energia imbatível com a
            Predator Freak. Com o design de cano alto de suporte e o solado de
            borracha aderente desta chuteira adidas, você vai dominar o society.
            Os elementos em Demonscale impressos em 3D espalham-se pelo cabedal
            em mesh revestido para ajudar a aumentar o seu domínio de bola.
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
