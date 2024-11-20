import { View,ScrollView } from "react-native";
import React,{useState} from "react";
import ProcessBar from "../Component/ChapterContent/ProcessBar";
import Content from "../Component/ChapterContent/Content";
import { useRoute } from "@react-navigation/native";

export default function ChapterContent() {
  const param = useRoute().params;
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    param?.Content && (
      <ScrollView>
      <View style={{ padding: 16 }}>
        <ProcessBar contentLength={param.Content.length} ContentIndex={currentIndex} /> 

        <Content content={param.Content} onContentIndexChange={setCurrentIndex}/>
      </View>
      </ScrollView>
    )
  );
}
