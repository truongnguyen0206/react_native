import { Dimensions, View } from "react-native";
import React from "react";

export default function ProcessBar({ contentLength, ContentIndex }) {
  const arraySize = Array.from({ length: contentLength }, (_, index) => index + 1 );
  const width = Dimensions.get("window").width/contentLength*0.8 // Set width as a percentage
  
  return (
    <View style={{ flexDirection: "row", marginVertical: 10 }}>
      {arraySize.map((item, index) => (
        <View
          key={index} 
          style={{
            backgroundColor: index < ContentIndex ? "#44bfd9" : "#d3d3d3", 
            width: width ,
            borderRadius: 10,
            height: 10,
            margin: 5, 
          }}
        />
      ))}
    </View>
  );
}
