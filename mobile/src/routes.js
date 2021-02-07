import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Budget from './pages/Budget';

const Stack = createStackNavigator();

export default function routes() {
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: '#17A2B8',
    },
    headerTintColor: '#FFF',
    headerBackTitle: 'Voltar'
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Orçamento" component={Budget} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};