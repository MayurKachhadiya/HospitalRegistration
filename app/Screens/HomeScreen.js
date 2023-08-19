import { Button,StyleSheet, Text, View,FlatList,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
//import ActivityIndicator from '../components/ActivityIndicator'
//import { Talukas } from '../config/Taluka';
//import HospitalCard from '../components/HospitalCard';
//import { AntDesign } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';


export default function HomeScreen() {
    const auth = useAuth();
   
    return(
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}
