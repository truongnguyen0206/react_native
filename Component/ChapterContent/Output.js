import { View, Text } from 'react-native'
import React from 'react'

export default function Input({content}) {
  return content&& (
    <View style={ {backgroundColor: 'black', marginTop: 20, marginBottom:20,padding: 10,marginRight: 40}}>
       

      <Text style={{color:'white'}}>{content.text}</Text>
    </View>
  )
}