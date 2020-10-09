import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Subscribe from "./src/screens/Subscribe";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="home" component={Home}></Tabs.Screen>
      <Tabs.Screen name="explore" component={Explore}></Tabs.Screen>
      <Tabs.Screen name="subscribe" component={Subscribe}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode>
        <Stack.Screen name="rootHome" component={RootHome}></Stack.Screen>
        <Stack.Screen name="search" component={Search}></Stack.Screen>
        <Stack.Screen name="video" component={VideoPlayer}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
