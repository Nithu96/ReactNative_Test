import React,  { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class SignIn extends Component{
    render(){
        return(
           <View style = {styles.inputUi}>
               <View style ={ styles.inputView}>
                   <Text style ={styles.lableText}> Email </Text>
                    <TextInput
                      style={styles.inputText}
                      placeholder="your@address.net"
                      placeholderTextColor="black"
                      autoCapitalize="none"  
                    />
               </View>
               <View style ={ styles.inputView}>
                   <Text style ={styles.lableText}> Password </Text>
                    <TextInput
                      style={styles.inputText}
                      placeholder="**********"
                      placeholderTextColor="black"
                      secureTextEntry
                    />
               </View>
               <View alignItems='flex-end'>
                   <TouchableOpacity style = {styles.loginBtn}>
                       <Text style = {styles.loginText}>Sign-in</Text>
                   </TouchableOpacity>
               </View>

           </View>
        )
    }
}

const styles = StyleSheet.create({
    inputUi: {
        borderColor: "black",
        borderWidth: 1,
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
      },
    inputView: {
        marginTop: 10,
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
      },
    lableText: { 
        fontSize: 16, 
        color: 'black', 
        width: '30%'
     },
    inputText: {
        color: "black",
        borderColor: "black",
        borderWidth: 1,
        width: '70%',
        height: 50,
        paddingLeft: 10,
     },
    credText: { 
        fontSize: 16, 
        color: 'black', 
        width: '30%'
     },
    loginBtn: {
        backgroundColor: "#D3D3D3",
        borderColor: "black",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: '30%',
        borderWidth: 2,
      },
    loginText: {
        color: "black",
        textAlign: 'center',
        fontSize: 16
      },
})
export {SignIn};