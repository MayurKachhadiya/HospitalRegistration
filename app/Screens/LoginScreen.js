import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'
import { ErrorMessage, Form,FormField,SubmitButton } from '../components/Forms'

export default function LoginScreen({navigation}) {
  const [loginFailed, setLoginFailed] = useState(false);
  const [loading,setLoading] = useState(false);

  return (
   <>
   <Screen style={styles.container}>
    <Image 
    style={styles.logo}
    source={require("../assets/logo-hospital.png")}
    />
    <Form
    initialValues={{
      email:'',
      password:''
    }}

    > 

    <ErrorMessage error="Invalid Email/password" visible={loginFailed} />
    <FormField
      maxLength={255}
      name="email"
      placeholder="Your Email"
    />
    <FormField
      
      name="password"
      placeholder="Your Password"
      secureTextEntry={true}
    />
    <SubmitButton title="Login" />
    <TouchableOpacity style={styles.redirect} onPress={() => navigation.navigate('Register')} >
      <Text>Not an Account?</Text>
    </TouchableOpacity>
    </Form>
   </Screen>
   </>
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
      },
      text:{
        textAlign:"center"
      },
      redirect:{
        marginTop:10,
        marginBottom:10
      }
})