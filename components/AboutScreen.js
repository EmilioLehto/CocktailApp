export function AboutScreen(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />

        <View>
            
        </View>

      </View>
    );
  }
