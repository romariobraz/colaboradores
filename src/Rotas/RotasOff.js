import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Paginas/Login';
import Cadastro from '../Paginas/Cadastro';

const AuthStack = createStackNavigator();

function RotasOff(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <AuthStack.Screen name="Cadastro" component={Cadastro} options={{headerTitle: 'Cadastre-se'}}/>
        </AuthStack.Navigator>
    )
}

export default RotasOff;