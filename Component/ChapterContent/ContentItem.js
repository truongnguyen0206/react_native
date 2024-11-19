import { View, Text, Dimensions } from 'react-native'; 
import React from 'react'; 

export default function ContentItem({ description }) { 
  return description && ( 
    <View style={{marginTop: 10}}> 
      <Text style={{fontSize: 15}}>
        {description.text}
      </Text> 
    </View> 
  ); 
}
