import { View, Text, StyleSheet, Image } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>BOB FERRAMENTAS</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Você ainda não fez nenhuma compra</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#E9EFF8' 
  },
  header: {
    backgroundColor: '#7ACEFA',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  logo: { 
    width: 50, 
    height: 50, 
    marginBottom: 10 
  },
  headerText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#002B5B' 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { 
    fontSize: 22,
    color: '#002B5B'
  },
});