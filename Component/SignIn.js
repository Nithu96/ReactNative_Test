import React,  { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
          emailtext: "",
          emailError: "",
          showPasswordError: true,
          showEmailError: true,
          isFirstLogin: true
        }
    
    }

    signInPressButton = () => {
        const {showEmailError, showPasswordError} = this.state;

        if (!showEmailError && !showPasswordError) {
            alert("Login Success!")
        }

        this.setState({
            isFirstLogin: false
        })

    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = re.test(String(email).toLowerCase());
        if (!isValid) {
            this.setState({
                showEmailError: true
            })
        } else {
            this.setState({
                showEmailError: false
            })
        }
    }

    checkAllowLogin() {
        if (!(this.state.showEmailError && this.state.showPasswordError)) {
            this.setState({
                allowLogin: true
            })
        }
    }

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
                      onChangeText={(text) => {
                        this.setState({ emailtext: text });
                        this.validateEmail(text);
                      }}  
                    />
               </View>
               {this.state.showEmailError && !this.state.isFirstLogin ? (<Text style= {{color : 'red', marginLeft:20}}>{"Please Enter valid Email"}</Text>) : null}
               <View style ={ styles.inputView}>
                   <Text style ={styles.lableText}> Password </Text>
                    <TextInput
                      style={styles.inputText}
                      placeholder="**********"
                      placeholderTextColor="black"
                      secureTextEntry
                      onChangeText={(text) => {
                        this.setState({ passwordtext: text });
                        if (text != "") {
                            this.setState({
                                showPasswordError: false
                            })
                        } else {
                            this.setState({
                                showPasswordError: true
                            })
                        }
                      }}  
                    />
               </View>
               {this.state.showPasswordError && !this.state.isFirstLogin ? (<Text style= {{color : 'red', marginLeft:20}}>{"Password can not be empty"}</Text>) : null}
               <View alignItems='flex-end'>
                   <TouchableOpacity style = {styles.loginBtn}
                   onPress={this.signInPressButton} >
                       <Text style = {styles.loginText}>Sign-in</Text>
                   </TouchableOpacity>
               </View>

           </View>
        )
    }
}

const styles = StyleSheet.create({
    inputUi: {
        backgroundColor: '#EEEEEE',
        borderColor: "#787A91",
        borderRadius: 20,
        borderWidth: 10,
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
        width: '30%',
        fontWeight : 'bold',
     },
    inputText: {
        color: "black",
        borderColor: "black",
        borderWidth: 2,
        width: '70%',
        height: 50,
        paddingLeft: 10,
        borderRadius: 10,
     },
    credText: { 
        fontSize: 16, 
        color: 'black', 
        width: '30%'
     },
    loginBtn: {
        backgroundColor: "#141E61",
        borderColor: "black",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: '30%',
        borderWidth: 2,
        borderRadius: 10
      },
    loginText: {
        color: "white",
        textAlign: 'center',
        fontWeight : 'bold',
        fontSize: 16
      },
})
export {SignIn};