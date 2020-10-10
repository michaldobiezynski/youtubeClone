import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import Constant from "expo-constants";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Card from "../components/Card";

const LittleCard = ({ name }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        height: 50,
        width: 180,
        borderRadius: 4,
        marginTop: 10,
      }}>
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 22,
          marginTop: 5,
        }}>
        {name}
      </Text>
    </View>
  );
};

export default function Explore() {
  const cardData = useSelector((state) => {
    return state;
  });
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
          <LittleCard name="Gaming" />
          <LittleCard name="Technology" />
          <LittleCard name="Trending" />
          <LittleCard name="Music" />
          <LittleCard name="News" />
          <LittleCard name="Sport" />
        </View>
        <Text style={{ margin: 8, fontSize: 22, borderBottomWidth: 1 }}>
          Trending Videos
        </Text>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
