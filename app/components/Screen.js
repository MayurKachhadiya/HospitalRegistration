<<<<<<< HEAD
import { StyleSheet,Text,View,SafeAreaView } from "react-native";
import React from 'react'
import Constants from 'expo-constants'
export default function Screen({children,style}){
    return(
        <SafeAreaView style={[styles.screen,style]}>
            {children}
        </SafeAreaView>
    )
=======
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react';
import Constants from 'expo-constants'

export default function Screen({children,style}) {
  return (
   <SafeAreaView style={[styles.screen,style]}>
        {children}
   </SafeAreaView>
  )
>>>>>>> 932d73c (hospital side completed)
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        flex:1
    }
})