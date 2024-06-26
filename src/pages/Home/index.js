import { View, Text, Pressable, Image, StyleSheet, StatusBar } from "react-native";
import styles from '../../../styles/styles';
import { ScrollView } from "react-native";
import Navbar from "../../../src/components/Navbar";
import {getUserById} from '../../database/database';
import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';

export default function Home({route}) {

  useEffect(() => {
    if (route.params && route.params.userId) {
      const userId = route.params.userId;
      getUserById(userId)
        .then(user => {
          if (user) {
            setUserName(user.nome);
            setUserSobrenome(user.sobrenome);
            setUserEmail(user.email);
            setUserSenha(user.senha);
          } else {
            console.error('Usuário não encontrado');
          }
        })
        .catch(error => {
          console.error('Erro ao buscar usuário:', error);
        });
    }
  }, [route.params]);

  const [userName, setUserName] = useState('Usuário');
  const [userSobrenome, setUserSobrenome] = useState('Sobrenome');
  const [userEmail, setUserEmail] = useState('Email');
  const [userSenha, setUserSenha] = useState('Senha');

  const navigation = useNavigation();

  return (
    <View style={styles.containerHome}>
      <View style={styles2.container}>
        <Pressable style={styles2.conteudo} onPress={() => navigation.navigate('Perfil', {userName, userSobrenome, userEmail, userSenha})}>
          <View style={styles2.fotoPerfil}>
            <Image source={require('../../../assets/images/icons/user.png')} />
          </View>
          <Text style={styles2.texto}>Bom dia,{'\n'}{userName}</Text>
          <View style={styles2.notificacao}>
            <Image source={require('../../../assets/images/icons/sino.png')} />
          </View>
        </Pressable>
      </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={[styles.primeiraMetadeCard, {borderBottomWidth: 1, borderBottomColor: 'white'}]}>
            <Text style={[styles.textoCard, {marginBottom: 30}]}>Saldo{'\n'}R$0,00</Text>
            <Pressable style={styles.visibilidade}>
              <Image source={require('../../../assets/images/icons/invisivel.png')}
                resizeMode="cover"
                style={{height: 42, width: 42}}
              />
            </Pressable>
          </View>
          <View style={styles.segundaMetadeCard}>
            <Text style={styles.textoCard}>Minhas contas</Text>
            <View style={styles.alinhamentoBotao}>
              <Pressable style={styles.botaoCard}>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#21C25F', fontFamily: 'Inter_400Regular', padding: 5}}>Gerenciar contas</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.primeiraMetadeCard}>
            <Text style={styles.textoCard}>Meus cartões</Text>
          </View>
          <View style={styles.segundaMetadeCard}>
            <Text style={styles.textoCard}>Acompanhe sua fatura</Text>
            <View style={styles.alinhamentoBotao}>
              <Pressable style={styles.botaoCard}>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#21C25F', fontFamily: 'Inter_400Regular', padding: 5}}>Adicionar cartão</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.primeiraMetadeCard}>
            <Text style={styles.textoCard}>Primeiros passos</Text>
          </View>
          <View style={styles.segundaMetadeCard}>
            <Text style={styles.textoCard}>Acompanhe sua fatura</Text>
            <View style={styles.alinhamentoBotao}>
              <Pressable style={styles.botaoCard}>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#21C25F', fontFamily: 'Inter_400Regular', padding: 5}}>Continuar</Text>
              </Pressable>
            </View>
          </View>
        </View>
        </ScrollView>
        <Navbar/>
    </View>
  );
};

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const styles2 = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingHorizontal: 16,
    width: '100%',
    marginBottom: 40
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingEnd: 70,
    fontFamily: 'Inter_400Regular'
  },
  fotoPerfil: {
    height: 80,
    width: 80,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  conteudo: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  notificacao: {
    width: 66,
    height: 66,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});