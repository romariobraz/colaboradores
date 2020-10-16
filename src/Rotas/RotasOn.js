import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Paginas/Home';

const AppStack = createStackNavigator();

function RotasOn(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home}/>
        </AppStack.Navigator>
    )
}

export default RotasOn;