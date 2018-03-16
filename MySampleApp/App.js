/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  DrawerNavigator,
  StackNavigator 
} from 'react-navigation';
import PetViewer from './components/PetViewer'

 class Home extends Component {
  static navigationOptions = {
	drawerLabel:'Home',
    
}





  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
	 DOG WORLD         
        </Text>
        <Text style={styles.instructions}>
          where doggie dreams really do come true
        </Text>			
	<Text>
        swipe right to get woofie!!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d35400',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
 	   textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
const MyApp = DrawerNavigator({
  Home: {
    screen: Home
  },
  PetView : {
    screen: PetViewer
  }
})
export default MyApp 