import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DemoApp from '../Demo';
import Cart from '../screen/cart';

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="DemoApp" screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name="DemoApp" component={DemoApp} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}

export default AppNavigation