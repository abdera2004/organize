import React from "react";
import { View, StyleSheet, Text, StatusBar} from "react-native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight+10 : 40;

export default function Header2({titulo}) {

    useFonts({
        Inter_400Regular,
    });

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{titulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingHorizontal: 16,
        width: '100%',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    texto: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        fontFamily: 'Inter_400Regular',
    },
})