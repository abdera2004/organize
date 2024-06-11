import {View, Text} from 'react-native';
import styles from '../../../styles/styles';
import Header2 from '../../components/Header2';
import Navbar from '../../components/Navbar';

export default function Relatorio() {
  return (
    <View style={styles.containerSaldo}>
      <Header2 titulo={'Relatório'}/>
      <View style={styles.card}>
        <Text style={styles.textoCard}>Entradas x saídas</Text>
        <View style={styles.transacoes}>
          <View style={styles.transacaoENome}>
            <Text style={[styles.textoVariavel, {color: '#21C25F'}]}>0,00</Text>
            <Text style={styles.textoRelatorio}>Receitas</Text>
          </View>
          <View style={styles.transacaoENome}>
            <Text style={[styles.textoVariavel, {color: '#FF0000'}]}>0,00</Text>
            <Text style={styles.textoRelatorio}>Despesas</Text>
          </View>
          <View style={styles.transacaoENome}>
            <Text style={[styles.textoVariavel, {color: '#21B8C2'}]}>0,00</Text>
            <Text style={styles.textoRelatorio}>Saldo</Text>
          </View>
        </View>
      </View>
      <Navbar/>
    </View>
  );
};