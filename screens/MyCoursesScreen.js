import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GetList, checkUserControlCourse, createUserControlCourse } from '../Services/Hygraph';

const MyCoursesScreen = () => {
  const [selectedTab, setSelectedTab] = useState('ALL');
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(false); // Thêm trạng thái loading
  const navigation = useNavigation();

  // Hàm lấy danh sách khóa học kèm tiến độ
  const fetchCourses = async () => {
    setLoading(true); // Bắt đầu tải dữ liệu
    try {
      const courseLevel = selectedTab === 'ON GOING' ? 'onGoing' : selectedTab === 'COMPLETED' ? 'completed' : null;
      const email = 'hotanloc9516@gmail.com'; // Email người dùng

      const courses = await GetList(courseLevel); // Lấy danh sách khóa học

      // Lấy tiến độ từng khóa học
      const coursesWithProgress = await Promise.all(
        courses.map(async (course) => {
          const userControl = await checkUserControlCourse(course.id, email);
          const completedChapters = userControl.length > 0 ? userControl[0].completeChapter.length : 0;
          const totalChapters = course.chapter.length;
          const progress = totalChapters > 0 ? ((completedChapters / totalChapters) * 100).toFixed(0) : 0;

          return {
            id: course.id,
            title: course.name,
            duration: course.time,
            progress: `${progress}%`,
            image: { uri: course.banner.url },
            courseData: course,
          };
        })
      );

      setCoursesData(coursesWithProgress); // Cập nhật danh sách khóa học có tiến độ
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu khóa học:', error);
    } finally {
      setLoading(false); // Kết thúc tải dữ liệu
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [selectedTab]);

  const handleUserControlCourse = async (item) => {
    try {
      const email = 'hotanloc9516@gmail.com';
      const res = await checkUserControlCourse(item.id, email);

      if (res.length === 0) {
        await createUserControlCourse(item.id, email);
      }

      navigation.navigate('Course Detail', { Course: item.courseData });
    } catch (error) {
      console.error('Lỗi khi điều hướng đến khóa học:', error);
    }
  };

  const filteredCourses = coursesData.filter((course) => {
    if (selectedTab === 'ON GOING') {
      return course.progress !== '100%';
    }
    if (selectedTab === 'COMPLETED') {
      return course.progress === '100%';
    }
    return true;
  });

  const renderCourse = ({ item }) => (
    <TouchableOpacity onPress={() => handleUserControlCourse(item)} style={styles.courseCard}>
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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>My Courses</Text>
      <View style={styles.tabContainer}>
        {['ALL', 'ON GOING', 'COMPLETED'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={filteredCourses}
          renderItem={renderCourse}
          keyExtractor={(item) => item.id}
          style={styles.courseList}
          contentContainerStyle={styles.courseListContainer}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Giữ nguyên phần styles như cũ
  container: { flex: 1, backgroundColor: '#fff' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 16 },
  tabContainer: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 16 },
  tab: { paddingVertical: 8, paddingHorizontal: 16 },
  activeTab: { borderBottomWidth: 2, borderBottomColor: '#00e6b7' },
  tabText: { fontSize: 14, color: '#888' },
  activeTabText: { color: '#00e6b7' },
  courseList: { marginHorizontal: 16 },
  courseListContainer: { paddingBottom: 16 },
  courseCard: { flexDirection: 'row', backgroundColor: '#f9f9f9', padding: 10, marginBottom: 16, borderRadius: 8 },
  courseImage: { width: 60, height: 60, borderRadius: 10 },
  courseInfo: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  courseTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  courseDuration: { fontSize: 14, color: '#888' },
  courseProgress: { fontSize: 12, color: '#00e6b7' },
  progressContainer: { height: 6, backgroundColor: '#eee', borderRadius: 4, marginTop: 10 },
  progressBar: { height: 6, backgroundColor: '#00e6b7', borderRadius: 4 },
  loadingText: { textAlign: 'center', fontSize: 16, color: '#888', marginTop: 20 },
});

export default MyCoursesScreen;
