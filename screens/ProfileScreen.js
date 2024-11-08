import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const savedCourses = [
  { id: '1', title: 'Product Design', author: 'Dennis Sweeney', price: '$190', lessons: '12 lessons', rating: 4.5, reviews: 1233, image: require('../assets/image/profile/hinh1.png') },
  { id: '2', title: 'Website Design', author: 'Ramona Wutscher', price: '$59', lessons: '12 lessons', rating: 4.5, reviews: 1233, image: require('../assets/image/profile/hinh2.png') },
  { id: '3', title: 'Mobile UI Design', author: 'Ramona Wutscher', price: '$320', lessons: '12 lessons', rating: 4.5, reviews: 1233, image: require('../assets/image/profile/hinh3.png') },
  { id: '4', title: 'Digital Portrait', author: 'Ramona Wutscher', price: '$67', lessons: '12 lessons', rating: 4.5, reviews: 1233, image: require('../assets/image/profile/hinh4.png') },
];

const ProfileScreen = () => {
  const renderCourse = ({ item }) => (
    <View style={styles.courseContainer}>
      <Image source={item.image} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseAuthor}>{item.author}</Text>
        <Text style={styles.coursePrice}>{item.price}</Text>
        <View style={styles.courseFooter}>
          <Text style={styles.courseRating}>
            <Icon name="star" size={14} color="#FFD700" /> {item.rating} ({item.reviews})
          </Text>
          <Text style={styles.courseLessons}>{item.lessons}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Image source={require('../assets/image/profile/hinhNen.png')} style={styles.backgroundImage} />
      </View>
      <View style={styles.profileHeader}>
        <Image source={require('../assets/image/profile/avt.png')} style={styles.profileImage} />
        <Text style={styles.userName}>Martha Rosie</Text>
        <Text style={styles.userTitle}>UX/UI Designer</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>25</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>On Going</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>98</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
        </View>
      </View>

      <Text style={styles.savedCoursesTitle}>Saved courses</Text>
      <FlatList
        data={savedCourses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        style={styles.savedCoursesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerBackground: {
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00bcd4',
    zIndex: -1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileHeader: { alignItems: 'center', padding: 20,marginTop: 80, },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  userName: { fontSize: 22, fontWeight: 'bold', marginTop: 5 },
  userTitle: { fontSize: 16, color: '#888', marginBottom: 5 },
  statsContainer: { flexDirection: 'row', marginTop: 10 },
  stat: { alignItems: 'center', marginHorizontal: 15 },
  statNumber: { fontSize: 20, fontWeight: 'bold' },
  statLabel: { fontSize: 14, color: '#888' },
  savedCoursesTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginVertical: 10 },
  savedCoursesList: { paddingHorizontal: 20 },
  courseContainer: { flexDirection: 'row', marginBottom: 15, backgroundColor: '#f9f9f9', borderRadius: 8, overflow: 'hidden' },
  courseImage: { width: 80, height: 80, marginRight: 10 },
  courseInfo: { flex: 1, padding: 10 },
  courseTitle: { fontSize: 16, fontWeight: 'bold' },
  courseAuthor: { fontSize: 14, color: '#888' },
  coursePrice: { fontSize: 14, fontWeight: 'bold', color: '#00bcd4', marginTop: 5 },
  courseFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
  courseRating: { fontSize: 14, color: '#888' },
  courseLessons: { fontSize: 14, color: '#888' },
});

export default ProfileScreen;
