import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

export default function Movimentos({data}) {

    useFonts({
        Inter_400Regular,
    });

 return (
   <View style={styles.container}>
        <View style={styles.conteudo}>
            <Text style={styles.texto}>{data.saldo} R$ {data.valor}</Text>
            <Text style={styles.texto}>{data.data}</Text>
            <Text style={styles.texto}>{data.remetente}</Text>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        borderBottomWidth: 1,
        borderColor: 'white',
        width: '100%',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Inter_400Regular',
        paddingStart: 8,
        paddingBottom: 4
    },
    conteudo: {
    },
    valor: {
        color: '#21C25F',
        fontWeight: 'bold',
        fontFamily: 'Inter_400Regular',
        fontSize: 15
    }
})