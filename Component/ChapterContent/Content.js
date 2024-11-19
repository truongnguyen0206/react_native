import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import ContentItem from './ContentItem';
import Input from './Input';

export default function Content({ content }) {
  const [index, setIndex] = useState(0);  // Thêm state để quản lý chỉ mục hiện tại
  const contentRef = useRef(null);  // Sử dụng useRef để quản lý tham chiếu tới FlatList

  const onNext = () => {
    // Kiểm tra và cập nhật chỉ mục nếu không vượt quá giới hạn của mảng
    if (index < content.length - 1) {
      setIndex(index + 1);
      contentRef.current.scrollToIndex({ animated: true, index: index + 1 });
    }
  };

  return content && (
    <View>
      <FlatList 
        data={content}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={contentRef}
        renderItem={({ item }) => (
          <View style={{ width: Dimensions.get('window').width, backgroundColor: 'white', padding: 10, borderRadius: 10, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
            <ContentItem description={item.description} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Input: </Text>
            <Input content={item.content} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Output: </Text>
            <Input content={item.output} />
            <TouchableOpacity onPress={onNext} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10, marginRight: 10, marginBottom: 10, marginTop: 10, height: 30, width: 200, justifyContent: 'center', alignItems: 'center',alignSelf: 'center' }}> 
              <Text style={{ color: 'white' }}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
