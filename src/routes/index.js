//inverter o intro com a home após terminar

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../pages/Intro';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Saldo from '../pages/Saldo';
import Relatorio from '../pages/Relatorio';
import Perfil from '../pages/Perfil';
import Editarpefil from '../pages/Editarperfil';
import Contas from '../pages/Contas';

const Stack = createNativeStackNavigator();

const Routes = () =>{
    return(
        
        <Stack.Navigator>
            <Stack.Screen
            name="Intro"
            component={Intro}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name='Cadastro'
            component={Cadastro}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name='Home'
            component={Home}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name='Saldo'
            component={Saldo}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name='Relatorio'
            component={Relatorio}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name='Perfil'
            component={Perfil}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name='Editarperfil'
            component={Editarpefil}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name='Contas'
            component={Contas}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default Routes;