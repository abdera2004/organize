import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, TextInput, Modal, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { updateUser, getUserById } from '../../database/database';
import styles from '../../../styles/styles';

export default function Editarperfil({ route }) {

  const navigation = useNavigation();
  const { userId, userName, userSobrenome, userEmail, userSenha } = route.params;

  // Estados para controlar os dados editáveis e o modal
  const [nome, setNome] = useState(userName || '');
  const [sobrenome, setSobrenome] = useState(userSobrenome || '');
  const [email, setEmail] = useState(userEmail || '');
  const [senha, setSenha] = useState(userSenha || '');
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Função para escolher imagem da galeria
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [5, 5],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  // Função para abrir o modal de edição
  const openModal = () => {
    setModalVisible(true);
  };

  // Função para fechar o modal de edição
  const closeModal = () => {
    setModalVisible(false);
  };

  // Função para salvar as alterações
  const handleSave = async () => {
    try {
      // Monta os dados a serem atualizados no banco de dados
      const obj = {
        id: userId,
        nome: nome.trim(),
        sobrenome: sobrenome.trim(),
        email: email.trim(),
        senha: senha.trim(),
        foto: image ? image : null,
        saldo: 0
      };

      // Chama a função de atualização do banco de dados
      await updateUser(obj);

      // Navega de volta para a tela de Perfil após a atualização
      navigation.navigate('Perfil', { userName });

      // Fecha o modal após salvar
      closeModal();
    } catch (error) {
      console.error('Erro ao atualizar dados do usuário:', error);
      // Trate o erro conforme necessário (ex.: exibir mensagem de erro)
    }
  };

  return (
    <View style={[styles.containerHome, { padding: 0 }]}>
      <View style={[styles.headerEditarPerfil, { marginBottom: 30, paddingHorizontal: 17 }]}>
        <Pressable onPress={() => navigation.navigate('Perfil', { userName })}>
          <Image
            source={require('../../../assets/images/icons/esquerda.png')}
            resizeMode='cover'
          />
        </Pressable>
        <Pressable onPress={handleSave}>
          <Text style={[styles.textoCard, { bottom: 4, }]}>Salvar</Text>
        </Pressable>
      </View>
      <View style={styles.menu}>
        <View style={styles.fotoPerfil}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} resizeMode='cover' />
          ) : (
            <Image source={require('../../../assets/images/icons/user.png')} style={styles.image} resizeMode='cover' />
          )}
        </View>
        <Text style={styles.nomeUsuario}>{userName}</Text>
        <Pressable onPress={pickImage}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#21C25F', fontFamily: 'Inter_400Regular', padding: 5 }}>Alterar imagem</Text>
        </Pressable>

        {/* Modal de Edição */}
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={modalStyles.modalContainer}>
            <View style={modalStyles.modalContent}>
              <Text style={modalStyles.modalTitle}>Editar Informações</Text>
              <TextInput
                style={modalStyles.input}
                placeholder='Nome'
                value={nome}
                onChangeText={text => setNome(text)}
              />
              <TextInput
                style={modalStyles.input}
                placeholder='Sobrenome'
                value={sobrenome}
                onChangeText={text => setSobrenome(text)}
              />
              <TextInput
                style={modalStyles.input}
                placeholder='E-mail'
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                style={modalStyles.input}
                placeholder='Senha'
                value={senha}
                onChangeText={text => setSenha(text)}
                secureTextEntry={true}
              />
              <Pressable style={modalStyles.button} onPress={handleSave}>
                <Text style={modalStyles.buttonText}>Salvar Alterações</Text>
              </Pressable>
              <Pressable style={modalStyles.button} onPress={closeModal}>
                <Text style={modalStyles.buttonText}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Campos editáveis */}
        <View style={styles.menuEditar}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.tituloOpcao}>{nome}</Text>
          </View>
          <Pressable onPress={openModal}>
            <Image source={require('../../../assets/images/icons/lapis.png')} resizeMode='cover' />
          </Pressable>
        </View>
        <View style={styles.menuEditar}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Sobrenome</Text>
            <Text style={styles.tituloOpcao}>{sobrenome}</Text>
          </View>
          <Pressable onPress={openModal}>
            <Image source={require('../../../assets/images/icons/lapis.png')} resizeMode='cover' />
          </Pressable>
        </View>
        <View style={styles.menuEditar}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>E-mail</Text>
            <Text style={styles.tituloOpcao}>{email}</Text>
          </View>
          <Pressable onPress={openModal}>
            <Image source={require('../../../assets/images/icons/lapis.png')} resizeMode='cover' />
          </Pressable>
        </View>
        <View style={styles.menuEditar}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Senha</Text>
            <Text style={styles.tituloOpcao}>{senha}</Text>
          </View>
          <Pressable onPress={openModal}>
            <Image source={require('../../../assets/images/icons/lapis.png')} resizeMode='cover' />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

// Estilos para o modal e botões
const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#21C25F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
