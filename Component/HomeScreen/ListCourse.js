import {View,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import React,{useEffect,useState} from 'react';
// import khi dùng dấu {} là import name nghĩa là từ file export dc gọi 
//là const export hay export {a,b} còn import ko dấu {} gọi là export default và
// export default chỉ dc 1 lần export trong 1 file
import {createUserControlCourse, GetListCourses,checkUserControlCourse} from '../../Services/Hygraph'; 
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';

import HeadListCourse from './HeadListCourse';
export default function ListCourse({courseLevel, headerText}) {
const [data,setData] = useState([]);
const navigaton = useNavigation();
// {email} = useRoute().params.email; // lấy email từ route

const handleUserControlCourse = async (item) => {
    try {
      const res = await checkUserControlCourse(item.id, 'hotanloc9516@gmail.com');
      if (res.length > 0) {
        // Đã tồn tại, điều hướng đến Course Detail
        navigaton.navigate('Course Detail', { Course: item });
      } else {
        // Chưa tồn tại, tạo mới
        await createUserControlCourse(item.id, 'hotanloc9516@gmail.com');
        navigaton.navigate('Course Detail', { Course: item });
      }
    } catch (error) {
      console.error(error);
    }
  };

const getDataCourse = () =>{
    GetListCourses(courseLevel).then((res) => {
        console.log(res);
        setData(res);
    }).catch((err) => {
        console.log(err);
    });
}

useEffect(() => {
    getDataCourse();
}, []);


    return (
        <View style={{marginLeft: 10}}>
            <HeadListCourse text= {headerText} />
            <FlatList
                data = {data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return(
                    <TouchableOpacity  onPress={() => handleUserControlCourse(item) }>
                        <View style={{padding:15, backgroundColor: 'white',borderRadius: 10,marginRight: 15}}>
                            <Image source={{uri: item.banner.url}} style={{width: 150, height: 100}}/>
                            <Text style={{paddingTop: 5}}>{item.name}</Text>

                            <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'space-between' }}>
                                <View style={{flexDirection: 'row',alignItems:'center',gap: 5,paddingTop: 5 }}>
                                    <Icon name="book-open" size={15} color="black"/>
                                    <Text>{item.chapter.length} Chaptes</Text>
                                </View>

                                <View style={{flexDirection: 'row',alignItems:'center',gap: 5, paddingTop: 5 }}>
                                    <Icon name="clock" size={15} color="black"/>
                                    <Text>{item.time}</Text>
                                </View>
                            </View>
                            <Text style={{paddingTop: 5, color: '#0000EE',}}>{item.price==0? 'Free': item.price}</Text>
                            
                        </View>
                    </TouchableOpacity>
                    );
                }}
                showsHorizontalScrollIndicator ={false}
                horizontal={true}
            />
        </View>
    );
    }