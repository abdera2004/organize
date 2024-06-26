import {View, Text, Pressable, Image} from 'react-native';
import styles from '../../../styles/styles';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Editarperfil({route}) {

  const navigation = useNavigation();
  const { userName, userSobrenome, userEmail, userSenha } = route.params;

  const [image, setImage] = useState(null);

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

  return (
    <View style={[styles.containerHome, {padding: 0}]}>
      <View style={[styles.headerEditarPerfil, {marginBottom: 30, paddingHorizontal: 17}]}>
        <Pressable onPress={() => navigation.navigate('Perfil', {userName})}>
          <Image
            source={require('../../../assets/images/icons/esquerda.png')}
            resizeMode='cover'
          />
        </Pressable>
        <Pressable>
          <Text style={[styles.textoCard, {bottom: 4}]}>Salvar</Text>
        </Pressable>
      </View>
      <View style={styles.menu}>
        <View style={styles.fotoPerfil}>
          {image && <Image source={{ uri: image }} style={styles.image} resizeMode='cover'/>}
        {!image && (
            <Image source={require('../../../assets/images/icons/user.png')} resizeMode='cover'/>
          )}
        </View>
        <Text style={styles.nomeUsuario}>{userName || 'Usuário'}</Text>
        <Pressable onPress={pickImage}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: '#21C25F', fontFamily: 'Inter_400Regular', padding: 5}}>Alterar imagem</Text>
        </Pressable>
        <View style={styles.menuEditar}>
            <View style={{flex: 1}}>
              <Text style={styles.label}>Nome</Text>
              <Text style={styles.tituloOpcao}>{userName}</Text>
            </View>
            <Pressable>
              <Image source={require('../../../assets/images/icons/lapis.png')} resizeMode='cover'/>
            </Pressable>
        </View>
        <View style={styles.menuEditar}>
            <View style={{flex: 1}}>
              <Text style={styles.label}>Sobrenome</Text>
              <Text style={styles.tituloOpcao}>{userSobrenome}</Text>
            </View>
            <Pressable>
              <Image source={require('../../../assets/images/icons/lapis.png')} resizeMode='cover'/>
            </Pressable>
        </View>
        <View style={styles.menuEditar}>
            <View style={{flex: 1}}>
              <Text style={styles.label}>E-mail</Text>
              <Text style={styles.tituloOpcao}>{userEmail}</Text>
            </View>
            <Pressable>
              <Image source={require('../../../assets/images/icons/lapis.png')} resizeMode='cover'/>
            </Pressable>
        </View>
        <View style={styles.menuEditar}>
            <View style={{flex: 1}}>
              <Text style={styles.label}>Senha</Text>
              <Text style={styles.tituloOpcao}>{userSenha}</Text>
            </View>
            <Pressable>
              <Image source={require('../../../assets/images/icons/lapis.png')} resizeMode='cover'/>
            </Pressable>
        </View>
        <View style={styles.menuEditar}>
            <View style={{flex: 1}}>
              <Text style={styles.label}>Data de nascimento</Text>
              <Text style={styles.tituloOpcao}>04/01/2004</Text>
            </View>
            <Pressable>
              <Image source={require('../../../assets/images/icons/lapis.png')} resizeMode='cover'/>
            </Pressable>
        </View>
        <View style={styles.menuEditar}>
            <View style={{flex: 1}}>
              <Text style={styles.label}>Gênero</Text>
              <Text style={styles.tituloOpcao}>Masculino</Text>
            </View>
            <Pressable>
              <Image source={require('../../../assets/images/icons/lapis.png')} resizeMode='cover'/>
            </Pressable>
        </View>
      </View>
    </View>
  );
};