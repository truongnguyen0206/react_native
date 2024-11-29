import { View, Text } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';

export default function HeadMyCourseScreen({email}) {
  return (
    <View style={{ margin: 10, marginBottom: 20, flexDirection: 'row',gap:5,alignItems: 'center' }}>
      <View style={{borderRadius:50, backgroundColor: "white",width:50,height:50,justifyContent:"center",alignItems:"center"}}>
        <Icon name="user" size={25} color="black"  />
      </View>
      
      <View>
        <Text>Welcome</Text>
        <Text>{email}</Text>
      </View>

    </View>
  );
}