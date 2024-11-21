import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import HeadCourseDetail from "../Component/CourseDetail/HeadCourseDetail";
import { ScrollView } from "react-native";
import ListChapter from "../Component/CourseDetail/ListChapter";

export default function CourseDetail() {
  const param = useRoute().params;
  useEffect(() => {
    console.log(param.Course);
  }, []);

  return param.Course && (
    
      <ScrollView>
        <HeadCourseDetail Course={param.Course} />
          <View>
            <ListChapter listChapter={param.Course.chapter} />
          </View>
      </ScrollView>
    
  );
}
