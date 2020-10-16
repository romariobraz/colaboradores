import React, { createContext, useState, useEffect } from 'react';
import firebase from '../Services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';

export const Authcontext = createContext({});

function AuthProvider({ children }){
    const [userC, SetuserC] = useState(null);

    useEffect(()=> {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');
            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
     }, []);

    //Loga user
    async function logaCol(Login, Senha){
        await firebase.auth().signInWithEmailAndPassword(Login, Senha)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('Colaboradores').child(uid).once('value')
            .then((snapshot)=>{
                let data = {
                    uid: uid,
                    AccolLvl: snapshot.val().AccolLvl,
                    CNPJ: snapshot.val().CNPJ,
                    Cep: snapshot.val().Cep,
                    Cnh: snapshot.val().Cnh,
                    Email: value.user.Email,
                    Endereco: snapshot.val().Endereco,
                    Idade: snapshot.val().Idade,
                    Nome: snapshot.val().Nome,
                };

                SetuserC(data);
                storageUser(data);
            })
        })
        .catch((error)=> {
            alert(error.code);
        });
    }

    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    return(
        <Authcontext.Provider value={{ signed: !!userC , userC, logaCol,}}>
            {children}
        </Authcontext.Provider>
    );
}

export default AuthProvider;