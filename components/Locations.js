
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';


function Locations(){


    return(
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 60.200692,
          longitude: 24.934302,
          latitudeDelta: 0.0221,
          longitudeDelta: 0.0221
        }}>
          <Marker
            coordinate={{
              latitude:  60.194322 ,
              longitude: 24.963865 }}
              title="Alko Helsinki Arabianranta Arabia"
            
            />
  
  
          <Marker
            coordinate={{
              latitude: 60.1613165  ,
              longitude: 24.930053 }}
              title="Alko Helsinki Bulevardi"
            
            />
  
           <Marker
            coordinate={{
              latitude:  60.18033635 ,
              longitude: 24.9488999941326 }}
              title="Alko Helsinki Hakaniemi Ympyrätalo"
            
            />
  
  
  
          <Marker
            coordinate={{
              latitude:  60.19442 ,
              longitude: 25.0281739 }}
              title="Alko Helsinki Herttoniemi Hertta"
            
            />
  
  
              
          <Marker
            coordinate={{
              latitude: 60.1397107  ,
              longitude: 24.2208785739942 }}
              title="Alko Helsinki Itä-Pasila"
            
            />
  
  
  
  
            
          <Marker
            coordinate={{
              latitude:60.2117003,
              longitude: 25.0829427158784 }}
              title="Alko Helsinki Itäkeskus Itis Stockmann"
            
            />
  
  
  
            
          <Marker
            coordinate={{
              latitude:60.186648,
              longitude: 24.978944 }}
              title="Alko Helsinki Kalasatama Redi"
            
            />
  
  
            
          <Marker
            coordinate={{
              latitude: 60.192047  ,
              longitude: 24.9758948 }}
              title="Alko Helsinki Kalasatama Tukkutori"
            
            />
  
  
          <Marker
            coordinate={{
              latitude: 60.1873527  ,
              longitude:  24.9551553}}
              title="Alko Helsinki Kallio"
            
            />
  
        <Marker
            coordinate={{
              latitude:60.23674895  ,
              longitude:24.8925647719663  }}
              title="Alko Helsinki Kannelmäki Kaari"
            
            />
  
  
        <Marker
            coordinate={{
              latitude:  60.166393 ,
              longitude: 24.9496052 }}
              title="Alko Helsinki Kasarmitori"
            
            />
  
        <Marker
            coordinate={{
              latitude: 60.1746475  ,
              longitude: 24.9594971 }}
              title="Alko Helsinki Kruununhaka"
            
            />
  
  
        <Marker
            coordinate={{
              latitude: 60.2215986  ,
              longitude:24.9475997  }}
              title="Alko Helsinki Käpylä"
            
            />
  
  
        <Marker
            coordinate={{
              latitude:60.1975018   ,
              longitude: 24.9305055 }}
              title="Alko Helsinki Pasila Tripla"
            
            />
  
  
      <Marker
            coordinate={{
              latitude:60.1636348  ,
              longitude: 24.910476 }}
              title="Alko Helsinki Ruoholahti"
            
            />
  
  
      <Marker
            coordinate={{
              latitude:60.1593104,
              longitude: 24.9438814 }}
              title="Alko Helsinki Ullanlinna"
            
            />
  
  
  
  
  <Marker
            coordinate={{
              latitude:60.21808845   ,
              longitude: 24.8695549339191 }}
              title="Alko Helsinki Pitäjänmäki"
            
            />
  
  
  
  <Marker
            coordinate={{
              latitude: 60.1786758  ,
              longitude:24.9238768  }}
              title="Alko Helsinki Töölöntori"
            
            />
  
  
  <Marker
            coordinate={{
              latitude: 60.16988715  ,
              longitude:24.9417913007001  }}
              title="Alko Helsinki keskusta Citycenter"
            
            />
  
  
  
  <Marker
            coordinate={{
              latitude:  60.1694465 ,
              longitude:24.932871  }}
              title="Alko Helsinki keskusta Kamppi"
            
            />
  
  
  
  <Marker
            coordinate={{
              latitude: 60.1671146  ,
              longitude: 24.9457635 }}
              title="Alko Helsinki keskusta Eteläesplanadi"
            
            />
  
  
  
  <Marker
            coordinate={{
              latitude: 60.1706546  ,
              longitude: 24.9386883 }}
              title="Alko Helsinki keskusta Sokos"
            
            />
  
  
  
  <Marker
            coordinate={{
              latitude:  60.16896075 ,
              longitude:24.945936401209  }}
              title="Alko Helsinki keskusta Stockmann"
            
            />
  
  
  
  <Marker
            coordinate={{
              latitude: 60.2055252  ,
              longitude: 24.8793687 }}
              title="Alko Helsinki Munkkivuori"
            
            />
  
        </MapView>
  
  
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
  

  export default Locations;