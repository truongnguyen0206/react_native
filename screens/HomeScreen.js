import React from 'react';
import { View, Text, Button } from 'react-native';

const data = Array.from({ length: 200 }, (_, index) => ({ id: index, title: `Item ${index + 1}` }));

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Màn hình chính</Text>
      <Button
        title="Đi đến UX Foundation"
        onPress={() => navigation.navigate('UX Foundation')}
      />
      <Button
        title="Đi đến Teacher Profile"
        onPress={() => navigation.navigate('Teacher Profile')}
      />
    </View>
  );
};

export default HomeScreen;
