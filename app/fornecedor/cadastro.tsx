import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions
} from "react-native";

export default function Cadastro() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  const { width } = useWindowDimensions();
  const isLargeScreen = width > 768;

  return (
    <View style={styles.container}>
      {/* Cabeçalho igual ao index */}
      <View style={[styles.header, isLargeScreen && styles.headerDesktop]}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>BOB FERRAMENTAS</Text>
      </View>

      {/* Corpo */}
      <ScrollView
        contentContainerStyle={[
          styles.body,
          isLargeScreen && styles.bodyDesktop,
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.formCard, isLargeScreen && styles.formCardDesktop]}>
          <Text style={styles.formTitle}>Crie sua conta</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
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
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Endereço"
            value={endereco}
            onChangeText={setEndereco}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/fornecedor/login")}
            style={{ marginTop: 20 }}
          >
            <Text style={styles.linkText}>
              Já possui uma conta?{" "}
              <Text style={styles.cadastroText}>Entrar</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  logo: { width: 60, height: 60 },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B",
  },

  body: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  bodyDesktop: {
    justifyContent: "center",
    flexGrow: 1,
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
    marginBottom: 18,
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
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E293B",
  },

  linkText: {
    color: "#475569",
    fontSize: 15,
    textAlign: "center",
  },
  cadastroText: {
    color: "#2563EB",
    fontWeight: "600",
  },
});
