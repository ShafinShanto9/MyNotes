import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Pressable } from 'react-native/';
import Button from '../components/Button';
import InputField from '../components/InputField';

const auth = getAuth()

const genderOptions= ["Male", "Female"]

export default function Signup({ navigation }) {

  const [gender,setGender] = useState(null)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")
  const [age, setAge] = useState("")

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  
  return (
    <SafeAreaView style={{marginTop:Platform.OS === 'android' ? StatusBar.currentHeight:0, padding:10, flex:1}}>
      
      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        
        <InputField placeholder='Email Address' onChangeText={(text)=>setEmail(text)}/>
        <InputField placeholder='Password' secureTextEntry onChangeText={(text)=>setPassword(text)}/>
        <InputField placeholder='Full Name' onChangeText={(text)=>setName(text)}/>
        <InputField placeholder='Enter Your Age' onChangeText={(text)=>setAge(text)} />

        <View style={{marginBottom: 15}}>
          <Text>Select Gender</Text>
        </View>

        {
          genderOptions.map((option) => {
            const selected = option === gender
            return (
              <Pressable onPress={() => setGender(option)} key={option} style={styles.radioContainer}>
              <View style={[styles.outterCircle, selected && styles.selectedOuterCircle]}>
                <View style={[styles.innerCircle, selected && styles.selectedInnerCircle]}></View>
              </View>
              <Text style={styles.radioText}>{option}</Text>
            </Pressable>
            )
          })
        }

        <Button onPress={signup} title={"sign up"} customStyles={{alignSelf:'center', marginTop:30 }}/>
      </View>

      <View style={{flex:1,justifyContent:'flex-end',alignItems:'center' }}>
        <Pressable onPress={()=>{navigation.navigate('Signin')}}>
          <Text>
            Already have account ? <Text style={{color: 'purple', fontWeight:'bold',}}>Signin</Text>
          </Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  radioContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  outterCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    
  },
  radioText: {

  },
  selectedOuterCircle: {
    borderColor: 'purple'
  },
  selectedInnerCircle: {
    backgroundColor: 'purple',
    borderColor:'purple'
  }

})