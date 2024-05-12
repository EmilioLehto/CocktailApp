import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


import RecipeScreen from './components/RecipeScreen';
import Favorite from './components/Favorite';
import Instructions from './components/Instructions';
import Locations from './components/Locations';
import Gallery from './components/Gallery';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="Cocktail instructions" component={Instructions} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Locations" component={Locations} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            return <Entypo name="home" size={24} color="black" />;
          } else if (route.name === 'Favorite') {
            return <MaterialIcons name="favorite" size={24} color="black" />;
          } else if (route.name === 'Instructions') {
            return <MaterialIcons name="menu-book" size={24} color="black" />;
          } else if (route.name === 'Recipe') {
            return <FontAwesome5 name="cocktail" size={24} color="black" />;
          } else if (route.name === 'Gallery') {
            return <MaterialCommunityIcons name="view-gallery-outline" size={24} color="black" />;
          } else if (route.name === 'Alko') {
            return <Image source={require('./assets/icon.png')} style={{ width: size, height: size }} />;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Gallery" component={Gallery} />
      <Tab.Screen name="Instructions" component={Instructions} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Recipe" component={RecipeScreen} />
      <Tab.Screen name="Alko" component={Locations} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
<ImageBackground source={require('./assets/back.png')} style={styles.backgroundImage}>
      {/*
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 50 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 30, color: '#333' }}>Helsinki Cocktails</Text>
        <View style={{ marginBottom: 20 }}>
          <Button title="View Recipes" onPress={() => navigation.navigate('Recipe')} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Button title="Favorite Recipes" onPress={() => navigation.navigate('Favorite')} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Button title="Gallery" onPress={() => navigation.navigate('Gallery')} />
        </View>
      </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
