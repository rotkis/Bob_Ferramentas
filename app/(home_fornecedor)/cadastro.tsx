import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
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
    console.log({
      nome,
      descricao,
      preco,
      quantidade,
      imagem,
    });
    alert('Ferramenta cadastrada com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>BOB FERRAMENTAS</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome da Ferramenta:</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />

        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={styles.input}
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
            {imagem ? 'Imagem selecionada!' : 'Selecione a imagem'}
          </Text>
        </TouchableOpacity>

        {imagem && (
          <Image source={{ uri: imagem }} style={styles.previewImage} />
        )}

        <TouchableOpacity style={styles.submitButton} onPress={cadastrarFerramenta}>
          <Text style={styles.submitText}>Cadastrar Ferramenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E9EFF8' },
  header: {
    backgroundColor: '#7ACEFA',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  logo: { width: 40, height: 40, marginBottom: 4 },
  headerText: { fontSize: 18, fontWeight: 'bold', color: '#002B5B' },
  form: { padding: 20 },
  label: { marginBottom: 6, color: '#002B5B', fontWeight: '500' },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  imageButton: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  imageButtonText: { color: '#333' },
  previewImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#FFD83A',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: { fontWeight: 'bold', color: '#000', fontSize: 16 },
});
