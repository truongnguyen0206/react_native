import { View, Text } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';

export default function HeadProfileScreen({email}) {
  return (
    <View style={{ alignItems: 'center', padding: 20,marginTop: 80, }}>
      <View style={{borderRadius:100, backgroundColor: "white",width:120,height:120,justifyContent:"center",alignItems:"center",}}>
        <Icon name="user" size={50} color="black"  />
      </View>
      <View>
      <Text style={{fontSize:25}}>{email.split('@')[0]}</Text>
      </View>
    </View>
  );
}