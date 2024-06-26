import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from '../../../styles/styles';
import { useNavigation } from '@react-navigation/native';

export default function Perfil({ route }) {
  const navigation = useNavigation();
  const { userName, userSobrenome, userEmail, userSenha } = route.params;

  return (
    <View style={styles.containerHome}>
      <View style={styles.headerEditarPerfil}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../../assets/images/icons/esquerda.png')}
            resizeMode='cover'
          />
        </Pressable>
        <Pressable>
          <Image
            source={require('../../../assets/images/icons/config.png')}
            resizeMode='cover'
          />
        </Pressable>
      </View>
      <View style={styles.menu}>
        <View style={styles.fotoPerfil}>
          <Image source={require('../../../assets/images/icons/user.png')} resizeMode='cover' />
        </View>
        <Text style={styles.nomeUsuario}>{userName || 'Usuário'}</Text>
        <Pressable
          style={[styles.botaoCard, { width: '50%', marginBottom: 10 }]}
          onPress={() => navigation.navigate('Editarperfil', {userName, userSobrenome, userEmail, userSenha})}
        >
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#21C25F', fontFamily: 'Inter_400Regular', padding: 5 }}>
            Editar perfil
          </Text>
        </Pressable>
        <View style={styles.card}>
          <Pressable style={styles.opcaoMenu}>
            <Text style={styles.textoMenu}>Configurar</Text>
          </Pressable>
          <Pressable style={styles.opcaoMenu} onPress={() => navigation.navigate('Contas')}>
            <Text style={styles.textoMenu}>Contas</Text>
          </Pressable>
          <Pressable style={styles.opcaoMenu}>
            <Text style={styles.textoMenu}>Cartões de crédito</Text>
          </Pressable>
          <Pressable style={[styles.opcaoMenu, { borderBottomWidth: 0 }]}>
            <Text style={styles.textoMenu}>Categorias</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
