import { View, Text, Pressable, TextInput, Modal, Image} from 'react-native';
import styles from '../../../styles/styles';
import { useState } from 'react';
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

export default function Cadastro({navigation}) {

    useFonts({
        Inter_400Regular,
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const [input2, setInput2] = useState('');
    const [hidePass2, setHidePass2] = useState(true);
    
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
                <View style={styles.inputArea}>
                  <TextInput style={styles.inputCadastro} placeholder='Senha' placeholderTextColor={'#fff'} value={input} onChangeText={(texto) => setInput(texto)} secureTextEntry={hidePass}/>
                  <Pressable style={styles.icon2} onPress={() => setHidePass(!hidePass)}>
                        {hidePass ?
                            <Image source={require('../../../assets/images/icons/visivel.png')}
                            resizeMode='cover'
                            style={{height: 35, width: 35}}
                            />
                            :
                            <Image source={require('../../../assets/images/icons/invisivel.png')}
                            resizeMode='cover'
                            style={{height: 35, width: 35}}
                            />      
                        }
                    </Pressable>
                </View>
                <View style={styles.inputArea}> 
                  <TextInput style={styles.inputCadastro} placeholder='Confirmar senha' placeholderTextColor={'#fff'} value={input2} onChangeText={(texto) => setInput2(texto)} secureTextEntry={hidePass2}/>
                  <Pressable style={styles.icon2} onPress={() => setHidePass2(!hidePass2)}>
                        {hidePass2 ?
                            <Image source={require('../../../assets/images/icons/visivel.png')}
                            resizeMode='cover'
                            style={{height: 35, width: 35}}
                            />
                            :
                            <Image source={require('../../../assets/images/icons/invisivel.png')}
                            resizeMode='cover'
                            style={{height: 35, width: 35}}
                            />      
                        }
                    </Pressable>
                </View> 
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
