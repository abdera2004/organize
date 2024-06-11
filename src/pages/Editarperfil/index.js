import {View, Text, Pressable, FlatList, Image} from 'react-native';
import styles from '../../../styles/styles';

export default function App() {
  return (
    <View style={styles.containerHome}>
      <View style={[styles.headerEditarPerfil, {marginBottom: 30}]}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../../assets/images/icons/esquerda.png')}
            resizeMode='cover'
            style={{width: 60, height: 60}}
          />
        </Pressable>
        <Text style={[styles.textoCard, {paddingEnd: 140}]}>Editar perfil</Text>
        <Pressable>
          <Text style={styles.textoCard}>Salvar</Text>
        </Pressable>
      </View>
      <View style={styles.menu}>
        <View style={styles.fotoPerfil}>
          <Image source={require('../../../assets/images/icons/user.png')} resizeMode='cover'/>
        </View>
        <Text style={styles.nomeUsuario}>Ruan</Text>
        <Pressable onPress={() => navigation.navigate('Editarperfil')}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: '#21C25F', fontFamily: 'Inter_400Regular', padding: 5}}>Alterar imagem</Text>
        </Pressable>
        <FlatList></FlatList>
      </View>
    </View>
  );
};