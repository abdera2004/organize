import { View, Text, Pressable } from "react-native";
import styles from '../../../styles/styles';
import Header from '../../../src/components/Header';

export default function Home({navigation}) {
  return (
    <View style={styles.containerHome}>
        <Header/>
    </View>
  );
};
