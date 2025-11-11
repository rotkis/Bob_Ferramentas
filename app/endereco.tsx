import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Endereco() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const isDesktop = width >= 768;
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  return (
    <View style={styles.container}>
      {/* HEADER FIXO */}
      <View style={[styles.header, isDesktop && styles.headerDesktop]}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={[styles.title, isDesktop && styles.titleDesktop]}>BOB FERRAMENTAS</Text>
      </View>

      {/* CONTEÚDO */}
      <ScrollView
        contentContainerStyle={[styles.form, isDesktop && styles.formDesktop]}
        style={{
          flex: 1,
          marginTop: isDesktop ? 130 : 160, // 🔹 maior espaço no mobile
        }}
      >
        {/* Botão de voltar */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={26} color="#1E293B" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        {/* Campos */}
        <View style={[styles.formBox, isDesktop && styles.formBoxDesktop]}>
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8EBF0" },

  // ===== HEADER FIXO =====
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#7ACEFA",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 20,
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  headerDesktop: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    paddingVertical: 25,
  },

  logo: { width: 50, height: 50, marginBottom: 6 },
  title: { fontSize: 20, fontWeight: "700", color: "#1E293B" },
  titleDesktop: { fontSize: 28 },

  // ===== FORMULÁRIO =====
  form: {
    alignItems: "center",
    padding: 20,
    paddingBottom: 60,
  },
  formDesktop: {
    justifyContent: "center",
    alignItems: "center",
  },

  formBox: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  formBoxDesktop: {
    width: "60%",
    maxWidth: 600,
  },

  // ===== BOTÃO DE VOLTAR =====
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 20,
    backgroundColor: "#FFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    elevation: 3,
  },
  backText: { marginLeft: 4, fontSize: 16, color: "#1E293B", fontWeight: "600" },

  // ===== INPUTS =====
  input: {
    backgroundColor: "#F9FAFB",
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#CBD5E1",
  },

  // ===== BOTÃO CONFIRMAR =====
  botao: {
    backgroundColor: "#FACC15",
    borderRadius: 10,
    width: "100%",
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 15,
  },
  textoBotao: { fontWeight: "700", fontSize: 16, color: "#1E293B" },
});
