import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from "react-native";


function App() {
  const isBlack = useColorScheme() === 'dark';
  return <SafeAreaView>
    <View style={styleSheets.container}>
      <Text style={isBlack ? styleSheets.whiteText : styleSheets.blackText}>Hello World</Text>

    </View>
  </SafeAreaView>
}

export default App;

const styleSheets = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'flex-start',
    backgroundColor:'blue',
    
  },

  whiteText: {
    color: '#FFFFFF'
  },

  blackText: {
    color: '#000000',
    fontSize:40,
    
    padding:4,
    marginTop:10
  }
})