import React from 'react'
import {
    View,
    Text, 
    Button, 
    TextInput, 
    StatusBar,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo'
// import Form from '../components/Form'

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleFormSubmit = ()=>{
        console.log(this.state);
    }

    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                <TextInput style={styles.inputBox} 
               underlineColorAndroid='rgba(0,0,0,0)' 
               placeholder="Email"
               placeholderTextColor="#ffffff"
               selectionColor="#fff"
               keyboardType="email-address"
               value={this.state.email}
               onChangeText={text=> this.setState({email: text})}
               onSubmitEditing={() => this.password.focus}/>

                <TextInput style={styles.inputBox} 
               underlineColorAndroid='rgba(0,0,0,0)' 
               placeholder="Password"
               secureTextEntry={true}
               placeholderTextColor="#ffffff"
               value={this.state.password}
               onChangeText={text=> this.setState({password: text})}   
               ref={(input) => this.password = input}/>
                {/* <Form type="Login" auth={this.state.auth}/> */}
               
                <TouchableOpacity style={styles.button}
                    onPress={this.handleFormSubmit.bind(this)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('Signup')}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
                </View>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#455a64',
        alignItems: 'center',
        justifyContent: 'center'
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },

    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize:18
    },

    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
        marginLeft:6,

    },
    inputBox: {
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize:16,
        color: '#ffffff',
        marginVertical: 10
    },

    button: {
        width:300,
        backgroundColor:"#1c313a",
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
    },

    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign: "center"
    }
});
export default Login;