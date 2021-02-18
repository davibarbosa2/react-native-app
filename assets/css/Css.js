import { StyleSheet, Dimensions } from "react-native";

const css = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 50,
  },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    borderColor: "#000",
    borderWidth: 2,
  },
  submitBtn: {
    backgroundColor: "#fff",
    width: "90%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
    borderColor: "#000",
    borderWidth: 2,
  },
  submitText: {
    color: "#000",
    fontSize: 15,
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  registerBtn: {
    marginTop: 10,
    backgroundColor: "#191919",
    borderRadius: 0,
    width: "90%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    color: "#fff",
    fontFamily: "monospace",
  },
  textoLoja: {
    marginTop: 60,
    fontSize: 25,
    fontFamily: "Inter_900Black",
  },
  containerLoja: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  headerLoja: {
    marginBottom: 8,
  },
  headerLoja: {
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  textHeader: {
    fontFamily: "Inter_900Black",
    fontSize: 22,
    marginHorizontal: "1%",
  },
  line: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2,
  },
  imagemTenis: {
    width: 175,
    height: 175,
  },
  textTenis: {
    fontSize: 16,
  },
  containerTenis: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerDetalhe: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  imgDetalhe: {
    width: "100%",
    height: 400,
  },
  titleDetalhe: {
    fontFamily: "Inter_900Black",
    paddingHorizontal: "2%",
  },
  coresDetalhe: {
    flexDirection: "row",
    marginVertical: "7%",
  },
  containerCores: {
    width: Dimensions.get("window").width * 0.05,
    height: Dimensions.get("window").width * 0.05,
    borderRadius: (Dimensions.get("window").width * 0.05) / 2,
    marginHorizontal: "2.5%",
    elevation: 5,
  },
  containerTamanhos: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "#e6e6e6",
    borderWidth: 3,
    marginHorizontal: 10,
  },
  textTamanhos: {
    color: "#fff",
    fontSize: 18,
  },
  textTitleDetalhes: {
    fontSize: 22,
    marginVertical: "2%",
  },
  descricaoDetalhes: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#17181a",
    marginVertical: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 17,
  },
});

export { css };
