import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Authcontext } from '../../Context/auth';
import { useNavigation } from '@react-navigation/native';

export default function Dados() {
    return(
        <View>
            <Text style={styles.Fonte1}>Dados cadastrais</Text>
        </View>
    );    
}

const styles = StyleSheet.create({
Fonte1:{
    fontSize:31,
    marginTop: 5,
    color: '#35AAFF',
    alignSelf:'center',
  },
})