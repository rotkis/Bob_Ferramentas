import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ferramentas = [
  { id: "1", nome: "Chave de Boca", preco: "R$ 1,53", imagem: "chave-boca" },
  { id: "2", nome: "Chave Inglesa", preco: "R$ 1,29", imagem: "chave-inglesa" },
  { id: "3", nome: "Martelo", preco: "R$ 2,91", imagem: "martelo" },
  { id: "4", nome: "Escada", preco: "R$ 1,68", imagem: "escada" },
  { id: "5", nome: "Alicate", preco: "R$ 1,99", imagem: "alicate" },
  { id: "6", nome: "Serra de Mão", preco: "R$ 2,29", imagem: "serra" },
];

const imagens = {
  "chave-boca": require("../../assets/chave-boca.png"),
  "chave-inglesa": require("../../assets/chave-inglesa.png"),
  martelo: require("../../assets/martelo.png"),
  escada: require("../../assets/escada.png"),
  alicate: require("../../assets/alicate.png"),
  serra: require("../../assets/serra.png"),
};

export default function Inicio() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 800;
  const router = useRouter();

  const numColumns = width > 1200 ? 4 : width > 900 ? 3 : 2;

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={[styles.header, isDesktop && styles.headerDesktop]}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={[styles.title, isDesktop && styles.titleDesktop]}>BOB FERRAMENTAS</Text>
      </View>

      {/* Lista de produtos */}
      <FlatList
        ListHeaderComponent={
          <>
            {/* Campo de pesquisa */}
            <View style={[styles.searchContainer, isDesktop && styles.searchContainerDesktop]}>
              <Ionicons name="search" size={22} color="#64748B" style={{ marginLeft: 10 }} />
              <TextInput
                style={styles.searchInput}
                placeholder="Pesquise aqui..."
                placeholderTextColor="#94A3B8"
              />
            </View>

            <Text style={[styles.sectionTitle, isDesktop && styles.sectionTitleDesktop]}>
              Ferramentas Populares
            </Text>
          </>
        }
        data={ferramentas}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          isDesktop && styles.listContentDesktop,
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "../detalhes",
                params: {
                  id: item.id,
                  nome: item.nome,
                  preco: item.preco,
                  imagem: item.imagem,
                },
              })
            }
          >
            <View style={[styles.card, isDesktop && styles.cardDesktop]}>
              <Image
                source={imagens[item.imagem]}
                style={[styles.cardImage, isDesktop && styles.cardImageDesktop]}
              />
              <Text style={[styles.cardTitle, isDesktop && styles.cardTitleDesktop]}>
                {item.nome}
              </Text>
              <Text style={[styles.cardPrice, isDesktop && styles.cardPriceDesktop]}>
                {item.preco}
              </Text>

              <View style={styles.cardActions}>
                <TouchableOpacity>
                  <Ionicons name="remove-circle-outline" size={22} color="#1E293B" />
                </TouchableOpacity>

                <Text style={styles.cardQuantity}>1</Text>

                <TouchableOpacity>
                  <Ionicons name="add-circle-outline" size={22} color="#1E293B" />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginLeft: 6 }}>
                  <Ionicons name="cart-outline" size={22} color="#2563EB" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
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
    justifyContent: "center",
    paddingTop: 60,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    zIndex: 1,
  },
  headerDesktop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingVertical: 25,
  },
  logo: { width: 55, height: 55, marginBottom: 5 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
    letterSpacing: 1,
  },
  titleDesktop: {
    fontSize: 28,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 20,
    paddingHorizontal: 10,
    elevation: 3,
  },
  searchContainerDesktop: {
    maxWidth: 700,
    alignSelf: "center",
    marginVertical: 30,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 15,
    color: "#1E293B",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginHorizontal: 15,
    marginBottom: 10,
  },
  sectionTitleDesktop: {
    textAlign: "center",
    fontSize: 22,
    marginVertical: 15,
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  listContentDesktop: {
    alignSelf: "center",
    maxWidth: 1200,
  },
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    margin: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  cardDesktop: {
    margin: 12,
    padding: 20,
  },
  cardImage: { width: 60, height: 60, marginBottom: 10 },
  cardImageDesktop: { width: 80, height: 80 },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E293B",
    textAlign: "center",
  },
  cardTitleDesktop: {
    fontSize: 16,
  },
  cardPrice: {
    fontSize: 13,
    color: "#475569",
    marginBottom: 8,
  },
  cardPriceDesktop: {
    fontSize: 15,
  },
  cardActions: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  cardQuantity: {
    marginHorizontal: 8,
    fontWeight: "600",
    color: "#1E293B",
  },
});
