import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik';
import Picker from '../Picker';
import ErrorMessage from './ErrorMessage';

export default function FormPicker({items,name,placeholder,PickerItemComponent,width,numberOfColumns}) {
    const {errors,setFieldValue,touched,values} = useFormikContext();
  return (
    <>

        <Picker 
             items={items}
             onSelectItem={(item) => setFieldValue(name,item)}
             placeholder={placeholder}
             selectedItem={values[name]}
             PickerItemComponent={PickerItemComponent}
             width={width}
             numberOfColumns={numberOfColumns}
        />
<<<<<<< HEAD
   <ErrorMessage error={errors[name]} visible={touched[name]} />
=======
    {errors && (<ErrorMessage error={errors[name]} visible={touched[name]} />)}
>>>>>>> 932d73c (hospital side completed)
    </>
  )
}

const styles = StyleSheet.create({})