import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Pressable } from 'react-native/';
import Button from '../components/Button';
import InputField from '../components/InputField';

export default function Signup({ navigation }) {
  const selected = true
  return (
    <SafeAreaView style={{marginTop:Platform.OS === 'android' ? StatusBar.currentHeight:0, padding:10, flex:1}}>
      
      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        
        <InputField placeholder='Email Address'/>
        <InputField placeholder='Password'secureTextEntry/>
        <InputField placeholder='Full Name'/>
        <InputField placeholder='Enter Your Age' />
        
        <Pressable style={styles.radioContainer}>
          <View style={[styles.outterCircle, selected && styles.selectedOuterCircle ]}>
            <View style={[styles.innerCircle, selected && styles.selectedInnerCircle ]}></View>
          </View>
          <Text style={styles.radioText}>Male</Text>
        </Pressable>

        <Pressable style={styles.radioContainer}>
          <View style={styles.outterCircle}>
            <View style={styles.innerCircle}></View>
          </View>
          <Text style={styles.radioText}>Female</Text>
        </Pressable>

        <Button title={"sign up"} customStyles={{alignSelf:'center', marginTop:30 }}/>
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