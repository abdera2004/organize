import { StyleSheet } from "react-native";

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
    }
});

export default styles;