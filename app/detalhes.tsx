import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";

const imagens = {
  "chave-boca": require("../assets/chave-boca.png"),
  "chave-inglesa": require("../assets/chave-inglesa.png"),
  martelo: require("../assets/martelo.png"),
  escada: require("../assets/escada.png"),
  alicate: require("../assets/alicate.png"),
  serra: require("../assets/serra.png"),
};

const descricoes: Record<string, string> = {
  "Chave de Boca": "Ideal para apertar e afrouxar porcas e parafusos de diferentes tamanhos.",
  "Chave Inglesa": "Ferramenta ajustável usada em serviços hidráulicos e mecânicos.",
  Martelo: "Extração fácil de pregos, ideal para carpintaria e marcenaria.",
  Escada: "Suporte seguro para alcançar locais altos em obras e manutenções.",
  Alicate: "Excelente para corte e dobra de fios, ideal para uso elétrico.",
  "Serra de Mão": "Indicada para corte de madeira, PVC e outros materiais leves.",
};

export default function DetalhesFerramenta() {
  const { nome, preco, imagem } = useLocalSearchParams();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isDesktop = width > 800;

  const [quantidade, setQuantidade] = useState("1");
  const [tempo, setTempo] = useState("7 dias");

  const Conteudo = (
    <View style={[styles.content, isDesktop && styles.contentDesktop]}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={26} color="#1E293B" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Detalhes da Ferramenta</Text>

      <View style={[styles.infoContainer, isDesktop && styles.infoContainerDesktop]}>
        <View style={[styles.imageContainer, isDesktop && styles.imageContainerDesktop]}>
          <Image source={imagens[imagem]} style={styles.image} resizeMode="contain" />
        </View>

        <View style={[styles.detailsContainer, isDesktop && styles.detailsContainerDesktop]}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.preco}>{preco} por dia</Text>

          <Text style={styles.descricaoTitulo}>Descrição:</Text>
          <Text style={styles.descricao}>{descricoes[nome]}</Text>

          <View
            style={[
              styles.selectContainer,
              isDesktop && styles.selectContainerDesktop,
            ]}
          >
            <Text style={styles.label}>Quantidade:</Text>
            <View style={[styles.pickerWrapper, isDesktop && styles.pickerWrapperDesktop]}>
              <Picker selectedValue={quantidade} onValueChange={(v) => setQuantidade(v)}>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>

            <Text style={styles.label}>Tempo:</Text>
            <View style={[styles.pickerWrapper, isDesktop && styles.pickerWrapperDesktop]}>
              <Picker selectedValue={tempo} onValueChange={(v) => setTempo(v)}>
                <Picker.Item label="7 dias" value="7 dias" />
                <Picker.Item label="14 dias" value="14 dias" />
                <Picker.Item label="30 dias" value="30 dias" />
              </Picker>
            </View>
          </View>

          <TouchableOpacity style={[styles.botao, isDesktop && styles.botaoDesktop]}>
            <Text style={[styles.botaoTexto, isDesktop && styles.botaoTextoDesktop]}>
              Adicionar ao Carrinho
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.avaliacaoContainer}>
        <Text style={styles.avaliacaoTitulo}>Avaliações:</Text>
        <View style={styles.stars}>
          <Ionicons name="star" size={22} color="#FACC15" />
          <Ionicons name="star" size={22} color="#FACC15" />
          <Ionicons name="star" size={22} color="#FACC15" />
          <Ionicons name="star-half" size={22} color="#FACC15" />
          <Ionicons name="star-outline" size={22} color="#FACC15" />
        </View>
        <Text style={styles.comentario}>Muito Bom!!</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.header, isDesktop && styles.headerDesktop]}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={[styles.headerTitle, isDesktop && styles.headerTitleDesktop]}>
          BOB FERRAMENTAS
        </Text>
      </View>

      {isDesktop ? Conteudo : <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>{Conteudo}</ScrollView>}
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
    paddingBottom: 15,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 2,
  },
  headerDesktop: { flexDirection: "column", paddingVertical: 25 },
  logo: { width: 55, height: 55, marginBottom: 5 },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#1E293B" },
  headerTitleDesktop: { fontSize: 26, marginLeft: 10 },
  content: {
    flex: 1,
    marginTop: 130,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  contentDesktop: { alignItems: "flex-start", paddingHorizontal: 100 },
  backButton: { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", marginBottom: 20, marginTop: 40 },
  backText: { fontSize: 16, fontWeight: "600", color: "#1E293B", marginLeft: 5 },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: "#1E293B", marginBottom: 15, alignSelf: "flex-start" },
  infoContainer: { alignItems: "center", width: "100%" },
  infoContainerDesktop: { flexDirection: "row", alignItems: "flex-start", gap: 40 },
  imageContainer: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    marginBottom: 15,
  },
  imageContainerDesktop: { width: 300, height: 300, justifyContent: "center", alignItems: "center" },
  image: { width: 180, height: 180 },
  detailsContainer: { alignItems: "center", width: "100%" },
  detailsContainerDesktop: { alignItems: "flex-start", flex: 1 },
  nome: { fontSize: 22, fontWeight: "700", color: "#1E293B" },
  preco: { fontSize: 18, color: "#1E293B", marginVertical: 5 },
  descricaoTitulo: { fontSize: 16, fontWeight: "700", alignSelf: "flex-start", color: "#1E293B" },
  descricao: {
    fontSize: 14,
    color: "#475569",
    textAlign: "left",
    marginBottom: 15,
    alignSelf: "flex-start",
  },
  selectContainer: { width: "100%", marginBottom: 15 },
  selectContainerDesktop: { flexDirection: "row", alignItems: "center", gap: 15, width: "70%" },
  label: { fontWeight: "600", fontSize: 15, color: "#1E293B" },
  pickerWrapper: { backgroundColor: "#FFF", borderRadius: 0, marginBottom: 0,  padding: 0},
  pickerWrapperDesktop: {
    width: 100,
    height: 20,
    marginBottom: 0,
    padding: 0
  },
  botao: {
    backgroundColor: "#FACC15",
    borderRadius: 10,
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  botaoDesktop: {
    width: 200,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  botaoTexto: { fontSize: 16, fontWeight: "700", color: "#1E293B" },
  botaoTextoDesktop: { fontSize: 14 },
  avaliacaoContainer: { alignItems: "center", marginTop: 10 },
  avaliacaoTitulo: { fontWeight: "700", fontSize: 16, color: "#1E293B", marginBottom: 5 },
  stars: { flexDirection: "row", marginBottom: 5 },
  comentario: { fontWeight: "600", fontSize: 15, color: "#1E293B" },
});
