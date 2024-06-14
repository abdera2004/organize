import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight+10 : 64;

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#21C25F',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 55
    },
    tituloLogin: {
        fontSize: 48,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10
    },
    bolinha: {
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 33,
        marginTop: 70,
        textAlign: 'center',
        fontFamily: 'Inter_400Regular'
    },
    subtitulo: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'       
    },
    subtituloLogin: {
        fontSize: 19,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 33,
        textAlign: 'left'       
    },
    divTitulo: {
        flex: 0.25,
        width: '100%',
        
    },
    divLogin: {
        flex: 0.5,
        backgroundColor: 'white',
        height: '50%',
        width: '100%',
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowOffset: {
            height: 7,
            width: 10
        },
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 30
    },
    divCadastro: {
        flex: 0.7,
        backgroundColor: 'white',
        height: '50%',
        width: '100%',
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowOffset: {
            height: 7,
            width: 10
        },
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 30
    },
    primeiraParteLogin: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    primeiraParteCadastro: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    segundaParteLogin: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    inputLogin: {
        fontSize: 24,
        fontWeight: 'bold',
        width: '100%',
        height: 60,
        borderRadius: 15,
        backgroundColor: 'black',
        color: '#fff',
        paddingStart: 8,
    },
    inputCadastro: {
        fontSize: 24,
        fontWeight: 'bold',
        width: '100%',
        height: 42,
        borderRadius: 15,
        backgroundColor: 'black',
        color: '#fff',
        paddingStart: 8
    },
    botaoLogar: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#21C25F',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowOffset: {
            height: 6,
            width: 4
        },
        borderRadius: 15,
        height: 60
    },
    textoBotaoLogar: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    criarConta: {
        flex: 0.2,
        width: '100%'
    },
    tituloCriarConta: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center' 
    },
    modal: {
        flex: 1,
        backgroundColor: '#00000070',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxModal: {
        width: '80%',
        height: '35%',
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textoModal: {
        fontSize: 48,
        color: '#21C25F',
        fontWeight: 'bold'
    },
    textoContinuarModal: {
        fontSize: 15,
        color: '#21C25F',
        fontWeight: 'bold'
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 15,
        width: '100%',
        justifyContent: 'center'
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
    },
    icon2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 42,
    },
    containerHome: {
        flex: 1,
        backgroundColor: '#1A1717',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    card: {
        height: 244,
        width: 344,
        backgroundColor: '#2B2525',
        borderRadius: 15,
        marginBottom: 20
    },
    primeiraMetadeCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    segundaMetadeCard: {
        flex: 1,
        justifyContent: 'space-between'
    },
    textoCard: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        paddingStart: 10,
        fontFamily: 'Inter_400Regular',
        marginTop: 10,
    },
    visibilidade: {
        paddingTop: 10,
        paddingEnd: 10
    },
    botaoCard: {
        color: '#21C25F',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Inter_400Regular',
        borderWidth: 1,
        borderColor: '#21C25F',
        backgroundColor: 'transparent',
        borderRadius: 15,
        width: '95%',
        alignItems: 'center'
    },
    alinhamentoBotao: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10
    },
    containerSaldo: {
        flex: 1,
        backgroundColor: '#1A1717',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textoSaldo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        width: '100%',
        paddingStart: 15,
        marginBottom: 60,
        fontFamily: 'Inter_400Regular',
    },
    listaBotoes: {
        flex: 0.3,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    botaoSaldo: {
        height: 80,
        width: 80,
        backgroundColor: '#2B2525',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoSaldo: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Inter_400Regular',
    },
    divBotaoSaldo: {
        alignItems: 'center',
        flex: 1
    },
    transacoes: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flex: 1,
        top: 150
    },
    transacaoENome: {
        flex: 1,
        alignItems: 'center'
    },
    textoVariavel: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Inter_400Regular',
    },
    textoRelatorio: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Inter_400Regular',
    },
    headerEditarPerfil: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: statusBarHeight,
        justifyContent: 'space-between',
        flex: 0.1,
        marginBottom: 20,
        paddingHorizontal: 5
    },
    menu: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    fotoPerfil: {
        height: 80,
        width: 80,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    nomeUsuario: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'Inter_400Regular',
        marginBottom: 20
    },
    opcaoMenu: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        justifyContent: 'center'
    },
    textoMenu: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Inter_400Regular',
        paddingVertical: 4,
        paddingStart: 5
    },
    lista: {
        borderTopWidth: 1,
        borderColor: 'white',
        flex: 1,
        width: '100%',
        margin: 14
    },
    menuEditar: {
        flex: 1,
        borderColor: 'white',
        borderTopWidth: 1,
        width: '100%',
        alignItems: 'center',   
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 5   
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#363535',
        fontFamily: 'Inter_400Regular'
    },
    tituloOpcao: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Inter_400Regular'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50
      },
});

export default styles;