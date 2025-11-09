import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho igual ao da tela Início */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>BOB FERRAMENTAS</Text>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.text}>Sem Relatório</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EBF0", // mesmo fundo da tela Início
  },
  header: {
    backgroundColor: "#7ACEFA",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    color: "#1E293B",
  },
});
