import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, TextInput } from 'react-native';
import styles from '../../../styles/styles';
import { useState } from 'react';
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

export default function Login({navigation}) {

    useFonts({
        Inter_400Regular,
      });

  return (
    <View style={styles.container}>
        <View style={styles.divTitulo}>
            <Text style={styles.tituloLogin}>Login</Text>
            <Text style={styles.subtituloLogin}>Faça login, ou cadastre-se caso seja novo!</Text>
        </View>
        <View style={styles.divLogin}>
            <View style={styles.primeiraParteLogin}>
                <TextInput style={styles.inputLogin} placeholder='E-mail' placeholderTextColor={'#fff'}/>
                <TextInput style={styles.inputLogin} placeholder='Senha' placeholderTextColor={'#fff'}/>
            </View>
            <View style={styles.segundaParteLogin}>
                <Pressable style={styles.botaoLogar}>
                    <Text style={styles.textoBotaoLogar}>Logar</Text>
                </Pressable>
            </View>
        </View>
            <View style={styles.criarConta}>
                <Pressable onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.tituloCriarConta}>Criar uma conta</Text>
                </Pressable>
            </View>        
    </View>
  );
};
