import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Person from './components/Person'
import * as ImagePicker from 'expo-image-picker';


const Home = () => {
    const [image, setImage] = useState<any>(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Home Component</Text>
            <TextInput style={{ backgroundColor: '#f2f2f2', borderRadius: 4, marginTop: 10, marginBottom: 10, padding: 10, width: 150 }} />
            {/* <Button title='Click' onPress={() => alert('Button clicked!')} /> */}

            {/* <ScrollView style={{ marginTop: 10 }}>
                {[...Array(100).keys()].map((_, i) => (
                    <Person key={i} name={`Person ${i}`} />
                ))}
            </ScrollView> */}
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 200,
        height: 200,
    },
});