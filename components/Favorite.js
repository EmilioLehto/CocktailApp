
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { initializeApp } from "firebase/app";
import { ref, push, onValue, getDatabase, remove } from 'firebase/database';




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


 function Favorite({navigation}){
    const [custom, setCustom] = useState({
      name:'',
      glass:'',
      instructions: '',
      ingredients: ''
    });
  
    const [items, setItems] = useState([])
  
    useEffect(() => {
      const itemsRef = ref(database, '/items');
      onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      setItems(Object.values(data));
      })
      }, []);
  
    const saveItem = () => {
      push(ref(database, '/items'), custom);
      }
  
      const handleChange = (key, value) => {
        setCustom(prevState => ({
          ...prevState,
          [key]: value
        }));
      };
  
      const deleteItem = (id) => {
        const itemRef = ref(database, `/items/${id}`);
  
        remove(itemRef)
          .then(() =>{
            const updateItems = items.filter(item => item.id !== id);
            setItems(updateItems);
          })
          .catch(error => {
            console.error("Error removing item:", error.message);
          })
      }
      
  
    return(
      <View>
      <View style={{marginTop: 20, marginLeft: 60}}>
        <Text style={{ fontSize: 20,fontWeight: 'bold', marginBottom: 20, marginLeft: 50}}>Custom Cocktail</Text>
        <TextInput
        style={styles.input}
        placeholder='Name'
        value={custom.name}
        onChangeText={text => handleChange('name', text)}
        />
         <TextInput
        style={styles.input}
        placeholder='Glass'
        value={custom.glass}
        onChangeText={text => handleChange('glass', text)}
        />
         <TextInput
        multiline={true}
        style={{ height: 80,
          width: '80%',
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,}}
        placeholder='Instructions'
        value={custom.instructions}
        onChangeText={text => handleChange('instructions', text)}
        />
        <TextInput
        multiline={true}
        style={{height: 80,
          width: '80%',
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder ='Ingredients'
        placeholderStyle={{marginBottom: 30}}
        value={custom.ingredients}
        onChangeText={text => handleChange('ingredients', text)}
        />
      </View>
      <Button style={{marginLeft:40}} title="Save" onPress={saveItem} />
  
  
      <View style={{marginTop: 20}}>
      <FlatList
          data={items}
          renderItem={({item}) => (
            <View style={{marginLeft: 90}}>
  <Text>
    <Text style={{ fontWeight: 'bold' }}>Cocktail Name:</Text> {item.name}
  </Text>
  <Text>
    <Text style={{ fontWeight: 'bold' }}>Glass type:</Text> {item.glass}
  </Text>
  <Text>
    <Text style={{ fontWeight: 'bold' }}>Instructions:</Text> {item.instructions}
  </Text>
  <Text>
    <Text style={{ fontWeight: 'bold' }}>Ingredients:</Text> {item.ingredients}
  </Text>
  <Text style={{color: '#0000ff'} } onPress={() => deleteItem(item.id)}>Delete</Text>
  
              </View>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                width: "80%",
                backgroundColor: "#CED0CE",
                marginLeft: "10%"
              }}
            />
          )}
        />
      </View>
      
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
  

  export default Favorite;