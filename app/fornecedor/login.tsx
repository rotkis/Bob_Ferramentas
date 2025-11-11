import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { width } = useWindowDimensions();

  const isLargeScreen = width > 768; // breakpoint simples

  return (
    <View style={styles.container}>
      {/* Cabeçalho igual ao index */}
      <View style={[styles.header, isLargeScreen && styles.headerDesktop]}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>BOB FERRAMENTAS</Text>
      </View>

      {/* Corpo */}
      <View style={[styles.body, isLargeScreen && styles.bodyDesktop]}>
        <View style={[styles.formCard, isLargeScreen && styles.formCardDesktop]}>
          <Text style={styles.formTitle}>Login</Text>

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

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/(home_fornecedor)/home")}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/fornecedor/cadastro")}
            style={{ marginTop: 15 }}
          >
            <Text style={styles.linkText}>
              Não possui uma conta?{" "}
              <Text style={styles.cadastroText}>Cadastre-se</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8EBF0" },

  header: {
    backgroundColor: "#7ACEFA",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerDesktop: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingVertical: 30,
  },
  logo: { width: 60, height: 60, marginBottom: 0 },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B",
  },
  toolbox: { width: 90, height: 90, marginTop: 5 },

  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  bodyDesktop: {
    justifyContent: "center",
  },

  formCard: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  formCardDesktop: {
    maxWidth: 420,
    padding: 40,
  },

  formTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    width: "100%",
    backgroundColor: "#F8FAFC",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FACC15",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { fontSize: 16, fontWeight: "600", color: "#1E293B" },
  linkText: { color: "#475569", fontSize: 15, textAlign: "center" },
  cadastroText: { color: "#2563EB", fontWeight: "600" },
});
