/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
               
import React, {Component} from 'react';
import { StyleSheet,Image,Button,Text, View , TextInput} from 'react-native';
export default class App extends Component {

  constructor(){
    super();
    this.state = {}
    this.buttonPressed = this.buttonPressed.bind(this)
    

   // this.handleChangeText = this.handleChangeText.bind(this); //bind the handleChangeText function here 
 }


  // handleChangeText(newValue){
  //     this.setState({
  //       value: newValue
  //     });
  // }

  buttonPressed() {
    console.log(this.state.username,this.state.password);
  }

  

 render() {
  
  return (
      <View style = {styles.container}>
         
           <Text>Username</Text>
           <TextInput
               defaultValue = {this.state.username}
               onChangeText = {text => this.setState({username: text})}
           />

           <Text>Password</Text>
           <TextInput
               defaultValue = {this.state.password}
               onChangeText = {text => this.setState({password: text})}
           />

           <Button title = {"Save"} onPress = {this.buttonPressed} />

              
      </View>

  );
 }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  imgsize:{
    width: 400, 
    height: 300
  }
});
