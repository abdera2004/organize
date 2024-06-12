import {View, Text, Pressable, Image, FlatList} from 'react-native';
import styles from '../../../styles/styles';
import Header2 from '../../components/Header2';
import Navbar from '../../components/Navbar';
import Movimentos from '../../components/Movimentos';

const list = [
  {
    id: 1,
    saldo: 'Saldo adicionado:',
    valor: '100,00',
    data: '29/05/2024',
    remetente: 'João Silva',
    type: 1 //receita
  },
  {
    id: 2,
    saldo: 'Saldo removido:',
    valor: '100,00',
    data: '29/05/2024',
    remetente: 'Academia fitness',
    type: 0 //despesa
  }
]

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
            <Text style={styles.textoBotaoSaldo}>Relatório</Text>
          </View>
        </View>
        <FlatList style={styles.lista} data={list} keyExtractor={(item) => String(item.id)} showsVerticalScrollIndicator={false} renderItem={({item}) => <Movimentos data={item}/>}/>
        <Navbar/>
    </View>
  );
};