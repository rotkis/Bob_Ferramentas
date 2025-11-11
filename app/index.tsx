import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Platform,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 768;

  return (
    <View style={styles.container}>
      {/* Cabeçalho fixo */}
      <View style={[styles.header, isLargeScreen && styles.headerDesktop]}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>BOB FERRAMENTAS</Text>
        {!isLargeScreen && (
          <Image source={require("../assets/toolbox.png")} style={styles.toolbox} />
        )}
      </View>

      {/* Corpo */}
      <View style={[styles.body, isLargeScreen && { marginTop: 160 }]}>
        <Text style={styles.subtitle}>Entrar como:</Text>

        <View style={[styles.buttonsContainer, isLargeScreen && styles.buttonsDesktop]}>
          <TouchableOpacity
            style={[styles.button, isLargeScreen && styles.buttonDesktop]}
            onPress={() => router.push("/cliente/login")}
          >
            <Text style={styles.buttonText}>Cliente</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonSpacing, isLargeScreen && styles.buttonDesktop]}
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
  // Fundo geral
  container: {
    flex: 1,
    backgroundColor: "#E8EBF0",
  },

  // Cabeçalho fixo
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#7ACEFA",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 20,
    zIndex: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 10,
  },
  headerDesktop: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingVertical: 40,
  },

  // Elementos do header
  logo: { width: 70, height: 70, marginBottom: 5 },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1E293B",
    letterSpacing: 1,
  },
  toolbox: { width: 100, height: 100, marginTop: 10 },

  // Corpo principal
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 180, // espaço pro header fixo no mobile
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1E293B",
    marginBottom: 30,
  },

  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsDesktop: {
    gap: 40,
  },

  button: {
    backgroundColor: "#FACC15",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
    transitionDuration: "0.2s",
  },
  buttonDesktop: {
    minWidth: 180,
  },
  buttonSpacing: {
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    textAlign: "center",
  },
});
