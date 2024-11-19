import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';


export default function ListChapter({listChapter}) {

    const navigation = useNavigation(); 
    const  handeleChapterContent = (content) => {
      navigation.navigate('Chapter Contet', {Content: content});
      console.log(content);
    }
    return listChapter &&(
        <View>
            {listChapter.map((chapter,index)=>(
                <TouchableOpacity key={index} onPress={()=>handeleChapterContent(chapter.content)}>
                <View  style={{padding:20,margin:10,alignItems: 'center', backgroundColor: 'white', borderRadius: 10 , flexDirection: 'row',justifyContent:'space-around'}}>
                    <Text style={{fontSize:20,fontWeight:'bold', marginRight:10}}>Chapter {index+1}</Text>
                    <Text style={{marginRight:10}}>{chapter.title}</Text>
                    <Icon name="play" size={30} color="black" />
                </View>
                </TouchableOpacity>
                ))}
        </View> 
    );
}