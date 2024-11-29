import React,{useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import MyCoursesScreen from './screens/MyCoursesScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginSignUp from './screens/LoginSignUp';

import CourseDetail from './screens/CourseDetail'
import ChapterContent from './screens/ChapterContent';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs({ route }) {
 const {email} = route.params; //Lay email từ route.params truyền từ LoginSignUp
  

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'MyCourses') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00bcd4',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}
       initialParams={{ email }} //Truyền email từ MyTabs xuống HomeScreen thong qua initialParams 
       />
      <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} 
      initialParams={{ email }} 
      />
      <Tab.Screen name="MyCourses" component={MyCoursesScreen} options={{ headerShown: false }} 
      initialParams={{ email }} 
      />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} 
      initialParams={{ email }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginSignUp">
          <Stack.Screen name="LoginSignUp" component={LoginSignUp} options={{headerShown: false}}  />
          <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Course Detail" component={CourseDetail} />
          <Stack.Screen name ="Chapter Contet" component={ChapterContent} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});
