import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { Authcontext } from '../../Context/auth';

export default function Home() {
  
  const { userC } = useContext(Authcontext);

 return (
   <View>
       <Text>Home</Text>
       <Text>{userC && userC.Nome}</Text>
       <Text>{}</Text>
   </View>
  );
}