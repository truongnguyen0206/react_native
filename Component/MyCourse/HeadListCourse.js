import { View,Text } from "react-native";

export default function HeadListCourse({text}) {
    return (
        <View>
            <Text style={{fontSize:20, fontWeight:'bold'}}>
                {text}
            </Text>
        </View>
    );
}
