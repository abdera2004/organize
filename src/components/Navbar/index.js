import React from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function Navbar() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.iconBehave} android_ripple={{borderless:true, radius:50}}>
                    <Image source={require('../../../assets/images/icons/casa-inativo.png')} style={{width: 40, height: 40}}/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Saldo')} style={styles.iconBehave} android_ripple={{borderless:true, radius:50}}>
                    <Image source={require('../../../assets/images/icons/setas-inativo.png')} style={{width: 40, height: 40}}/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.iconBehave} android_ripple={{borderless:true, radius:50}}>
                    <Image source={require('../../../assets/images/icons/mais-inativo.png')} style={{width: 40, height: 40}}/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Relatorio')} style={styles.iconBehave} android_ripple={{borderless:true, radius:50}}>
                    <Image source={require('../../../assets/images/icons/grafico-inativo.png')} style={{width: 40, height: 40}}/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.iconBehave} android_ripple={{borderless:true, radius:50}}>
                    <Image source={require('../../../assets/images/icons/alvo-inativo.png')} style={{width: 40, height: 40}}/>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20,
        flex: 1
    },
    navBar: {
        flexDirection: 'row',
        backgroundColor: '#37363695',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 50
    },
    iconBehave: {
        padding: 14
    }
})