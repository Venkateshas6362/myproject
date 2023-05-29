import { View, Text,TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React,{ useState }from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config'

const Login = () => {
    const navigation = useNavigation()
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

  loginUser = async (email, password) =>{
    try{
        await firebase.auth().signInWithEmailAndPassword(email, password)
    }catch (error){
        alert(erroe.message)
    }
  }
  return (
     <View style={StyleSheet.container}>
        <Text style={{fontWeight: 'bold',fontSize:26}}>
           Login
        </Text>
        <View style={{marginTop:40}}>
            <TextInput
             style={Styles.textInput}
             placeholder='Email'
             onChangeText={(email) => setEmail(email)}
             autoCapitalize="none"
             autoCorrect={false}
            />
            <TextInput
             style={Styles.textInput}
             placeholder='Password'
             onChangeText={(Password) => setPassword(Password)}
             autoCapitalize="none"
             autoCorrect={false}
             secureTextEntry={true}
            />


        </View>
        <TouchableOpacity
        onPress={() => loginUser(email, password)}
        style={styles.button}
        >
         <Text style={{fontWeight:'bold', fontSize:22}}>login</Text>

        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Registration')}
        style={{marginTop:20}}
        >
         <Text style={{fontWeight:'bold', fontSize:22}}>
            Don't have an account? register now
            </Text>
         </TouchableOpacity>
     </View>
  )
}

export default Login

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        marginTop:100,
    },
textInput:{
   paddingTop:20,
   paddingBottom:10,
   width:400,
   frontSize:20,
   borderBottomwidt:1,
   borderBottomColor: '#000',
   marginBottom:10,
   textAligh:'center'
  },
  button:{
    marginTop:50,
    height:70,
    width:250,
    backgroundColor:'#026efd',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
  }
})