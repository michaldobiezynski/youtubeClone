import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Subscribe from "./src/screens/Subscribe";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";
import { reducer } from "./src/reducers/reducer";

const store = createStore(reducer);

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "explore") {
            iconName = "explore";
          } else if (route.name === "subscribe") {
            iconName = "subscriptions";
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
      }}>
      <Tabs.Screen name="home" component={Home}></Tabs.Screen>
      <Tabs.Screen name="explore" component={Explore}></Tabs.Screen>
      <Tabs.Screen name="subscribe" component={Subscribe}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode>
          <Stack.Screen name="rootHome" component={RootHome}></Stack.Screen>
          <Stack.Screen name="search" component={Search}></Stack.Screen>
          <Stack.Screen name="video" component={VideoPlayer}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
