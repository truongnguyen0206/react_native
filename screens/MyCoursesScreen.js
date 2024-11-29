import { View, Text, Button,StyleSheet } from 'react-native';
import  ListCourse from '../Component/MyCourse/ListCourse'
import HeadMyCourseScreen from '../Component/MyCourse/HeadMyCourseScreen'
import { useEffect } from 'react';


const MyCoursesScreen = ({ navigation,route }) => {
 const {email} = route.params;
  
  return (
    <View style={styles.container}>
     <HeadMyCourseScreen
     email={email}
     />
     <ListCourse headerText= 'Basic course' Email = {email} />
      
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##cacaca',
  },
});

export default MyCoursesScreen;
