import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,LogBox } from 'react-native';
import AuthContext from './app/auth/context';
import OfflineNotice from './app/components/offlineNotice';
import AuthNavigator from './app/Navigator/AuthNavigator';
import MainNavigator from './app/Navigator/MainNavigator';
import AppLoading from 'expo-app-loading';
import React,{useState} from 'react';
import authStore from './app/auth/storage';
import Firebase from './app/config/firebase';

export default function App() {
  const db = Firebase.firestore();
  const [userData,setUserData] = useState(null);
  const [isReady,setReady] = useState(false);

  const restoreData = async () => {
    const user = await authStore.getData();
    if(user){
      const {uid} = JSON.parse(user);
      await db.collection('hospitals').doc(uid).get()
      .then(snapshot => 
        setUserData(snapshot.data())
        );
    }
  }

  if(!isReady){
    return <AppLoading onError={console.warn} startAsync={restoreUser} onFinish={() => setReady(true)} />
  }


  return (
    <AuthContext.Provider value={{userData,setUserData}}>
     <OfflineNotice/>
     <NavigationContainer>
      {userData ? <MainNavigator /> : <AuthNavigator />}
     </NavigationContainer>
   </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
