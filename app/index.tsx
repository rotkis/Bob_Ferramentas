import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>BOB FERRAMENTAS</Text>
        <Image source={require("../assets/toolbox.png")} style={styles.toolbox} />
      </View>

      <View style={styles.body}>
        <Text style={styles.subtitle}>Entrar como:</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/cliente/login")}
          >
            <Text style={styles.buttonText}>Cliente</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/fornecedor/login")}
          >
            <Text style={styles.buttonText}>Fornecedor</Text>
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
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: { width: 60, height: 60, marginBottom: 10 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 10,
  },
  toolbox: { width: 90, height: 90 },
  body: { flex: 1, alignItems: "center", justifyContent: "center" },
  subtitle: { fontSize: 16, color: "#1E293B", marginBottom: 20 },
  buttonsContainer: { flexDirection: "row", gap: 20 },
  button: {
    backgroundColor: "#FACC15",
    paddingVertical: 25,
    paddingHorizontal: 35,
    borderRadius: 15,
    elevation: 3,
  },
  buttonText: { fontSize: 18, fontWeight: "600", color: "#1E293B" },
});
