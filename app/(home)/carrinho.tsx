import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";

export default function Carrinho() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isDesktop = width > 800;

  const produtos = [
    { id: 1, nome: "Chave de Boca", preco: "R$1,53", dias: 7, imagem: require("../../assets/chave-boca.png"), quantidade: 1 },
    { id: 2, nome: "Escada", preco: "R$1,68", dias: 7, imagem: require("../../assets/escada.png"), quantidade: 2 },
    { id: 3, nome: "Martelo", preco: "R$2,91", dias: 7, imagem: require("../../assets/martelo.png"), quantidade: 2 },
  ];

  return (
    <View style={styles.container}>
      {/* Cabeçalho fixo */}
      <View style={[styles.header, isDesktop && styles.headerDesktop]}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={[styles.title, isDesktop && styles.titleDesktop]}>BOB FERRAMENTAS</Text>
      </View>

      {/* Conteúdo rolável */}
      <ScrollView contentContainerStyle={[styles.content, isDesktop && styles.contentDesktop]}>
        <View style={[styles.carrinhoBox, isDesktop && styles.carrinhoBoxDesktop]}>
          <Text style={styles.carrinhoTitle}>Carrinho de Compras</Text>

          {produtos.map((p) => (
            <View key={p.id} style={[styles.item, isDesktop && styles.itemDesktop]}>
              <Image source={p.imagem} style={[styles.itemImage, isDesktop && styles.itemImageDesktop]} />

              <View style={styles.itemInfo}>
                <Text style={[styles.itemNome, isDesktop && styles.itemNomeDesktop]}>{p.nome}</Text>
                <Text style={styles.itemPreco}>{p.preco}</Text>
                <Text style={styles.itemPrazo}>Devolução em {p.dias} dias</Text>
              </View>

              <View style={styles.quantidadeBox}>
                <TouchableOpacity style={styles.qtdButton}>
                  <Text style={styles.qtdText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qtdNumero}>{p.quantidade}</Text>
                <TouchableOpacity style={styles.qtdButton}>
                  <Text style={styles.qtdText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Resumo */}
        <View style={[styles.resumoBox, isDesktop && styles.resumoBoxDesktop]}>
          <Text style={styles.subtotal}>Subtotal (5 produtos)</Text>
          <Text style={styles.precoTotal}>R$ 74,97</Text>

          <TouchableOpacity
            style={[styles.botaoFinalizar, isDesktop && styles.botaoFinalizarDesktop]}
            onPress={() => router.push("/endereco")}
          >
            <Text style={styles.textoBotao}>Finalizar Pedido</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8EBF0" },

  // ===== HEADER =====
  header: {
    backgroundColor: "#7ACEFA",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    zIndex: 1,
  },
  headerDesktop: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  logo: { width: 55, height: 55, marginBottom: 5 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
    letterSpacing: 1,
  },
  titleDesktop: {
    fontSize: 26,
    marginTop: 10,
  },

  // ===== BODY =====
  content: {
    alignItems: "center",
    padding: 20,
    paddingTop: 25,
  },
  contentDesktop: {
    maxWidth: 900,
    alignSelf: "center",
  },

  carrinhoBox: {
    backgroundColor: "#FACC15",
    width: "100%",
    padding: 15,
    borderRadius: 15,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  carrinhoBoxDesktop: {
    padding: 25,
  },
  carrinhoTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 12,
    textAlign: "center",
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  itemDesktop: {
    padding: 18,
  },
  itemImage: { width: 50, height: 50, marginRight: 12 },
  itemImageDesktop: { width: 70, height: 70, marginRight: 20 },
  itemInfo: { flex: 1 },
  itemNome: { fontWeight: "600", fontSize: 15, color: "#1E293B" },
  itemNomeDesktop: { fontSize: 17 },
  itemPreco: { color: "#1E293B", fontSize: 14 },
  itemPrazo: { color: "#475569", fontSize: 12 },

  quantidadeBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2E8F0",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  qtdButton: {
    backgroundColor: "#CBD5E1",
    borderRadius: 6,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  qtdText: { fontSize: 18, fontWeight: "700", color: "#1E293B" },
  qtdNumero: { marginHorizontal: 8, fontWeight: "600", fontSize: 15 },

  // ===== RESUMO =====
  resumoBox: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  resumoBoxDesktop: {
    paddingVertical: 30,
    paddingHorizontal: 60,
  },
  subtotal: { fontSize: 15, color: "#475569" },
  precoTotal: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1E293B",
    marginVertical: 12,
  },
  botaoFinalizar: {
    backgroundColor: "#FACC15",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 70,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
  },
  botaoFinalizarDesktop: {
    paddingVertical: 18,
    paddingHorizontal: 100,
  },
  textoBotao: { fontWeight: "700", color: "#1E293B", fontSize: 16 },
});
