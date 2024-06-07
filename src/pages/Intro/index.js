import { Image, Text, View } from 'react-native';
import styles from '../../../styles/styles';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useState } from 'react';
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

const slides = [
  {
    key: 1,
    titulo: 'O melhor app de finanças do mercado!',
    subtitulo: 'Controle suas finanças de forma prática e organizada',
    imagem: require('../../../assets/images/slider/intro1.png'),
  },
  {
    key: 2,
    titulo: 'Controle seus gastos, veja em forma de gráficos ',
    subtitulo: 'Uma forma mais simples de controlar suas despesas',
    imagem: require('../../../assets/images/slider/intro2.png'),
  },
  {
    key: 3,
    titulo: 'Visualize de uma forma clara suas despesas',
    subtitulo: 'Uma forma mais simples de controlar suas despesas',
    imagem: require('../../../assets/images/slider/intro3.png'),
  },
];

export default function Intro({navigation}) {

  useFonts({
    Inter_400Regular,
  }); 

  const [showHome, setShowHome] = useState(false);

  function renderSlides({item}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#21C25F'}}>
        <Text style={[styles.titulo, {fontFamily: 'Inter_400Regular'}]}>{item.titulo}</Text>
        <Text style={[styles.subtitulo, {fontFamily: 'Inter_400Regular'}]}>{item.subtitulo}</Text>
        <Image
          source={item.imagem}
          resizeMode='cover'
        />
      </View>
    );
  }

  if(showHome) {
    return <Text>oi</Text>
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={styles.bolinha}
        renderNextButton={() => <></>}
        renderDoneButton={() => <Text style={{color: 'white', fontFamily: 'Inter_400Regular', fontSize: 25, fontWeight: 'bold'}}>Continuar</Text>}
        onDone={() => navigation.navigate('Login')}
      />
  );
  }
}