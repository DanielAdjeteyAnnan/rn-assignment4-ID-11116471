import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');


  const validUsername = 'Daniel';
  const validEmail = 'byk@moni.com';

  const handleLogin = () => {
    if (username === validUsername && email === validEmail) {
      navigation.navigate('Home');
    } else {
      alert('Invalid username or email.');
    }
  };

return (
  <SafeAreaView>
  <View style={styles.log}>

      <View style={styles.welcomB}>
      <Text style={[styles.fontColor,{color:'#356899'}]}>Jobbizz</Text>
        <Text style={[styles.wel, {fontWeight: 'bold',left:10, fontSize:25}]}> Welcome Back👋</Text>
          <Text style={[styles.sub, {color:'#0D0D26', left:20}]}>Let Log in. Apply to Jobs!</Text>
     </View>

    <View  style={styles.logCon}>
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Name"
        placeholderTextColor="#003f5c"
        onChangeText={(text) => setUsername(text)}
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Email"
        placeholderTextColor="#003f5c"
        onChangeText={(text) => setEmail(text)}
      />
    </View>
    <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
      <Text style={styles.loginText}>Log in</Text>
    </TouchableOpacity>
    </View>

    <View style={styles.contWith}>
      <View style={styles.line} />
        <Text style= {styles.contText}>or continue with</Text>
      <View style={styles.line}/>
    </View>

    <View style={styles.socialContainer}> 
    <TouchableOpacity style={styles.socialBtn} onPress={() => {}}>
          <Image source={require('../assets/images/apple.png')} style={styles.logo} />
        </TouchableOpacity>
    <TouchableOpacity style={styles.socialBtn} onPress={() => {}}>
          <Image source={require('../assets/images/google.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn} onPress={() => {}}>
          <Image source={require('../assets/images/facebook.png')} style={styles.logo} />
        </TouchableOpacity>
      
    </View>

    <View style={styles.regist}>
      <Text style={styles.regText}>Haven't an account?
      </Text>
      <TouchableOpacity>
          <Text style={styles.regHere}>Register </Text>
          </TouchableOpacity>
    </View>
     

    
     
  </View>
  </SafeAreaView>
  
);
}

const styles = StyleSheet.create({  
  logCon: {
    backgroundColor: 'white',
    left:20,
    top: 120,
    width:450

  },
  fontColor: {
    paddingBottom:20,
    fontSize:22,
    left:20,
  },
  inputView: {
    width: '80%',
    borderColor: '#AFB0B6', 
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
    fontSize:15,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#356899',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
    welcomB: {
      top:80
    }, 
    contWith:{
      marginTop:150,
      flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    

    },
    line:{
      flex: 1,
      height: 1,
      backgroundColor: '#AFB0B6',

    },
    contText:{
      marginHorizontal:10,
      fontSize:16,
      color:'#AFB0B6',

    },
    socialContainer: {
      flexDirection: 'row',
      marginTop: 30,
      alignItems: 'center',
       justifyContent: 'space-evenly',
       height: 26,
    },
      socialBtn: {
    height: 50,
     
  },
    logo: {
    width: 0,
    height:0,
    padding:30,
    borderRadius:30,
    backgroundColor:'white'

  }, 
  regist: {
    marginTop: 100,
    marginHorizontal:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  regText: {
    color: '#BDBEC2',
    fontSize: 16,
  },
  regHere: {
    color: '#356899',
    marginLeft:5,
    
  },
     
  });
  