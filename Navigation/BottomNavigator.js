import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Screen1 from '../Pages/Screen1';
import Screen2 from '../Pages/Screen2';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Screen1') {
            iconName = 'ios-information-circle';
          } else if (route.name === 'Screen2') {
            iconName = 'ios-list';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Screen1" component={Screen1} options={{ header: () => null }}/>
      <Tab.Screen name="Screen2" component={Screen2} options={{ header: () => null }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
