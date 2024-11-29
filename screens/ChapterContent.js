import { View,ScrollView, ToastAndroid } from "react-native";
import React,{useState} from "react";
import ProcessBar from "../Component/ChapterContent/ProcessBar";
import Content from "../Component/ChapterContent/Content";
import { useNavigation, useRoute } from "@react-navigation/native";
import { updateChapterComplete } from "../Services/Hygraph";

export default function ChapterContent() {
  const param = useRoute().params;
  const navigation = useNavigation(); 
  const ChapterID = param.ChapterID;
  const ControlCourseId = param.ControlCourseId;

  const finish = () => {
    console.log('Finishing chapter:', { ChapterID, ControlCourseId });
    if (ChapterID && ControlCourseId) {
      updateChapterComplete(ControlCourseId, ChapterID)
        .then(() => {
          ToastAndroid.show('Chapter completed!', ToastAndroid.SHORT);
          navigation.goBack();
        })
        .catch((err) => console.error('Update failed:', err));
    } else {
      console.error('Invalid ChapterID or ControlCourseId');
    }
  };
  

  return (
    param?.Content && (
      <ScrollView>
      <View style={{ padding: 16 }}>
         
        <Content content={param.Content} 
        onFinish={finish}/>
      </View>
      </ScrollView>
    )
  );
}
