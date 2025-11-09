import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ferramentas = [
  { id: '1', nome: 'Chave-de-Boca', tipo: 'Disponível', img: require('../assets/wrench.png') },
  { id: '2', nome: 'Chave-Philips', tipo: 'Disponível', img: require('../assets/screwdriver.png') },
  { id: '3', nome: 'Martelo', tipo: 'Emprestado', img: require('../assets/hammer.png') },
  { id: '4', nome: 'Escada', tipo: 'Disponível', img: require('../assets/ladder.png') },
  { id: '5', nome: 'Serra de Mão', tipo: 'Emprestado', img: require('../assets/saw.png') },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>BOB FERRAMENTAS</Text>
      </View>

      <View style={styles.totals}>
        <Text style={styles.label}>Total de Ferramentas:</Text>
        <Text style={styles.number}>280</Text>
        <Text style={styles.label}>Total de Ferramentas Alugadas:</Text>
        <Text style={styles.number}>113</Text>
      </View>

      <Text style={styles.sectionTitle}>Suas Ferramentas</Text>

      <FlatList
        data={ferramentas}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.img} />
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardSubtitle}>{item.tipo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E9EFF8' },
  header: {
    backgroundColor: '#90CAF9',
    alignItems: 'center',
    paddingVertical: 16,
  },
  logo: { width: 40, height: 40, marginBottom: 4 },
  headerText: { fontSize: 18, fontWeight: 'bold', color: '#002B5B' },
  totals: { alignItems: 'center', marginVertical: 16 },
  label: { fontSize: 14, color: '#333' },
  number: { fontSize: 28, fontWeight: 'bold', color: '#000', marginBottom: 8 },
  sectionTitle: {
    marginLeft: 16,
    marginBottom: 8,
    fontWeight: '600',
    fontSize: 16,
    color: '#002B5B',
  },
  grid: { paddingHorizontal: 12 },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 6,
    borderRadius: 12,
    alignItems: 'center',
    padding: 12,
    elevation: 2,
  },
  img: { width: 40, height: 40, marginBottom: 6 },
  cardTitle: { fontWeight: 'bold', color: '#000' },
  cardSubtitle: { color: '#555' },
});
