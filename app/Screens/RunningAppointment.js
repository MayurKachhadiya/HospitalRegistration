import { ScrollView, StyleSheet, Text, View,ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuth from '../auth/useAuth'
import Firebase from '../config/firebase';
import Screen from '../components/Screen';
<<<<<<< HEAD
//import RunningAppoinmentCard from '../components/RunningAppoinmentCard';
//import ActivityIndicator from '../components/ActivityIndicator';

export default function RunningAppointment() {
  const [loading,setLoading] = useState(false);
  const {userData} = useAuth();
  // const [Data,setData] = useState([]);
  const [RunningAppointments,setRunningAppointments] = useState([]);
=======
import RunningAppoinmentCard from '../components/RunningAppoinmentCard';

export default function RunningAppointment() {
  const {userData} = useAuth();
  const [Data,setData] = useState([]);
>>>>>>> 932d73c (hospital side completed)
  const db = Firebase.firestore();

  const HandleCheck = async (name,email,disease,phone_no,id) => {
    const createdAt = new Date();
<<<<<<< HEAD
    const userRef = Firebase.firestore().collection('AppUsers').doc(userData.id).collection('Appointment_History');

    try {
=======
    const userRef = Firebase.firestore().collection('hospitals').doc(userData.id).collection('Appointment_History');

    try {
      console.log(userData.id);
>>>>>>> 932d73c (hospital side completed)
      await userRef.add({
        name,
        email,
        disease,
        contact_no:phone_no,
<<<<<<< HEAD
        date: new Date().toString()
      }).then(data => {
        ToastAndroid.show("Appointment Added in History",ToastAndroid.SHORT);
        
      })
      await Firebase.firestore().collection('AppUsers').doc(userData.id).collection('RunningAppointments').doc(id).delete();
    } catch (error) {
      // console.log(error);
=======
        date: new Date()
      }).then(data => {
        ToastAndroid.show("Appointment Added in History",ToastAndroid.SHORT);
        
      }).catch(err => console.log(err))

      await Firebase.firestore().collection('hospitals').doc(userData.id).collection('Running_Appointments').doc(id).delete();
    } catch (error) {
      console.log(error);
>>>>>>> 932d73c (hospital side completed)
      ToastAndroid.show("Something went Wrong",ToastAndroid.SHORT);
    }


<<<<<<< HEAD

=======
>>>>>>> 932d73c (hospital side completed)
  }


  useEffect(() => {
<<<<<<< HEAD
    setLoading(true);
    db.collection('AppUsers').doc(userData.id).collection('RunningAppointments').onSnapshot(snapshot => {
      setRunningAppointments(snapshot.docs.map(
        doc => (
          {
            id:doc.id,
            contact_no:doc.data().Contact_No,
=======
    db.collection('hospitals').doc(userData.id).collection('Running_Appointments').onSnapshot(snapshot => {
      setData(snapshot.docs.map(
        doc => (
          {
            id:doc.id,
            contact_no:doc.data().phone_no,
>>>>>>> 932d73c (hospital side completed)
            disease:doc.data().disease,
            email:doc.data().email,
            name:doc.data().name
          }
        )
      ))
    })
<<<<<<< HEAD
    setLoading(false);
  },[])

  return (
    <>
    <ActivityIndicator visible={loading} />
    <Screen>
      <ScrollView>
        {
          RunningAppointments.length ? 

          RunningAppointments.map(data => {
=======
  },[])

  return (
    <Screen>
      <ScrollView>
        {
          Data.length ? 

          Data.map(data => {
>>>>>>> 932d73c (hospital side completed)
            return (<RunningAppoinmentCard 
              
              disease={data.disease}
              email={data.email}
              name={data.name}
              phone_no={data.contact_no}
              id={data.id}
              key={data.id}
              HandleCheck={() =>  HandleCheck(data.name,data.email,data.disease,data.contact_no,data.id)}
            
            />) 
          }) : <Text style={styles.text}>No Running Appointments Yet!</Text>
        }
      </ScrollView>
    </Screen>
<<<<<<< HEAD
    </>
=======
>>>>>>> 932d73c (hospital side completed)
  )
}

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    fontSize:20
  }
})