import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './src/screens/Home/Home.screen';
import PerRow from './src/screens/PerRow/PerRow.screen';
import NavBar from './src/screens/Navbar/NavBar.screen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      swipeEnabled='true'
      tabBarOptions={{
        activeTintColor: '#56CCF2',
        labelStyle: { fontSize: 12, fontWeight: '600' },
        style: { backgroundColor: '#fff', color: '#56CCF2', elevation: 0.0 },
        indicatorStyle: { backgroundColor: '#56CCF2' },

      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'FARE CALCULATOR' }}
      />
      <Tab.Screen
        name="PerRow"
        component={PerRow}
        options={{ tabBarLabel: 'PER SEAT FARE' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
      <NavBar />
      <MyTabs />
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
});
