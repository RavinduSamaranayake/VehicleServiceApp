/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet,Image, Text, View , TextInput} from 'react-native';
export default class App extends Component {

  constructor(){
    super();
    this.state = {
      value : "Edit me!"
    }

    this.handleChangeText = this.handleChangeText.bind(this); //bind the handleChangeText function here 
 }


  handleChangeText(newValue){
      this.setState({
        value: newValue
      });
  }

 render() {
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  };
  return (
    <Image source={pic} style={{width: 400, height: 200}}/>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
