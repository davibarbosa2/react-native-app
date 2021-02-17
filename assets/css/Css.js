import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
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
  },
  submitBtn: {
    backgroundColor: "aquamarine",
    width: "90%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  submitText: {
    color: "white",
    fontSize: 15,
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  registerBtn: {
    marginTop: 10,
    backgroundColor: "#191919",
    borderRadius: 7,
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
});

export { css };
