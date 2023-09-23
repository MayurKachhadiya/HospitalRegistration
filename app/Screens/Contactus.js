import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'
import { ErrorMessage, Form,FormField,SubmitButton } from '../components/Forms'
import Firebase from '../config/firebase'
import useAuth from '../auth/useAuth'
import ActivityIndicator from '../components/ActivityIndicator'
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name:Yup.string().max(255).required('Name is required'),
  message:Yup.string().max(255).required('Message is required'),
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
})

export default function Contactus({navigation}) {
  const [loginFailed, setLoginFailed] = useState(false);
  const [loading,setLoading] = useState(false);

  const auth = useAuth();
  const handleSubmit = async ({email}) => {
    try { 
      setLoading(true);
      const {user} = await Firebase.auth().signInWithEmailAndPassword(email);
      setLoginFailed(false);
      auth.logIn(user);
      setLoading(false);
    } catch (error) {
      console.log("Error While Login ",error);
      setLoading(false);
      return setLoginFailed(true); 
    }
    setLoading(false);
      return;
  }

  return (
    <>
    <ActivityIndicator visible={loading}/>
    <Screen style={styles.container}>
     <Image 
     style={styles.logo}
     source={require("../assets/logo-hospital.png")}
     />
     <Form
     initialValues={{
       email:''
     }}
 
     onSubmit={handleSubmit}
     validationSchema={validationSchema}
    
     > 
 
     <ErrorMessage error="Invalid Email" visible={loginFailed} />
     <FormField
       maxLength={255}
       name="name"
       placeholder="Your name"
       
     />
     <FormField
       name="message"
       placeholder="Your message"
     />
     <FormField
       maxLength={255}
       name="email"
       placeholder="Your Email"
     />
     <SubmitButton title="Submit" />
     {/* <TouchableOpacity style={styles.redirect} onPress={() => navigation.navigate('Register')} >
       <Text>Not an Account?</Text>
     </TouchableOpacity> */}
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