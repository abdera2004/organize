import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../pages/Intro';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

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
        </Stack.Navigator>
    );
};

export default Routes;