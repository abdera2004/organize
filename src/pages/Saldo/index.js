import {View, Text, Pressable, Image, FlatList} from 'react-native';
import styles from '../../../styles/styles';
import Header2 from '../../components/Header2';
import Navbar from '../../components/Navbar';

export default function Saldo({navigation}) {
  return (
    <View style={styles.containerSaldo}>
        <Header2 titulo={'Saldo'}/>
        <Text style={styles.textoSaldo}>Disponível: R$0,00</Text>
        <View style={styles.listaBotoes}>
          <View style={styles.divBotaoSaldo}>
            <Pressable style={styles.botaoSaldo}>
              <Image source={require('../../../assets/images/icons/dinheiro-verde.png')} resizeMode='cover'/>
            </Pressable>
            <Text style={styles.textoBotaoSaldo}>Adicionar</Text>
          </View>

          <View style={styles.divBotaoSaldo}>
            <Pressable style={styles.botaoSaldo}>
              <Image source={require('../../../assets/images/icons/dinheiro-vermelho.png')} resizeMode='cover' style={{transform: [{ rotate: '180deg' }]}}/>
            </Pressable>
            <Text style={styles.textoBotaoSaldo}>Remover</Text>
          </View>

          <View style={styles.divBotaoSaldo}>
            <Pressable style={styles.botaoSaldo} onPress={() => navigation.navigate('Relatorio')}> 
              <Image source={require('../../../assets/images/icons/relatorio.png')} resizeMode='cover'/>
            </Pressable>
            <Text style={styles.textoBotaoSaldo}>Relatorio</Text>
          </View>
        </View>
        <FlatList />
        <Navbar/>
    </View>
  );
};