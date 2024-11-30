import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import ListCourse from '../Component/MyCourse/ListCourse';
import HeadProfileScreen from '../Component/Profile/HeadProfileScreen';

const ProfileScreen = ({ navigation, route }) => {
  const { email } = route.params;

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: () => navigation.replace('LoginSignUp') // Thay 'LoginScreen' bằng tên màn hình đăng nhập của bạn
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Image source={require('../assets/image/profile/hinhNen.png')} style={styles.backgroundImage} />
      </View>
      <HeadProfileScreen email={email} />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginVertical: 10 }}>Saved courses</Text>
      <ListCourse headerText="Basic course" Email={email} />
      <View style={styles.logoutButton}>
        <Button title="Logout" color="#f44336" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F2' },
  headerBackground: {
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00bcd4',
    zIndex: -1,
    borderWidth: 0.1,
    borderColor: 'black',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoutButton: {
    marginRight: 50,
    marginLeft: 50,
    zIndex: 1,
  },
});

export default ProfileScreen;
