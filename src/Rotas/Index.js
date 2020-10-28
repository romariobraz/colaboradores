    import React, { useContext } from 'react';
    import {View, ActivityIndicator} from 'react-native';
    import {Authcontext} from '../Context/auth';
    import { NavigationContainer, } from '@react-navigation/native';

    import RotasOff from './RotasOff';
    import RotasOn from './RotasOn';

    function Routes(){
        const { signed,} = useContext(Authcontext);
        
        return(
            signed ? <RotasOn/> : <RotasOff/>
        )
    }

export default Routes;