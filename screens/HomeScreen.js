
import { View, Text, Button,StyleSheet } from 'react-native';
import  ListCourse from '../Component/HomeScreen/ListCourse'
import HeadHomeScreen from '../Component/HomeScreen/HeadHomeScreen'
import { useEffect } from 'react';


const HomeScreen = ({ navigation,route }) => {
 // const {email} = route.params;
  
  return (
    <View style={styles.container}>
     <HeadHomeScreen
     // email={email}
     />
     <ListCourse courseLevel={"basic"} headerText= 'Basic course' />
     <ListCourse courseLevel={"advance"} headerText= 'Advance course' />
      
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##cacaca',
  },
});

export default HomeScreen;
