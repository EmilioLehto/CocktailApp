
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { ref, push, onValue, getDatabase, remove } from 'firebase/database';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAUUf7uKBTu7C2ZS8UrdVGv6rd_rQtZD9c",
    authDomain: "items-99e19.firebaseapp.com",
    databaseURL: "https://items-99e19-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "items-99e19",
    storageBucket: "items-99e19.appspot.com",
    messagingSenderId: "667746042340",
    appId: "1:667746042340:web:bff335488672438ffb47f1"
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);


 const  Gallery = () => {
    const [hasCameraPermission, setPermission] = useState(null);
    const [list, setList] = useState([]);
  
    const camera = useRef(null);
  
    useEffect(() => {
      askCameraPermission();
      fetchPhotosFromFirebase();
    }, []);
  
    const askCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status == 'granted');
    }
  
    const snap = async () => {
      if (camera) {
        const photo = await camera.current.takePictureAsync({ base64: true });
        saveToFirebase(photo.base64);
      }
    }; 
  
    const saveToFirebase = (base64) => {
      push(ref(database, '/photos'), { base64})
      .then(() => {
        console.log('Photos Saved');
        fetchPhotosFromFirebase();
      })
      .catch((error) => {
        console.log('Error saving photos', error.message);
      })
    }
  
    
    const fetchPhotosFromFirebase = () => {
      const photosRef = ref(database, '/photos');
      onValue(photosRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const photoArray = Object.values(data);
          setList(photoArray);
        } else {
          setList([]);
        }
      });
    };
  
    const deletePhoto = (id) => {
      const photoRef = ref(database, `/photos/${id}`);
      remove(photoRef)
        .then(() => {
          console.log('Photo deleted successfully');
          fetchPhotosFromFirebase();
        })
        .catch((error) => {
          console.error('Error deleting photo:', error.message);
        });
    };
  
    return (
      <View style={styles.container}>
        {hasCameraPermission ? (
          <View style={{ flex: 1 }}>
            <Camera style={{ flex: 4, minWidth: '100%' }} ref={camera} />
            <View>
              <Button title="Take Photo" onPress={snap} />
            </View>
            <View style={{ flex: 4 }}>
              <FlatList
                data={list}
                renderItem={({ item }) => (
                  <View style={{ margin: 5 }}>
                  <Image style={{ width: 200, height: 200, margin: 5, marginLeft: 80}} source={{ uri: `data:image/jpeg;base64,${item.base64}` }} />
                  <Button title="Delete" onPress={() => deletePhoto(item.id)} />
                  </View>
                )}
              
                keyExtractor={(item, index) => index.toString()}
                numColumns={1}
              />
            </View>
          </View>
        ) : (
          <Text>No access to camera</Text>
        )}
      </View>
    );
  }

  
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 20
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });
  

  export default Gallery;
