import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Paginas/Home';
import Dados from '../Paginas/Dados';

const AppStack = createStackNavigator();

function RotasOn(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <AppStack.Screen name="Dados" component={Dados} options={{headerShown:false}}/>
        </AppStack.Navigator>
    )
}

export default RotasOn;