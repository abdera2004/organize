import { View, Text, Pressable, TextInput, Modal, Image, Alert} from 'react-native';
import styles from '../../../styles/styles';
import { useState, useEffect } from 'react';
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import * as SQLite from 'expo-sqlite';
import { createTable, insertUser, deleteDatabase} from '../../database/database';

export default function Cadastro({navigation}) {

    useFonts({
      Inter_400Regular,
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [hidePass, setHidePass] = useState(true);
    const [input2, setInput2] = useState('');
    const [hidePass2, setHidePass2] = useState(true);

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [foto, setFoto] = useState(null);

    useEffect(() => {
      createTable();
    }, []);

    const handleCadastro = async () => {
        try {
          const userId = await insertUser(nome, sobrenome, email, senha); // Supondo que esta função retorne o ID do usuário inserido
          setNome('');
          setSobrenome('');
          setEmail('');
          setSenha('');
          navigation.navigate('Login', { userId }); // Passa o ID do usuário como parâmetro
        } catch (error) {
          console.error('Erro ao cadastrar usuário:', error);
          Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário.');
        }
      };

  return (
    <View style={styles.container}>
        <View style={styles.divTitulo}>
            <Text style={styles.tituloLogin}>Cadastro</Text>
            <Text style={styles.subtituloLogin}>Entre para o melhor app de finanças!</Text>
        </View>
        <View style={styles.divCadastro}>
            <View style={styles.primeiraParteCadastro}>
                <TextInput style={styles.inputCadastro} placeholder='Seu nome' placeholderTextColor={'#fff'} value={nome} onChangeText={setNome}/>
                <TextInput style={styles.inputCadastro} placeholder='Seu sobrenome' placeholderTextColor={'#fff'} value={sobrenome} onChangeText={setSobrenome}/>
                <TextInput style={styles.inputCadastro} placeholder='E-mail' placeholderTextColor={'#fff'} value={email} onChangeText={setEmail} keyboardType='email-address'/>
                <View style={styles.inputArea}>
                  <TextInput style={styles.inputCadastro} placeholder='Senha' placeholderTextColor={'#fff'} value={senha} onChangeText={setSenha} secureTextEntry={hidePass}/>
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
                <Pressable style={styles.botaoLogar} onPress={() => handleCadastro()}>
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
            <Pressable onPress={() => [navigation.navigate('Login'), setModalVisible(false)]}>
              <Text style={styles.textoContinuarModal}>Conta criada com sucesso!</Text>
            </Pressable>
          </View>
        </View>
    </Modal>
    </View>
  );
};
