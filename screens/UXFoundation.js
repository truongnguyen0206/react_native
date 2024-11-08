import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Lessons = [
  { id: '1', title: 'Amet adipisicing consectetur', duration: '01:23 mins', isActive: true },
  { id: '2', title: 'Culpa est incididunt enim id ad', duration: '01:23 mins' },
  { id: '3', title: 'Exercitation elit incididunt esse', duration: '01:23 mins' },
  { id: '4', title: 'Duis esse ipsum labour', duration: '01:23 mins' },
  { id: '5', title: 'Labore minim reprehenderit pariatur ea deserunt', duration: '01:23 mins' },
];

const projectsData = [
  { id: '1', name: 'Wireframe', author: 'Ramona Wutscher', image: require('../assets/image/UXFoundation/projects1.png') },
  { id: '2', name: 'Personal', author: 'Thomas Carlson', image: require('../assets/image/UXFoundation/projects2.png') },
  { id: '3', name: 'Wireframe', author: 'Ramona Wutscher', image: require('../assets/image/UXFoundation/projects1.png') },
  { id: '4', name: 'Personal', author: 'Thomas Carlson', image: require('../assets/image/UXFoundation/projects2.png') },
  { id: '5', name: 'Wireframe', author: 'Ramona Wutscher', image: require('../assets/image/UXFoundation/projects1.png') },
  { id: '6', name: 'Personal', author: 'Thomas Carlson', image: require('../assets/image/UXFoundation/projects2.png') },
  { id: '7', name: 'Wireframe', author: 'Ramona Wutscher', image: require('../assets/image/UXFoundation/projects1.png') },
  { id: '8', name: 'Personal', author: 'Thomas Carlson', image: require('../assets/image/UXFoundation/projects2.png') },
  { id: '9', name: 'Wireframe', author: 'Ramona Wutscher', image: require('../assets/image/UXFoundation/projects1.png') },
  { id: '10', name: 'Personal', author: 'Thomas Carlson', image: require('../assets/image/UXFoundation/projects2.png') },
  { id: '11', name: 'Wireframe', author: 'Ramona Wutscher', image: require('../assets/image/UXFoundation/projects1.png') },
  { id: '12', name: 'Personal', author: 'Thomas Carlson', image: require('../assets/image/UXFoundation/projects2.png') },
];

const QAs = [
  { id: '1', user: 'Jane Barry', comment: 'Deserunt minim incididunt cillum nostrud...', likes: 23, comments: 5 },
  { id: '2', user: 'Thomas', comment: 'Deserunt minim incididunt cillum nostrud...', likes: 23, comments: 5 },
];

const filesData = [
  { id:'1', title: 'Document 1.txt', author: '612Kb', image: require('../assets/image/UXFoundation/filetxt.png'), downloadIcon: 'download-outline' },
  { id:'2', title: 'Document 2.pdf', author: '35Mb', image: require('../assets/image/UXFoundation/filepdf.png'), downloadIcon: 'download-outline' },
];

const UXFoundation = () => {
  const [activeTab, setActiveTab] = useState('LESSONS');
  const [qaText, setQaText] = useState('');

  const renderContent = () => {
    switch (activeTab) {
      case 'LESSONS':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>I - Introduction</Text>
            <FlatList
              data={Lessons.slice(0, 2)}
              renderItem={({ item }) => (
                <Lesson title={item.title} duration={item.duration} isActive={item.isActive} />
              )}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
            <Text style={styles.sectionTitle}>II - Plan for your UX Research</Text>
            <FlatList
              data={Lessons.slice(2, 5)} 
              renderItem={({ item }) => (
                <Lesson title={item.title} duration={item.duration} />
              )}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>III - Conduct UX research</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>VI - Articulate findings</Text>
            </View>
          </View>
        );
      case 'PROJECTS':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Upload your project</Text>
            <TouchableOpacity style={styles.uploadButton}>
              <Text style={styles.uploadText}>Upload your project here</Text>
            </TouchableOpacity>
            <Text style={styles.sectionTitle}>{projectsData.length} Student Projects</Text>
            <FlatList
              data={projectsData}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Project title={item.name} author={item.author} image={item.image} />
              )}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }}
            />
            <Text style={styles.sectionTitle}>Project Description</Text>
            <Text style={styles.description}>
              Culpa aliquip commodo incididunt nostrud aliqua ut adipisicing officia. Laborum consequat ea reprehenderit voluptate voluptate quis pariatur dolor. Laboris proident ea fugiat nulla...
            </Text>
            <Text style={styles.sectionTitle}>Resources ({filesData.length})</Text>
            {filesData.map((file) => (
              <FileItem 
                key={file.id}
                title={file.title} 
                author={file.author} 
                image={file.image} 
                downloadIcon={file.downloadIcon} 
              />
            ))}
          </View>
        );
      case 'Q&A':
        return (
          <View style={styles.section}>
            <FlatList
              data={QAs}
              renderItem={({ item }) => (
                <QA user={item.user} comment={item.comment} likes={item.likes} comments={item.comments} />
              )}
              keyExtractor={item => item.id}
            />
            <TextInput style={styles.qaInput} placeholder="Write a Q&A..." 
            autoFocus={true}
            onFocus={() => setQaText('')}
            value={qaText} 
            onChangeText={setQaText}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.container}>
      <Image 
        source={require('../assets/image/UXFoundation/hinhnen.png')} 
        style={styles.thumbnail} 
      />
      
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>UX Foundation: Introduction to User Experience Design</Text>
        <View style={styles.interactions}>
          <Text style={styles.likeShare}><Icon name="heart-outline" size={18} color="#888" /> 231 Like</Text>
          <Text style={styles.likeShare}><Icon name="share-social-outline" size={18} color="#888" /> 16 Share</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setActiveTab('LESSONS')}>
          <Text style={[styles.tab, activeTab === 'LESSONS' && styles.activeTab]}>LESSONS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('PROJECTS')}>
          <Text style={[styles.tab, activeTab === 'PROJECTS' && styles.activeTab]}>PROJECTS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Q&A')}>
          <Text style={[styles.tab, activeTab === 'Q&A' && styles.activeTab]}>Q&A</Text>
        </TouchableOpacity>
      </View>

      {renderContent()}
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Lesson = ({ title, duration, isActive }) => (
  <TouchableOpacity style={[styles.lesson, isActive && styles.activeLesson]}>
    <Text style={styles.lessonTitle}>{title}</Text>
    <Text style={styles.lessonDuration}>{duration}</Text>
    <Icon name="chevron-forward-outline" size={20} color={isActive ? '#00BFFF' : '#000'} />
  </TouchableOpacity>
);

const Project = ({ title, author, image }) => (
  <View style={styles.projectContainer}>
    <View style={styles.project}>
      <Image source={image} style={styles.projectImage} />
      <Text style={styles.projectTitle}>{title}</Text>
      <Text style={styles.projectAuthor}>{author}</Text>
    </View>
  </View>
);

const FileItem = ({ title, author, image, downloadIcon }) => (
  <View style={styles.fileContainer}>
    <Image source={image} style={styles.fileIcon}/>
    <View style={styles.fileDetails}>
      <Text style={styles.fileName}>{title}</Text>
      <Text style={styles.fileInfo}>{author}</Text>
    </View>
    <Icon name={downloadIcon} size={24} color="#00BFFF" style={styles.downloadIcon} />
  </View>
);

const QA = ({ user, comment, likes, comments }) => (
  <View style={styles.qaContainer}>
    <Text style={styles.qaUser}>{user}</Text>
    <Text>{comment}</Text>
    <View style={styles.qaFooter}>
      <Text><Icon name="heart-outline" size={16} /> {likes}</Text>
      <Text>{comments} Comment</Text>
    </View>
  </View>
);
  
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  thumbnail: { width: '100%', height: 200, marginVertical: 16 },
  courseInfo: { paddingHorizontal: 16, marginBottom: 16 },
  courseTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  interactions: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 8 
  },
  likeShare: { 
    fontSize: 14, 
    color: '#888', 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  tabs: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginVertical: 16, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd' 
  },
  tab: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#888', 
    paddingVertical: 8,
  },
  activeTab: { 
    color: '#00BFFF', 
    borderBottomWidth: 2, 
    borderBottomColor: '#00BFFF' 
  },
  section: { paddingHorizontal: 16, marginBottom: 16 },
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 8, 
    color: '#333' 
  },
  lesson: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingVertical: 12, 
    paddingHorizontal: 8, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#ddd', 
    marginBottom: 8,
    backgroundColor: '#fff', 
  },
  activeLesson: { 
    borderColor: '#00BFFF', 
    backgroundColor: '#E6F7FF' 
  },
  lessonTitle: { 
    fontSize: 14, 
    color: '#333', 
    flex: 1 
  },
  lessonDuration: { 
    fontSize: 12, 
    color: '#888', 
    marginRight: 8 
  },
  uploadButton: { 
    height: 50,
    borderWidth: 2, 
    borderColor: '#00BFFF', 
    padding: 12, 
    borderRadius: 5, 
    marginBottom: 10, 
    backgroundColor: '#F4FEFF', 
    borderStyle: 'dashed',
  },
  uploadText: { 
    color: '#00BFFF', 
    textAlign: 'center', 
    fontSize: 14 
  },
  projectContainer: {
    marginBottom: 16,
    marginRight:8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  project: {
    alignItems: 'baseline',
  },
  projectImage: { 
    width: 180, 
    height: 120, 
    borderRadius: 8, 
    marginBottom: 8,
    resizeMode: 'cover',
  },
  projectTitle: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#333',
    marginBottom: 4 
  },
  projectAuthor: { 
    fontSize: 14, 
    color: '#888', 
    textAlign: 'center' 
  },

  fileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  fileIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  fileDetails: {
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    color: '#333',
  },
  fileInfo: {
    fontSize: 12,
    color: '#888',
  },
  downloadIcon: {
    marginLeft: 10,
  },

  description: { 
    fontSize: 14, 
    color: '#333', 
    marginVertical: 10 
  },
  qaContainer: { 
    padding: 16, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd', 
    backgroundColor: '#fff',
  },
  qaUser: { 
    fontWeight: 'bold', 
    marginBottom: 4,
    color: '#333'
  },
  qaFooter: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 4 
  },
  qaInput: { 
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 5, 
    padding: 10, 
    marginTop: 10, 
    fontSize: 14, 
    color: '#333'
  },
});


export default UXFoundation;
