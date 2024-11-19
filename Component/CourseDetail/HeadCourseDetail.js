import { Dimensions, Image, ScrollView } from "react-native";
import { View, Text } from "react-native";
import  Icon  from "react-native-vector-icons/EvilIcons";
import  Icon2  from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/FontAwesome5";

export default function HeadCourseDetail({ Course }) {
    return (
            <View style={{padding: 10,marginTop:20,alignItems: 'flex-start', backgroundColor: 'white', borderRadius: 20 ,padding:20}}>
                <Image source={{ uri: Course.banner.url }} style={{alignSelf:'center' ,width: Dimensions.get('window').width * 0.95, height: Dimensions.get('window').height * 0.25 }} />
                <Text style={{marginTop:10,fontSize: 20, fontWeight:"bold"}}>Learn {Course.name} </Text>

                <View style={{ marginTop:10,width:Dimensions.get('window').width,flexDirection: 'row',justifyContent:'space-between',paddingRight: 40,paddingHorizontal:20, alignItems:"center"}}>
                <View style={{ flexDirection:'row',justifyContent:'space-around',alignItems: 'center'}}>
                    <Icon name="user"size={30} color="black"style={{marginRight: 10}} />
                    <Text>{Course.author}</Text>
                </View>

                <View style={{ flexDirection:'row',justifyContent:'space-around',alignItems: 'center'}}>
                    <Icon name="clock"size={30} color="black"style={{marginRight: 10}} />
                    <Text>{Course.time}</Text>
                </View>
                </View>
                
                <View style={{ marginTop:10, width:Dimensions.get('window').width ,flexDirection: 'row', justifyContent:'space-between',paddingRight: 40,paddingHorizontal:20, alignItems:'center'}}>
                <View style={{ flexDirection:'row',justifyContent:'space-around',alignItems: 'center'}}>
                    <Icon2 name="book-open"size={20} color="black"style={{marginRight: 10,marginLeft:5}} />
                    <Text>{Course.chapter.length} Chapter</Text>
                </View>
                <View style={{ flexDirection:'row',justifyContent:'space-around',alignItems: 'center'}}>
                    <Icon3 name="signal"size={15} color="black"style={{marginRight: 10}} />
                    <Text>{Course.courseLevel}</Text>
                </View>
                </View> 

                <Text style={{marginTop:10,fontSize: 15, fontWeight:"bold"}}>Description</Text>
                <Text style={{marginTop:10,textAlign:'left'}}>{Course.description.text}</Text>
            </View>
    );
}