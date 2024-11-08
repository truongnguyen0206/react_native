import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const teacherInfo = {
  name: 'Sara Weise',
  title: 'UI/UX Designer',
  location: 'New York - 09:30 AM',
  profileImage: require('../assets/image/TeacherProfile/avt.png'),
  coverImage: require('../assets/image/TeacherProfile/hinhNen.png'),
};

const coursesData = [
  {
    category: 'UI/UX Design',
    topRated: true,
    courses: [
      { id: '1', title: 'UX Foundation', author: 'Sara Weise', price: '$51', rating: 4.5, lessons: 12, image: require('../assets/image/TeacherProfile/hinh1.png') },
      { id: '2', title: 'Mobile App Design', author: 'Sara Weise', price: '$59', rating: 4.5, lessons: 12, image: require('../assets/image/TeacherProfile/hinh1.png') },
    ],
  },
  {
    category: 'Graphic Design',
    topRated: false,
    courses: [
      { id: '3', title: 'Digital Poster', author: 'Sara Weise', price: '$59', rating: 4.5, lessons: 12, image: require('../assets/image/TeacherProfile/poster.png') },
      { id: '4', title: 'Patterns Design', author: 'Sara Weise', price: '$59', rating: 4.5, lessons: 12, image: require('../assets/image/TeacherProfile/poster.png') },
    ],
  },
];

const TeacherProfileScreen = () => {
  const renderCourseItem = ({ item }) => (
    <View style={styles.courseCard}>
      <Image source={item.image} style={styles.courseImage} />
      <View>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseAuthor}>{item.author}</Text>
        <Text style={styles.coursePrice}>{item.price}</Text>
        <Text style={styles.courseDetails}>⭐️ {item.rating} (1233) - {item.lessons} lessons</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Image source={teacherInfo.coverImage} style={styles.coverImage} />
      <View style={styles.profileContainer}>
        <Image source={teacherInfo.profileImage} style={styles.profileImage} />
        <View style={styles.nameAndBadgeContainer}>
          <Text style={styles.teacherName}>{teacherInfo.name}</Text>
          <View style={styles.teacherBadgeContainer}>
            <Text style={styles.teacherBadge}>teacher</Text>
          </View>
        </View>
        <Text style={styles.teacherTitle}>{teacherInfo.title}</Text>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={14} color="#666" />
          <Text style={styles.teacherLocation}>{teacherInfo.location}</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {['Overview', 'Courses', 'Review'].map((tab, index) => (
          <TouchableOpacity key={index} style={[styles.tab, tab === 'Courses' && styles.activeTab]}>
            <Text style={[styles.tabText, tab === 'Courses' && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Course Sections */}
      {coursesData.map((section) => (
        <View key={section.category} style={styles.courseSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.titleAndBadgeContainer}>
              <Text style={styles.sectionTitle}>{section.category}</Text>
              {section.topRated && <Text style={styles.topRatedBadge}>Top-rated</Text>}
            </View>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={section.courses}
            renderItem={renderCourseItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.courseList}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverImage: {
    width: '100%',
    height: 150,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  nameAndBadgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  teacherName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 8,
  },
  teacherBadgeContainer: {
    backgroundColor: '#00bcd4',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  teacherBadge: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  teacherTitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  teacherLocation: {
    fontSize: 16,
    color: '#999',
    marginLeft: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  tab: {
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#00bcd4',
  },
  tabText: {
    fontSize: 14,
    color: '#888',
  },
  activeTabText: {
    color: '#00bcd4',
  },
  courseSection: {
    marginVertical: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  titleAndBadgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 10,
  },
  topRatedBadge: {
    backgroundColor: '#00bcd4',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 14,
    marginLeft: 8,
  },
  viewAll: {
    color: '#00bcd4',
    fontSize: 14,
  },
  courseList: {
    marginTop:10,
    paddingLeft: 16,
  },
  courseCard: {
    width: 250,
    height:220,
    marginRight: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
  },
  courseImage: { 
    width: 230, 
    height: 100, 
    margin: 10, 
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  courseAuthor: { 
    fontSize: 14,
    color: '#888',
    marginLeft: 8,
  },
  coursePrice: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#00bcd4', 
    marginLeft: 8, 
  },
  courseDetails: {
    fontSize: 14,
    color: '#888',
    marginHorizontal: 8,
    marginBottom: 8,
  },
});

export default TeacherProfileScreen;
