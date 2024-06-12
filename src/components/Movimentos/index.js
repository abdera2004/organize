import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { useState } from 'react';

export default function Movimentos({data}) {

    useFonts({
        Inter_400Regular,
    });

    const [showValue, setShowValue] = useState(false);

 return (
   <Pressable style={styles.container} onPress={() => setShowValue(!showValue)}>
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.texto}>{data.saldo}</Text>
            {showValue ? (
                <Text style={data.type === 1 ? styles.valor : styles.despesa}> {data.type === 1 ? `R$ ${data.valor}` : `R$ -${data.valor}`}</Text>
            ) : (
                <View style={styles.escondido}>

                </View>
            )}
        </View>    
            <Text style={styles.texto}>{data.data}</Text>
            <Text style={styles.texto}>{data.remetente}</Text>
   </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    valor: {
        color: '#21C25F',
        fontWeight: 'bold',
        fontFamily: 'Inter_400Regular',
        fontSize: 15
    },
    despesa: {
        color: 'red',
        fontWeight: 'bold',
        fontFamily: 'Inter_400Regular',
        fontSize: 15
    },
    escondido: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#2B2525',
        borderRadius: 8,
        marginStart: 5,
    }
})