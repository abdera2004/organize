import { View, Text, Pressable, TextInput, Image, Alert } from 'react-native';
import styles from '../../../styles/styles';
import { useState } from 'react';
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { getUserByEmailAndPassword } from '../../database/database';

export default function Login({navigation}) {

    useFonts({
        Inter_400Regular,
      });
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [hidePass, setHidePass] = useState(true);

    const handleLogin = async () => {
        try {
          const user = await getUserByEmailAndPassword(email, senha);
          navigation.navigate('Home', { userId: user.id, userName: user.nome }); // Passar o ID e nome do usuário para a tela inicial
        } catch (error) {
          Alert.alert('Erro de Login', error.message);
        }
      };

  return (
    <View style={styles.container}>
        <View style={styles.divTitulo}>
            <Text style={styles.tituloLogin}>Login</Text>
            <Text style={styles.subtituloLogin}>Faça login, ou cadastre-se caso seja novo!</Text>
        </View>
        <View style={styles.divLogin}>
            <View style={styles.primeiraParteLogin}>
                <TextInput style={styles.inputLogin} placeholder='E-mail' placeholderTextColor={'#fff'} value={email} onChangeText={setEmail}/>
                <View style={styles.inputArea}>
                    <TextInput style={styles.inputLogin} placeholder='Senha' placeholderTextColor={'#fff'} value={senha} onChangeText={setSenha} secureTextEntry={hidePass}/>
                    <Pressable style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                        {hidePass ?
                            <Image source={require('../../../assets/images/icons/visivel.png')}
                            resizeMode='cover'
                            style={{height: 42, width: 42}}
                            />
                            :
                            <Image source={require('../../../assets/images/icons/invisivel.png')}
                            resizeMode='cover'
                            style={{height: 42, width: 42}}
                            />      
                        }
                    </Pressable>
                </View>
            </View>
            <View style={styles.segundaParteLogin}>
                <Pressable style={styles.botaoLogar} onPress={handleLogin}>
                    <Text style={styles.textoBotaoLogar}>Logar</Text>
                </Pressable>
            </View>
        </View>
            <View style={styles.criarConta}>
                <Pressable onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.tituloCriarConta}>Criar uma conta</Text>
                </Pressable>
            </View>        
    </View>
  );
};
