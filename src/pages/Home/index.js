import { View, Text, Pressable, Image } from "react-native";
import styles from '../../../styles/styles';
import Header from '../../../src/components/Header';
import { ScrollView } from "react-native";
import Navbar from "../../../src/components/Navbar";
import {getUserById} from '../../database/database';
import { useState, useEffect } from "react";

export default function Home() {

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userId = 1; // Substitua pelo ID do usuário que você deseja buscar
        const user = await getUserById(userId);
        setUserName(user.nome);
      } catch (error) {
        console.log('Erro ao buscar usuário:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <View style={styles.containerHome}>
        <Header nome={userName}/>
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
