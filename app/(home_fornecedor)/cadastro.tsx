import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const { width } = Dimensions.get("window");

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [imagem, setImagem] = useState<string | null>(null);

  const selecionarImagem = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const cadastrarFerramenta = () => {
    console.log({ nome, descricao, preco, quantidade, imagem });
    alert("Ferramenta cadastrada com sucesso!");
  };

  return (
    <View style={styles.container}>
      {/* HEADER FIXO */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.headerText}>BOB FERRAMENTAS</Text>
      </View>

      {/* SCROLL PARA O CONTEÚDO */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.form}>
          <Text style={styles.label}>Nome da Ferramenta:</Text>
          <TextInput style={styles.input} value={nome} onChangeText={setNome} />

          <Text style={styles.label}>Descrição:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            multiline
            value={descricao}
            onChangeText={setDescricao}
          />

          <Text style={styles.label}>Preço (R$):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={preco}
            onChangeText={setPreco}
          />

          <Text style={styles.label}>Quantidade:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={quantidade}
            onChangeText={setQuantidade}
          />

          <Text style={styles.label}>Imagem da ferramenta:</Text>
          <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
            <Text style={styles.imageButtonText}>
              {imagem ? "Imagem selecionada!" : "Selecione a imagem"}
            </Text>
          </TouchableOpacity>

          {imagem && <Image source={{ uri: imagem }} style={styles.previewImage} />}

          <TouchableOpacity
            style={styles.submitButton}
            onPress={cadastrarFerramenta}
          >
            <Text style={styles.submitText}>Cadastrar Ferramenta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9EFF8",
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#7ACEFA",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "web" ? 20 : 50,
    paddingBottom: 20,
    zIndex: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  logo: {
    width: 45,
    height: 45,
    marginBottom: 4,
  },

  headerText: {
    fontSize: width < 500 ? 18 : 24,
    fontWeight: "bold",
    color: "#002B5B",
  },

  scrollContent: {
    paddingTop: Platform.OS === "web" ? 120 : 150, // espaço pro header fixo
    paddingBottom: 50,
    alignItems: "center",
  },

  form: {
    width: width < 600 ? "90%" : 500,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  label: {
    marginBottom: 6,
    color: "#002B5B",
    fontWeight: "500",
    fontSize: width < 500 ? 14 : 16,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: width < 500 ? 14 : 16,
  },

  textArea: {
    minHeight: 80,
    textAlignVertical: "top",
  },

  imageButton: {
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
  },

  imageButtonText: { color: "#333" },

  previewImage: {
    width: 140,
    height: 140,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 20,
  },

  submitButton: {
    backgroundColor: "#FFD83A",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },

  submitText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: width < 500 ? 15 : 17,
  },
});
