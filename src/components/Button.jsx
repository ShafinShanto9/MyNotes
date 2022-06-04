import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({title, onPress, customStyles}) => {
  return (
    <TouchableOpacity style={[styles.button, customStyles] } onPress={onPress}>
        <Text style={styles.title}>{ title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        width: 165,
        height: 45,
        backgroundColor: "#6A0DAD",
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        color:'#fff'
    }
})

export default Button