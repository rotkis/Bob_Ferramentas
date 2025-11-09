import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function Carrinho() {
  const router = useRouter();

  const produtos = [
    { id: 1, nome: "Chave de Boca", preco: "R$1,53", dias: 7, imagem: require("../../assets/chave-boca.png"), quantidade: 1 },
    { id: 2, nome: "Escada", preco: "R$1,68", dias: 7, imagem: require("../../assets/escada.png"), quantidade: 2 },
    { id: 3, nome: "Martelo", preco: "R$2,91", dias: 7, imagem: require("../../assets/martelo.png"), quantidade: 2 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>BOB FERRAMENTAS</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.carrinhoBox}>
          <Text style={styles.carrinhoTitle}>Carrinho de Compras:</Text>

          {produtos.map((p) => (
            <View key={p.id} style={styles.item}>
              <Image source={p.imagem} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemNome}>{p.nome}</Text>
                <Text style={styles.itemPreco}>{p.preco}</Text>
                <Text style={styles.itemPrazo}>Devolução em: {p.dias} dias</Text>
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

        <Text style={styles.subtotal}>Subtotal (5 produtos):</Text>
        <Text style={styles.precoTotal}>R$74,97</Text>

        <TouchableOpacity
        style={styles.botaoFinalizar}
        onPress={() => router.push("/endereco")}
      >
        <Text style={styles.textoBotao}>Finalizar Pedido</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

// estilos iguais aos seus originais...
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8EBF0" },
  header: {
    backgroundColor: "#7ACEFA",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
  },
  logo: { width: 50, height: 50, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: "700", color: "#1E293B" },
  content: { alignItems: "center", padding: 20 },
  carrinhoBox: {
    backgroundColor: "#FACC15",
    width: "100%",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  carrinhoTitle: { fontSize: 16, fontWeight: "700", color: "#1E293B", marginBottom: 10 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  itemImage: { width: 50, height: 50, marginRight: 10 },
  itemInfo: { flex: 1 },
  itemNome: { fontWeight: "600", fontSize: 15, color: "#1E293B" },
  itemPreco: { color: "#1E293B", fontSize: 14 },
  itemPrazo: { color: "#475569", fontSize: 12 },
  quantidadeBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2E8F0",
    borderRadius: 8,
    paddingHorizontal: 5,
  },
  qtdButton: {
    backgroundColor: "#CBD5E1",
    borderRadius: 5,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  qtdText: { fontSize: 16, fontWeight: "700", color: "#1E293B" },
  qtdNumero: { marginHorizontal: 6, fontWeight: "600", fontSize: 14 },
  subtotal: { fontSize: 15, color: "#1E293B", marginTop: 10 },
  precoTotal: { fontSize: 24, fontWeight: "700", color: "#1E293B", marginVertical: 10 },
  botaoFinalizar: {
    backgroundColor: "#FACC15",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 60,
    elevation: 3,
  },
  textoBotao: { fontWeight: "700", color: "#1E293B", fontSize: 16 },
});
