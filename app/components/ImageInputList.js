import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import ImageInput from './ImageInput'

export default function ImageInputList({imageUris=[],onRemoveImage,onAddImage}) {
    const scrollView = useRef();
  return (
    <View>
     <ScrollView 
     horizontal
     ref={scrollView}
     onContentSizeChange={() => scrollView.current.scrollToEnd()}
     >
            <View style={styles.container}>
<<<<<<< HEAD
                 {
=======
                {
>>>>>>> 932d73c (hospital side completed)
                    imageUris.map(uri => 
                        <View key={uri} style={styles.image}>
                            <ImageInput 
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                        )
<<<<<<< HEAD
                } 
=======
                }
>>>>>>> 932d73c (hospital side completed)
                <ImageInput onChangeImage={uri => onAddImage(uri)} />
            </View>
     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    image:{
        marginRight:10
    }
})