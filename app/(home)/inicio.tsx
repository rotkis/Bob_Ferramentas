import React from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ferramentas = [
  { id: "1", nome: "Chave de Boca", preco: "R$1,53", imagem: require("../../assets/chave-boca.png") },
  { id: "2", nome: "Chave Inglesa", preco: "R$1,29", imagem: require("../../assets/chave-inglesa.png") },
  { id: "3", nome: "Martelo", preco: "R$2,91", imagem: require("../../assets/martelo.png") },
  { id: "4", nome: "Escada", preco: "R$1,68", imagem: require("../../assets/escada.png") },
  { id: "5", nome: "Alicate", preco: "R$1,99", imagem: require("../../assets/alicate.png") },
  { id: "6", nome: "Serra de Mão", preco: "R$2,29", imagem: require("../../assets/serra.png") },
];

export default function Inicio() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>BOB FERRAMENTAS</Text>
        {/*<Image source={require("../../../assets/toolbox.png")} style={styles.toolbox} />*/}
      </View>

      {/* Campo de pesquisa */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#64748B" style={{ marginLeft: 10 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquise Aqui!"
          placeholderTextColor="#94A3B8"
        />
      </View>

      <Text style={styles.sectionTitle}>Ferramentas Populares</Text>

      {/* Lista de ferramentas */}
      <FlatList
        data={ferramentas}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardPrice}>{item.preco}</Text>

            <View style={styles.cardActions}>
              <Ionicons name="remove-circle-outline" size={20} color="#1E293B" />
              <Text>1</Text>
              <Ionicons name="add-circle-outline" size={20} color="#1E293B" />
              <Ionicons name="cart-outline" size={22} color="#1E293B" style={{ marginLeft: 5 }} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8EBF0" },
  header: {
    backgroundColor: "#7ACEFA",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: { width: 50, height: 50, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: "700", color: "#1E293B", marginBottom: 10 },
  toolbox: { width: 80, height: 80 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    margin: 15,
    paddingHorizontal: 5,
    elevation: 2,
  },
  searchInput: { flex: 1, padding: 10, fontSize: 15 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginHorizontal: 15,
    marginBottom: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#FACC15",
    borderRadius: 15,
    padding: 10,
    margin: 8,
    alignItems: "center",
  },
  cardImage: { width: 40, height: 40, marginBottom: 8 },
  cardTitle: { fontSize: 14, fontWeight: "600", color: "#1E293B" },
  cardPrice: { fontSize: 13, color: "#1E293B", marginBottom: 6 },
  cardActions: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
});
