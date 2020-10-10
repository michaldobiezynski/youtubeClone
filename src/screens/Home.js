import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import Constant from "expo-constants";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Card from "../components/Card";

export default function HomeScreen({ navigation }) {
  const cardData = useSelector((state) => {
    return state;
  });
  return (
    <View style={{ flex: 1 }}>
      <Header />
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
      />
    </View>
  );
}

const styles = StyleSheet.create({});
