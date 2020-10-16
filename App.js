import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar } from 'react-native';
import firebase from './src/Services/firebaseConnection';
import AuthProvider from './src/Context/auth';

import Routes from './src/Rotas/Index';

export default function colaboradores() {
 return (
   <NavigationContainer>
     <AuthProvider>
   <StatusBar backgroundColor="#35AAFF" barStyle="light-content"/>
   <Routes/>
   </AuthProvider>
   </NavigationContainer>
   );
}