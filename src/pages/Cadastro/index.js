import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, TextInput, Modal, Image} from 'react-native';
import styles from '../../../styles/styles';
import { useState } from 'react';
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

export default function Cadastro({navigation}) {

    useFonts({
        Inter_400Regular,
    });

    const [modalVisible, setModalVisible] = useState(false);
    
  return (
    <View style={styles.container}>
        <View style={styles.divTitulo}>
            <Text style={styles.tituloLogin}>Cadastro</Text>
            <Text style={styles.subtituloLogin}>Entre para o melhor app de finanças!</Text>
        </View>
        <View style={styles.divCadastro}>
            <View style={styles.primeiraParteCadastro}>
                <TextInput style={styles.inputCadastro} placeholder='Seu nome' placeholderTextColor={'#fff'}/>
                <TextInput style={styles.inputCadastro} placeholder='Seu sobrenome' placeholderTextColor={'#fff'}/>
                <TextInput style={styles.inputCadastro} placeholder='E-mail' placeholderTextColor={'#fff'}/>
                <TextInput style={styles.inputCadastro} placeholder='Senha' placeholderTextColor={'#fff'}/>
                <TextInput style={styles.inputCadastro} placeholder='Confirmar senha' placeholderTextColor={'#fff'}/>
            </View>
            <View style={styles.segundaParteLogin}>
                <Pressable style={styles.botaoLogar} onPress={() => setModalVisible(true)}>
                    <Text style={styles.textoBotaoLogar}>Criar conta</Text>
                </Pressable>
            </View>
        </View>
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <View style = {styles.boxModal}>
            <Text style={styles.textoModal}>Parabéns!</Text>
            <Image
                source={require('../../../assets/images/icons/coracao.png')}
                resizeMode='cover'
                style={{height: 100, width: 100}}
            />
            <Pressable onPress={() => [navigation.navigate('Home'), setModalVisible(false)]}>
              <Text style={styles.textoContinuarModal}>Conta criada com sucesso!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
