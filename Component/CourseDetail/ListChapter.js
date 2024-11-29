import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect,useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { getUserControlCourseCompleteChapter } from "../../Services/Hygraph";



export default function ListChapter({listChapter, controlCourseId,listChpaterComplete}) {

    
    const navigation = useNavigation(); 

    const checkListChpaterComplete =(chapterID) =>{
        if(listChpaterComplete.length <= 0)
            return false;
        console.log("listChpaterCompleteaaaaaaa",listChpaterComplete);
        return listChpaterComplete.find(item => item.chapterId == chapterID)
    }
     
    const  handeleChapterContent = (chapter) => {
      navigation.navigate('Chapter Contet', {Content: chapter.content, ChapterID: chapter.id, ControlCourseId: controlCourseId});
      console.log("chapterId",chapter.id,"controlCourseId",controlCourseId);
    }
    return listChapter &&(
        <View>
            {listChapter.map((chapter,index)=>(
                <TouchableOpacity key={index} onPress={()=>handeleChapterContent(chapter)}>
                <View  style={[checkListChpaterComplete(chapter.id)? styles.CompleteChpater : styles.onCompleteChpater]}>
                    <Text style={{fontSize:20,fontWeight:'bold', marginRight:10}}>Chapter {index+1}</Text>
                    <Text style={{marginRight:10}}>{chapter.title}</Text>
                    {
                        checkListChpaterComplete(chapter.id)? <Icon2 name = "checkcircleo" size={30} color="green"/> :  <Icon name="play" size={30} color="black" />
                    }
                    
                </View>
                </TouchableOpacity>
                ))}
        </View> 
    );
}
const styles = StyleSheet.create({
    onCompleteChpater: {
        padding:20,
        margin:10,
        alignItems: 'center',
         backgroundColor: 'white', 
         borderRadius: 10 , 
         flexDirection: 'row',
         justifyContent:'space-around',
         
    },
    CompleteChpater: {
        padding:20,
        margin:10,
        alignItems: 'center',
         backgroundColor: 'rgba(50, 205, 50, 0.5)', 
         borderRadius: 10 , 
         flexDirection: 'row',
         justifyContent:'space-around',
         
    }
})