import {Image, StyleSheet,Text,View } from "react-native";
import React from 'react'
import Screen from '../components/Screen'
import colors from "../config/colors";
export default function LoginScreen(){
    return(
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-hospital.png")} />
      </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey,
        alignItems: 'center',
        padding:10,
        justifyContent: 'center',
      },
      logo:{
        height:150,
        width:150,
        alignSelf:'center'
      }
})