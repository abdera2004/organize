import React from "react";
import { View, StyleSheet, Text, StatusBar, Pressable } from "react-native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight+22 : 64;

export default function Header() {

    useFonts({
        Inter_400Regular,
    });

    return (
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.texto}>oioioioioio</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingHorizontal: 16,
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        width: '100%',
        alignItems: 'center'
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }
})