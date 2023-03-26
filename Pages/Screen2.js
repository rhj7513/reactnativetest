import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 2</Text>
      <Button
        title="Go back to Screen 1"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

Screen2.navigationOptions = {
    headerShown: false,
  };

export default Screen2;
