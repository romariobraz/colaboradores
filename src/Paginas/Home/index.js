import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Authcontext } from '../../Context/auth';
import { useNavigation } from '@react-navigation/native';



export default function Home() {

  const navigation = useNavigation();

  function irDados(){
    navigation.navigate('Dados');
  }
  
  const { userC } = useContext(Authcontext);

 return (
  <View style={styles.bckgrd}>

      <Image source={require('../../assets/logobranc.png')}
      style={styles.Logob}/>

      <View style={styles.cbc}>
        <Text style={styles.Fonte}>Seja bem vindo!</Text>
        <Text style={styles.Fonte}>{userC.Nome}</Text>
        <Text style={styles.Fonte2}>Aqui nós crescemos juntos.</Text>

      <TouchableOpacity style={styles.Btn1} onPress={irDados}>
      <Text style={styles.Fonte1}> 1...Dados Cadastrais </Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.Btn1}>
      <Text style={styles.Fonte1}> 2...Dados do Veículo </Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.Btn1}>
      <Text style={styles.Fonte1}> 3...Rentabilidade e Histórico </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BtnOff}>
      <Text style={styles.Fonte1}> Entrar </Text>
      </TouchableOpacity>

      </View>

    
  </View>      
  );
}
const styles = StyleSheet.create({
  Fonte:{
    fontSize: 26,
    textAlign:'center',
    marginTop: 3,
    color: 'white',
  },
  cbc:{
    flex: 1,
    marginTop: 25,
  },
  body:{
    flex: 1,
    marginTop: 100,    
  },
  Btn1:{
    width: '80%',
    height: 53,
    fontSize: 30,
    borderRadius: 15,
    color:'white',
    alignSelf:'center',
    marginTop: '5%',
  },
  Fonte1:{
    fontSize:23,
    marginTop: 5,
    color: 'black',
    alignSelf:'center',
    color: 'white',
  },
  Fonte2:{
    fontSize:20,
    marginTop: 5,
    color: 'white',
    alignSelf:'center',
    marginBottom: 40,
  },
  BtnOff:{
    width: '80%',
    height: 53,
    fontSize: 30,
    borderRadius: 15,
    color:'white',
    marginTop: '3%',
    alignSelf:'center',
    marginTop: '5%',
  },
  Logob:{
    width: '40%',
    height: '25%',
    alignSelf:"center"
  },
  bckgrd:{
    backgroundColor: '#32816a',
    width: '100%',
    height: '100%'
  }
})