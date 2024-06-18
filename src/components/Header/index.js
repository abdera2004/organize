import React from "react";
import { View, StyleSheet, Text, StatusBar, Pressable, Image } from "react-native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { useNavigation, useRoute } from '@react-navigation/native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
  useFonts({
    Inter_400Regular,
  });

  const navigation = useNavigation();
  const route = useRoute();
  const { userName } = route.params || {};  // Receber o nome do usuário da navegação

  return (
    <View style={styles.container}>
      <Pressable style={styles.conteudo} onPress={() => navigation.navigate('Perfil')}>
        <View style={styles.fotoPerfil}>
          <Image source={require('../../../assets/images/icons/user.png')} />
        </View>
        <Text style={styles.texto}>Bom dia,{'\n'}{userName || 'Usuário'}</Text>
        <View style={styles.notificacao}>
          <Image source={require('../../../assets/images/icons/sino.png')} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
