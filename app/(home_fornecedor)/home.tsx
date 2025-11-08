// app/(home_fornecedor)/home.tsx
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function HomeFornecedor() {
  // Estado simulado (depois você pode substituir pelo fetch no banco)
  const [ferramentas, setFerramentas] = useState<any[]>([]);

  useEffect(() => {
    // Simulação de carregamento dinâmico
    const mockData = [
      {
        id: 1,
        nome: "Chave de Boca",
        estoque: 25,
        alugadas: 10,
        imagem: require("../../assets/chave-boca.png"),
      },
      {
        id: 2,
        nome: "Chave Inglesa",
        estoque: 34,
        alugadas: 20,
        imagem: require("../../assets/chave-inglesa.png"),
      },
      {
        id: 3,
        nome: "Martelo",
        estoque: 58,
        alugadas: 40,
        imagem: require("../../assets/martelo.png"),
      },
      {
        id: 4,
        nome: "Escada",
        estoque: 15,
        alugadas: 25,
        imagem: require("../../assets/escada.png"),
      },
      {
        id: 5,
        nome: "Serra de Mão",
        estoque: 35,
        alugadas: 10,
        imagem: require("../../assets/serra.png"),
      },
    ];

    setFerramentas(mockData);
  }, []);

  const totalFerramentas = ferramentas.reduce(
    (acc, item) => acc + item.estoque + item.alugadas,
    0
  );
  const totalAlugadas = ferramentas.reduce(
    (acc, item) => acc + item.alugadas,
    0
  );

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
        <Text style={styles.title}>BOB FERRAMENTAS</Text>
      </View>

      {/* Estatísticas */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsLabel}>Total de Ferramentas:</Text>
        <Text style={styles.statsNumber}>{totalFerramentas}</Text>
        <Text style={styles.statsLabel}>Total de Ferramentas Alugadas:</Text>
        <Text style={styles.statsNumber}>{totalAlugadas}</Text>
      </View>

      {/* Ferramentas */}
      <Text style={styles.sectionTitle}>Suas Ferramentas</Text>
      <View style={styles.grid}>
        {ferramentas.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.imagem} style={styles.image} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}>Estoque: {item.estoque}</Text>
            <Text style={styles.info}>Alugadas: {item.alugadas}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F1F5F9" },
  header: {
    backgroundColor: "#7ACEFA",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
  },
  logo: { width: 40, height: 40, resizeMode: "contain" },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
  },
  statsContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  statsLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1E293B",
  },
  statsNumber: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1E3A8A",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginLeft: 20,
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: "#FACC15",
    width: 150,
    borderRadius: 12,
    alignItems: "center",
    padding: 10,
    margin: 5,
  },
  image: { width: 50, height: 50, resizeMode: "contain" },
  nome: {
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 5,
  },
  info: {
    fontSize: 13,
    color: "#1E293B",
  },
});
