import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth} from '../Config/FirebaseConfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goMyTabs = () =>{
    navigation.navigate('MyTabs');
  }

    const DangNhap = async () => {
       await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            Alert.alert('Thông báo', 'Đăng Nhập thành công', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { 
                  text: 'OK', 
                  onPress: () => {
                    console.log('OK Pressed');
                      goMyTabs();  // Ensure goLogin is called here
                  }
                },
              ]);
              goMyTabs();
              setEmail('');
            setPassword('');
        })
        .catch((error) => {
            setEmail('');
            setPassword('');
            Alert.alert('Thông báo', `Đăng ký thất bại: ${error.message}`, [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ]);
        });
    }

  return (
    <ImageBackground source={require('../assets/image/LoginSignUp/background.png')} style={styles.container}>
      <View style={styles.viewsignuplogin}>
        <Text style={styles.txtLoginSignUp}>Login</Text>
        <TextInput 
          style={styles.txtInput} 
          placeholder="Email"  
          onChangeText={(txtEmail) => setEmail(txtEmail)}
          value={email} 
        />
        <TextInput 
          style={styles.txtInput} 
          placeholder="Password" 
          onChangeText={(txtPassword) => setPassword(txtPassword)}
          value={password}
          secureTextEntry 
        />
        <TouchableOpacity style={styles.btnLoginSignUp} onPress={DangNhap}>
          <Text>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.txtSignUphref}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goLogin = () => {
    console.log('goLogin called');
    navigation.navigate('Login');
  }


  const DangKy = async () => {
  console.log("DangKy called");

    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        Alert.alert('Thông báo', 'Đăng Nhập thành công', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { 
              text: 'OK', 
              onPress: () => {
                console.log('OK Pressed');
                  goLogin();  // Ensure goLogin is called here
                  setEmail('');
                    setPassword('');
              }
            },
          ]);
          setEmail('');
          setPassword('');
          goLogin();
    })
    .catch((error) => {
        setEmail('');
            setPassword('');
        Alert.alert('Thông báo', `Đăng nhập thất bại: ${error.message}`, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
    });
}

  


  return (
    <ImageBackground source={require('../assets/image/LoginSignUp/background.png')} style={styles.container}>
      <View style={styles.viewsignuplogin}>
        <Text style={styles.txtLoginSignUp}>SignUp</Text>
        <TextInput 
          style={styles.txtInput} 
          placeholder="Email"  
          onChangeText={(txtEmail) => setEmail(txtEmail)}
          value={email} 
        />
        <TextInput 
          style={styles.txtInput} 
          placeholder="Password" 
          onChangeText={(txtPassword) => setPassword(txtPassword)}
          value={password}
          secureTextEntry 
        />
        <TouchableOpacity style={styles.btnLoginSignUp} onPress={DangKy}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default function LoginSignUp() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewsignuplogin: {
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 10,
  },
  txtLoginSignUp: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  txtInput: {
    borderWidth: 0.5,
    width: 300,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  btnLoginSignUp: {
    backgroundColor: '#00bcd4',
    width: 150,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  txtSignUphref: {
    color: '#0000EE',
    textDecorationLine: 'underline',
  },
});
