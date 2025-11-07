import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      {/* Cabeçalho igual ao index */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>BOB FERRAMENTAS</Text>
        <Image source={require("../../assets/toolbox.png")} style={styles.toolbox} />
      </View>

      {/* Corpo */}
      <View style={styles.body}>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={() => router.push("/(home)/inicio")}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/cliente/cadastro")}
          style={{ marginTop: 15 }}
        >
          <Text style={styles.linkText}>
            Não possui uma conta?{" "}
            <Text style={styles.cadastroText}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8EBF0" },
  header: {
    backgroundColor: "#7ACEFA",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  logo: { width: 60, height: 60, marginBottom: 10 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 10,
  },
  toolbox: { width: 90, height: 90 },
  body: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 20 },
  formTitle: { fontSize: 22, fontWeight: "600", marginBottom: 25, color: "#1E293B" },
  input: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#CBD5E1",
  },
  button: {
    backgroundColor: "#FACC15",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: { fontSize: 16, fontWeight: "600", color: "#1E293B" },
  linkText: { color: "#475569", fontSize: 15 },
  cadastroText: { color: "#2563EB", fontWeight: "600" },
});
