import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const coursesData = [
  { id: '1', title: 'UX Foundation', duration: '2 hrs 25 mins', progress: '30%', image: require('../assets/image/MyCourses/hinh1.png') },
  { id: '2', title: 'Creative Art Design', duration: '3 hrs 25 mins', progress: '70%', image: require('../assets/image/MyCourses/hinh2.png') },
  { id: '3', title: 'Palettes for Your App', duration: '4 hrs 50 mins', progress: '100%', image: require('../assets/image/MyCourses/hinh3.png') },
  { id: '4', title: 'Typography in UI Design', duration: '4 hrs 50 mins', progress: '50%', image: require('../assets/image/MyCourses/hinh4.png') },
];

const MyCoursesScreen = () => {
  const [selectedTab, setSelectedTab] = useState('ALL');
  const navigation = useNavigation();

  const handleCoursePress = (course) => {
    if (course.title === 'UX Foundation') {
      navigation.navigate('UX Foundation');
    }
  };

  const renderCourse = ({ item }) => (
    <TouchableOpacity onPress={() => handleCoursePress(item)} style={styles.courseCard}>
      <Image source={item.image} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseDuration}>{item.duration}</Text>
        <Text style={styles.courseProgress}>{item.progress} Complete</Text>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: item.progress }]} />
        </View>
      </View>
    </TouchableOpacity>
  );

  const filteredCourses = coursesData.filter(course => {
    if (selectedTab === 'ON GOING') {
      return course.progress !== '100%';
    }
    if (selectedTab === 'COMPLETED') {
      return course.progress === '100%';
    }
    return true;
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>My Courses</Text>
      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerText}>Courses that boost your career!</Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Check Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bannerImageContainer}>
          <Image source={require('../assets/image/MyCourses/banner.png')} style={styles.bannerImage} />
        </View>
      </View>
      <View style={styles.tabContainer}>
        {['ALL', 'ON GOING', 'COMPLETED'].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)} style={[styles.tab, selectedTab === tab && styles.activeTab]}>
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredCourses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        style={styles.courseList}
        contentContainerStyle={styles.courseListContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },

  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8354E2',
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerText: {
    color: '#25ABDE',
    fontSize: 16,
    fontWeight:'bold',
    marginBottom: 10,
  },
  bannerButton: {
    backgroundColor: '#00e6b7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  bannerButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  bannerImageContainer: {
    width: '50%',
    alignItems: 'flex-end',
  },
  bannerImage: {
    width: 150,
    height: 150,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#00e6b7',
  },
  tabText: {
    fontSize: 14,
    color: '#888',
  },
  activeTabText: {
    color: '#00e6b7',
  },
  courseList: {
    marginHorizontal: 16,
  },
  courseListContainer: {
    paddingBottom: 16,
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  courseInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  courseDuration: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#00e6b7',
    borderRadius: 2,
    marginRight: 8,
  },
  courseProgress: {
    fontSize: 12,
    color: '#888',
  },
});

export default MyCoursesScreen;
