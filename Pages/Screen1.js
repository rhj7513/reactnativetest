import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 1</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

Screen1.navigationOptions = {
    headerShown: false,
  };

export default Screen1;
