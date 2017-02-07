import React, { Component } from 'react';  
import { Keyboard, TextInput } from 'react-native';  
  
export default class extends Component {  
  componentWillMount () { 
    console.log('Keyboard Component!');
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);  
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);  
  }  
  
  componentWillUnmount () {  
    this.keyboardDidShowListener.remove();  
    this.keyboardDidHideListener.remove();  
  }  
  
  _keyboardDidShow () {
    console.log('Keyboard Shown')
    // alert('Keyboard Shown');  
  }  
  
  _keyboardDidHide () { 
    console.log('Keyboard Hidden')
    // alert('Keyboard Hidden');  
  }  
  
  render() {  
    return (  
      <TextInput  
        onSubmitEditing={Keyboard.dismiss}  
      />  
    );  
  }  
}  