import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerPost: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  headerPost: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  perfilUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  imagenPerfil: {
    width: 37,
    height: 37,
    borderRadius: 100,
  },

  textUser: {
    fontWeight: "500",
  },

  imagemContainer: {
    flex: 1,
    width: "100%",
  },

  imagenPost: {
    width: "100%",
    height: 390,
  },

  botoesContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 25,
  },

  botoesEsquerda: {
    flexDirection: "row",
    gap: 10,
  },

  textPost: {
    width: "100%",
    justifyContent: "flex-start",
    paddingLeft: 10,
    paddingTop: 5,
  },

  likes: {
    fontWeight: "700",
  },

  conteudo: {
    fontWeight: "500",
  },

  allComents: {
    color: "rgba(0, 0, 0, 0.50);",
  },

  allComentsContainer: {
    marginTop: 5,
  },

  comentarioContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 70,
    padding: 10,
  },

  comentarioUser: {
    flexDirection: "row",
    alignItems: "center",
  },

  imagComentario: {
    width: 28,
    height: 28,
    borderRadius: 100,
  },

  input: {
    marginLeft: 10,
    height: 20,
    paddingHorizontal: 6,
    paddingVertical: 1,
    fontSize: 13,
    color: "#000",
    width: 150,
  },

  icones: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingRight: 10,
  },

  iconeAdd: {
    width: 9,
    height: 9,
  },

  linha: {
    marginTop: 5,
    width: "100%",
    height: 1,
    backgroundColor: "#E0E0E0",
  },
});
