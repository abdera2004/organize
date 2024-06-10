import { View, Text, Pressable, Image } from "react-native";
import styles from '../../../styles/styles';
import Header from '../../../src/components/Header';

export default function Home({navigation}) {
  return (
    <View style={styles.containerHome}>
        <Header/>
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
            <Pressable style={styles.botaoCard}>Gerenciar contas</Pressable>
          </View>
        </View>
    </View>
  );
};
