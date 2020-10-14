import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  FlatList,
  Animated
} from "react-native";
import Constant from "expo-constants";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Card from "../components/Card";

export default function HomeScreen({ navigation }) {
const scrollY = new Animated.Value(0)
const diffClamp = Animated.diffClamp(scrollY, 0,45)
const translateY = diffClamp.interpolate({
  inputRange:[0,45],
  outputRange:[0,-45]
})

  const cardData = useSelector((state) => {
    return state.cardData;
  });
  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={{transform:[
        {translateY: translateY},
        
      ],    elevation:4,
      zIndex:100,}}>

      <Header />
      </Animated.View>
      <FlatList
        keyExtractor={(item) => item.id.videoId}
        data={cardData}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
