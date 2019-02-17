/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';

 

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      value : "Edit me!"
    }

    this.handleChangeText = this.handleChangeText.bind(this);
 }


  handleChangeText(newValue){
      this.setState({
        value: newValue
      });
  }

 render() {
    return (
      <View style={styles.container}>
          <TextInput 
            defaultValue = {this.state.value}
            onChangeText = {this.handleChangeText}
          />
           

          <Text>You are writing {this.state.value}</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
