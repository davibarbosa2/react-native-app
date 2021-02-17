import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#191919",
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
});

export { css };
