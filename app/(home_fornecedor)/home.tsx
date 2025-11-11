import { View, Text, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native';

const ferramentas = [
  { id: '1', nome: 'Chave-de-Boca', tipo: 'Disponível', img: require('../../assets/chave-boca.png') },
  { id: '2', nome: 'Chave-Inglesa', tipo: 'Disponível', img: require('../../assets/chave-inglesa.png') },
  { id: '3', nome: 'Martelo', tipo: 'Emprestado', img: require('../../assets/martelo.png') },
  { id: '4', nome: 'Escada', tipo: 'Disponível', img: require('../../assets/escada.png') },
  { id: '5', nome: 'Serra de Mão', tipo: 'Emprestado', img: require('../../assets/serra.png') },
];

export default function Home() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;

  return (
    <View style={styles.container}>
      {/* Cabeçalho fixo azul */}
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>BOB FERRAMENTAS</Text>
      </View>

      {/* Totais */}
      <View style={styles.totals}>
        <Text style={styles.label}>Total de Ferramentas:</Text>
        <Text style={styles.number}>280</Text>
        <Text style={styles.label}>Total de Ferramentas Alugadas:</Text>
        <Text style={styles.number}>113</Text>
      </View>

      {/* Seção */}
      <Text style={styles.sectionTitle}>Suas Ferramentas</Text>

      {/* Lista Centralizada */}
      <View style={[styles.listContainer, isWeb && styles.listContainerWeb]}>
        <FlatList
          data={ferramentas}
          numColumns={isWeb ? 4 : 2}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.grid,
            isWeb && styles.gridWeb,
          ]}
          renderItem={({ item }) => (
            <View
              style={[
                styles.card,
                isWeb ? styles.cardWeb : styles.cardMobile,
              ]}
            >
              <Image source={item.img} style={styles.img} />
              <Text style={styles.cardTitle}>{item.nome}</Text>
              <Text
                style={[
                  styles.cardSubtitle,
                  item.tipo === 'Disponível' ? styles.disponivel : styles.emprestado,
                ]}
              >
                {item.tipo}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EFF8',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#7ACEFA',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    width: '100%',
    elevation: 4,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 6,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002B5B',
    letterSpacing: 1,
  },
  totals: {
    alignItems: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 15,
    color: '#333',
  },
  number: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  sectionTitle: {
    marginBottom: 10,
    fontWeight: '700',
    fontSize: 18,
    color: '#002B5B',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  listContainerWeb: {
    alignItems: 'center',
  },
  grid: {
    paddingHorizontal: 12,
    paddingBottom: 100,
  },
  gridWeb: {
    width: '100%',
    maxWidth: 1000, // Largura máxima do grid
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardWeb: {
    width: 220,
  },
  cardMobile: {
    flex: 1,
    minWidth: 150,
  },
  img: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  disponivel: {
    color: '#0A8A43',
  },
  emprestado: {
    color: '#D22B2B',
  },
});
