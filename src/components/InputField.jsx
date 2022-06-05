import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function InputField({placeholder,secureTextEntry,onChangeText}) {
  return (
    <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText= {onChangeText}
        />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 25
  }
})