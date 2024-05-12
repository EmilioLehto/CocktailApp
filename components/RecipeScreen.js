import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, Alert, StyleSheet } from 'react-native';


function RecipeScreen({ navigation }) {
    const [keyword, setKeyword] = useState('');
    const [repository, setRepository] = useState([]);
  
    const getRepositories = () => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(response => response.json())
        .then(data => {
          console.log('API Response:', data);
          setRepository(data.drinks);
        })
        .catch(error => {
          console.log('Fetch error:', error);
          Alert.alert("Error", error);
        });
    };
  
  
    const renderCocktailItem = ({ item }) => (
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {item.strDrink}
        </Text>
        <Image
          source={{ uri: item.strDrinkThumb }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recipe Screen</Text>
      
  
        <TextInput
          style={styles.input}
          placeholder='Liqour Name'
          value={keyword}
          onChangeText={text => setKeyword(text)}
        />
  
        <Button title="Find" onPress={getRepositories} />
  
        <FlatList
          data={repository}
          renderItem={renderCocktailItem}
          keyExtractor={(item) => item.idDrink}
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
  
  export default RecipeScreen;