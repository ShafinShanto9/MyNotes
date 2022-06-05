import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function InputField({placeholder,secureTextEntry}) {
  return (
    <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
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