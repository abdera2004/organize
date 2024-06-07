import React from "react";
import { View, StyleSheet, Text, StatusBar, Pressable } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight+22 : 64;

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.conteudo}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1717',
        paddingTop: statusBarHeight,
    }
})