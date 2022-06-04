import React from 'react';
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { Pressable } from 'react-native/';
import Button from '../components/Button';

export default function Signin() {
  return (
    <SafeAreaView style={{marginTop:Platform.OS === 'android' ? StatusBar.currentHeight:0, padding:10, flex:1}}>
      <Image
        source={require("../images/login.jpg")}
        style={{alignSelf:'center',height:250, width:300,}}
      />
      <Text style={{ fontWeight:'bold', fontSize:18 , textAlign:'center', marginVertical:15}}>
        Never Forget Your Notes
      </Text>

      <View style={{paddingHorizontal:16, paddingVertical:25}}>
        <TextInput
          style={styles.input}
          placeholder='Email Adress'
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry
        />

        <Button title={"Login"} customStyles={{alignSelf:'center', marginTop:30 }}/>
      </View>

      <View style={{flex:1,justifyContent:'flex-end',alignItems:'center' }}>
        <Pressable>
          <Text>
            Don't have an account ? <Text style={{color: 'purple'}}>Signup</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 25
  }
})