import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import ContentItem from './ContentItem';
import Input from './Input';
import ProcessBar from './ProcessBar';  // Import ProcessBar
import { useNavigation } from '@react-navigation/native';

export default function Content({ content,onFinish }) {
  const [index, setIndex] = useState(0);  // Thêm state để quản lý chỉ mục hiện tại
  const contentRef = useRef(null);  // Sử dụng useRef để quản lý tham chiếu tới FlatList
  const navigation = useNavigation(); 
  // Hàm này sẽ cuộn tới mục tiếp theo
  const onNext = () => {
    // Kiểm tra và cập nhật chỉ mục nếu không vượt quá giới hạn của mảng
    if (index < content.length -1) {
      const newIndex = index + 1;
      setIndex(newIndex);  // Cập nhật index
      contentRef.current.scrollToIndex({ animated: true, index: newIndex });  // Cuộn tới chỉ mục mới
      console.log('index',index)
      console.log('content.length',content.length)
    }else{
      // navigation.goBack()  // Nếu vượt quá giới hạn, điều hướng tới màn hình Course Detail
      onFinish()
    }
  };

  return content && (
    <View>
      {/* Hiển thị ProcessBar */}
      <ProcessBar contentLength={content.length} ContentIndex={index +1} />

      <FlatList 
        data={content}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={contentRef}  // Đảm bảo ref được truyền đúng
        renderItem={({ item }) => (
          <View style={{ width: Dimensions.get('window').width, backgroundColor: 'white', padding: 10, borderRadius: 10, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
            <ContentItem description={item.description} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Input: </Text>
            <Input content={item.content} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Output: </Text>
            <Input content={item.output} />
            {/* Nút Next */}
            <TouchableOpacity onPress={onNext} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10, marginRight: 10, marginBottom: 10, marginTop: 10, height: 50, width: 200, justifyContent: 'center', alignItems: 'center',alignSelf: 'center' }}> 
              <Text style={{ color: 'white' }}>
                {index < content.length -1 ? 'Next' : 'Finish'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
