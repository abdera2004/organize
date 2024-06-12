import {View, Text, Pressable, Image, FlatList} from 'react-native';
import styles from '../../../styles/styles';

export default function Contas({navigation}) {
  return (
    <View style={styles.containerHome}>
      <View style={[styles.headerEditarPerfil, {justifyContent: 'flex-start'}]}>
        <Pressable onPress={() => navigation.navigate('Perfil')}>
          <Image
            source={require('../../../assets/images/icons/esquerda.png')}
            resizeMode='cover'
          />
        </Pressable>
      </View>
    </View>
  );
};