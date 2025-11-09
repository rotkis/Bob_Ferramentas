import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Endereco() {
  const router = useRouter();
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>BOB FERRAMENTAS</Text>
      </View>

      {/* FORMULÁRIO */}
      <ScrollView contentContainerStyle={styles.form}>
        {/* Botão de voltar acima do CEP */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#1E293B" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <TextInput style={styles.input} placeholder="CEP:" value={cep} onChangeText={setCep} />
        <TextInput style={styles.input} placeholder="Rua:" value={rua} onChangeText={setRua} />
        <TextInput style={styles.input} placeholder="Complemento:" value={complemento} onChangeText={setComplemento} />
        <TextInput style={styles.input} placeholder="Número:" value={numero} onChangeText={setNumero} />
        <TextInput style={styles.input} placeholder="Bairro:" value={bairro} onChangeText={setBairro} />
        <TextInput style={styles.input} placeholder="Cidade:" value={cidade} onChangeText={setCidade} />
        <TextInput style={styles.input} placeholder="Estado:" value={estado} onChangeText={setEstado} />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Confirmar Endereço</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8EBF0" },

  header: {
    backgroundColor: "#7ACEFA",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 20,
  },

  logo: { width: 50, height: 50, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: "700", color: "#1E293B" },

  form: { alignItems: "center", padding: 20, paddingTop: 10 },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 15,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    elevation: 3,
  },
  backText: { marginLeft: 4, fontSize: 16, color: "#1E293B", fontWeight: "600" },

  input: {
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
  },

  botao: {
    backgroundColor: "#FACC15",
    borderRadius: 10,
    width: "100%",
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },
  textoBotao: { fontWeight: "700", fontSize: 16, color: "#1E293B" },
});
