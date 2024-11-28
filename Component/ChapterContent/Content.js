import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import ContentItem from './ContentItem';
import Input from './Input';
import ProcessBar from './ProcessBar';
import { updateCourseProgress, markChapterCompleted } from '../../Services/Hygraph';

export default function Content({ content }) {
  const [index, setIndex] = useState(0);
  const contentRef = useRef(null);

  const onNext = async () => {
    if (index < content.length - 1) {
      const newIndex = index + 1;
      setIndex(newIndex);
      contentRef.current.scrollToIndex({ animated: true, index: newIndex });

      const progress = ((newIndex + 1) / content.length) * 100;
      const courseId = content[newIndex].courseId;
      const userEmail = "hotanloc9516@gmail.com";
      await updateCourseProgress(courseId, userEmail, progress);
    }
  };

  const onComplete = async () => {
    try {
      const currentChapterId = content[index].id;
      const courseId = content[index].courseId;
      const userEmail = "hotanloc9516@gmail.com";
      await markChapterCompleted(courseId, userEmail, currentChapterId);
      alert("Bạn đã hoàn thành chương này!");
    } catch (error) {
      console.error("Lỗi khi đánh dấu hoàn thành:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return content && (
    <View>
      <ProcessBar contentLength={content.length} ContentIndex={index} />
      <FlatList
        data={content}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={contentRef}
        renderItem={({ item }) => (
          <View style={{
            width: Dimensions.get('window').width,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            justifyContent: 'center'
          }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
            <ContentItem description={item.description} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Input: </Text>
            <Input content={item.content} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Output: </Text>
            <Input content={item.output} />

            <TouchableOpacity
              onPress={onComplete}
              style={{
                backgroundColor: 'green',
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                marginBottom: 10,
                height: 50,
                width: 200,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
              }}
            >
              <Text style={{ color: 'white' }}>Hoàn thành</Text>
            </TouchableOpacity>

            {index < content.length - 1 && (
              <TouchableOpacity
                onPress={onNext}
                style={{
                  backgroundColor: 'blue',
                  padding: 10,
                  borderRadius: 10,
                  marginTop: 10,
                  height: 50,
                  width: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center'
                }}
              >
                <Text style={{ color: 'white' }}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}
