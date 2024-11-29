import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import HeadCourseDetail from "../Component/CourseDetail/HeadCourseDetail";
import { ScrollView } from "react-native";
import ListChapter from "../Component/CourseDetail/ListChapter";
import { getUserControlCourseCompleteChapter,getUserControlCourseId } from "../Services/Hygraph";

export default function CourseDetail() {
  const param = useRoute().params;
  const CourseId = param.CourseId;
  const Email = param.Email;
  const [controlCourseId,setControlCourseId] = useState('');
  const [listCompleteChapter, setListCompleteChapter] = useState([]);
    useEffect(() => {
    const fetchUserControlCourseId = async () => {
      try {
        const id = await getUserControlCourseId(CourseId, Email);
        setControlCourseId(id);
        console.log(id);
         // In ra ID
      } catch (error) {
        console.error("Error fetching user control course ID:", error);
      }
    };
    
    fetchUserControlCourseId();
  }, [CourseId, Email]);

  useEffect(() => {
    if (controlCourseId) {
      console.log("Updated controlCourseId:", controlCourseId); // Kiểm tra trạng thái sau khi cập nhật
  
      const getListCompleteChapter = async () => {
        try {
          const list = await getUserControlCourseCompleteChapter(controlCourseId);
          setListCompleteChapter(list);
          console.log("listCompleteChapter", list);
        } catch (error) {
          console.error("Error fetching complete chapters:", error);
        }
      };
  
      getListCompleteChapter();
    }
  }, [controlCourseId]);
  useEffect(() => {console.log("ListChapter",listCompleteChapter)},[listCompleteChapter]);
  const fetchCompleteChapters = useCallback(async () => {
    if (controlCourseId) {
      try {
        const list = await getUserControlCourseCompleteChapter(controlCourseId);
        setListCompleteChapter(list);
      } catch (error) {
        console.error("Error fetching complete chapters:", error);
      }
    }
  }, [controlCourseId]);

  useFocusEffect(
    useCallback(() => {
      fetchCompleteChapters();
    }, [fetchCompleteChapters])
  );

  return param.Course && (
    
      <ScrollView>
        <HeadCourseDetail Course={param.Course} />
          <View>
            <ListChapter listChapter={param.Course.chapter} controlCourseId={controlCourseId} listChpaterComplete={listCompleteChapter}/>
          </View>
      </ScrollView>
    
  );
}