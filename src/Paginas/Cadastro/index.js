import React, { Component, useEffect, useState, useContext} from 'react';
import { View, Text, Button, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity,
Modal, Image } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import firebase from '../../Services/firebaseConnection';
console.ignoredYellowBox = ['Setting a timer'];

export default function Cadastro() {
  const[Email, setEmail] = useState('');
  const[Senha, setSenha] = useState('');
  const[Nome, setNome] = useState('');
  const[Idade, setIdade] = useState('');  
  const[Modalv, setModalv] = useState('false');
  const[CNPJ, setCNPJ] = useState('');
  const[Endereco] = useState('');
  const[Cep, setCep] = useState('');
  const[Cnh, setCnh] = useState('');
  const[AccLvl] = useState('');
  const[Cidade, setCidade] = useState('');

  async function criaconta(){
    await firebase.auth().createUserWithEmailAndPassword(Email, Senha).then((value) => {
      let uid = value.user.uid;
      firebase.database().ref('Colaboradores').child(value.user.uid).set({
        Nome: Nome,
        Idade: Idade,
        Email: Email,
        CNPJ: CNPJ,
        Endereco: Endereco,
        AccolLvl: 0,
        Cnh: Cnh,
        Cep: Cep,
      });
      alert('Usuario cadastrado com sucesso.');
      setNome('');
      setEmail('');
      setSenha('');
      setIdade('');
      setCNPJ('');
      setCnh('');
      setModalv('false');
      setCep('');
      setCidade('');
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
  };

 return (
  <ScrollView keyboardShouldPersistTaps="always">
    <KeyboardAvoidingView >
    <View style={styles.corpo}>
        {/*Logo*/}
          <View style={styles.Logo}>
          <Image source={require('../../assets/logosf.png')}
          style={styles.Logoimg}/>
          <Text style={styles.FonRec}>Venha crescer conosco!</Text>
          </View>

      {/*Campos do cadastro*/}
      <TextInput style={styles.Entrada1}
      placeholder="Nome e Sobrenome" underlineColorAndroid="transparent" 
      onChangeText={Nome => setNome(Nome)} value={Nome}/>

      <TextInputMask style={styles.Entrada1}
      type={'datetime'} options={{format: 'DD/MM/YYYY'}}
      value={Idade}placeholder="Digite sua data de nascimento"
      onChangeText={Idade => {setIdade(Idade); }}/>

      <TextInput style={styles.Entrada1}
      placeholder="Digite seu Email" underlineColorAndroid="transparent" 
      onChangeText={Email => setEmail(Email)} value={Email}/>

      <TextInputMask style={styles.Entrada1}
      type={'cnpj'} options={{format: '99.999.999/9999-99'}}
      value={CNPJ} placeholder="Insira seu CNPJ"
      onChangeText={text => {setCNPJ(text); }}/>

      <TextInput style={styles.Entrada1}
      placeholder="Digite o registro da sua CNH" underlineColorAndroid="transparent" 
      onChangeText={Cnh => setCnh(Cnh)} value={Cnh}/>

      <TouchableOpacity style={styles.Btn1} onPress={() => {setModalv(true)}}>
      <Text style={styles.Fonte2}> Próximo </Text>
      </TouchableOpacity>
      </View>  

      {/*Modal continuação do cadastro*/}
      <Modal  animationType={"slide"}  visible={Modalv} transparent={true}>
      <View style={styles.modal1}>
        <TouchableOpacity 
        style={styles.close}
        onPress={() => {setModalv(!Modalv);}}>
        <Image
        style={{width:30,height:30,position:'absolute'}}
        source={require('../../assets/close.png')}/>
                            
        </TouchableOpacity>
        <Text style={styles.Texto1}>Agora vamos proteger sua conta UD:</Text>
        <TextInput style={styles.Entrada2} underlineColorAndroid="transparent"
        placeholder=" Crie sua senha " secureTextEntry={true} onChangeText={() => {}}/>
        <TextInput style={styles.Entrada2} underlineColorAndroid="transparent" 
        placeholder=" Repita sua senha" secureTextEntry={true} onChangeText={Senha => setSenha(Senha)}/>
        <TouchableOpacity style={styles.btnprox} onPress={criaconta}>
        <Text style={styles.txtprox}>Concluir</Text>
        </TouchableOpacity>
        </View>
      </Modal>


  </KeyboardAvoidingView>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  corpo:{
    flex: 1,
  backgroundColor:'#f2f2f2',
    height: '100%',
  },
  Texto1:{
    fontSize: 18,
    marginTop: 15,
    color: '#32816a',
    alignSelf:'center',
  },
  FonRec:{
    marginTop: -5,
    fontSize: 23,
    justifyContent: 'center',
    textAlign:'center',
   color:'#32816a',
  },
  Btn1:{
    backgroundColor:'#32816a',
    width: '45%',
    height: 53,
    fontSize: 30,
    borderRadius: 15,
    color:'white',
    marginTop: '3%',
    alignSelf:'center',
    marginBottom: '7%',
  },
  Logo:{
    marginTop: 50, 
    alignItems: 'center',
    justifyContent:'center',
  },
  Logoimg:{
    marginTop: -25,
    width: '42%',
    height: 230,
  },
  Entrada1:{
    height: '7%',
    width: '75%',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    marginTop: '3%',
    borderRadius: 15,
    fontSize: 19,
    padding: 10,
    alignSelf:'center',
  },
  Entrada2:{
    height: 45,
    width: '75%',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    marginTop: '3%',
    borderRadius: 15,
    fontSize: 19,
    padding: 10,
    alignSelf:'center',
  },
  Fonte2:{
    fontSize:19,
    marginTop: 10,
    color: 'white',
    alignSelf:'center',
  },
  modal1:{
    width: '87%',
    height: '80%',
    backgroundColor:'white',
    borderColor: '#32816a',
    backgroundColor:'#f2f2f2',
    borderWidth: 5,
    borderRadius: 3,
    marginLeft:20,
    marginTop: 180,
    shadowColor:'black',
  },
  close:{
    width:30,
    height:30,
    borderRadius:50,
    marginTop:'2%',
    marginLeft:'90%',
  },
  btnprox: {
    backgroundColor:'#32816a',
    width: 260,
    height: 60,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius: 12,
    marginTop: 10,
  },
  txtprox:{
    fontSize: 22,
    color: 'white',
  },
});