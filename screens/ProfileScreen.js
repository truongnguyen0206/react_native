import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import  ListCourse from '../Component/MyCourse/ListCourse'
import HeadProfileScreen from '../Component/Profile/HeadProfileScreen'

const ProfileScreen = ({ navigation,route }) => {
  const {email} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Image source={require('../assets/image/profile/hinhNen.png')} style={styles.backgroundImage} />
      </View>
      <HeadProfileScreen email={email}/>
      <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginVertical: 10}}>Saved courses</Text>
      <ListCourse headerText= 'Basic course' Email = {email} />
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
    borderColor: 'black'
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ProfileScreen;
