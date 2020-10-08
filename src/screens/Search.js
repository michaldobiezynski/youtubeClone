import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

import env from "../../env.json";

import MiniCard from "../components/MiniCard";

export default function SearchScreen() {
  const myColor = "#212121";

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [miniCardData, setMiniCardData] = useState([]);

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=${env.API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMiniCardData(data.items);
        setLoading(false);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 4,
          shadowOffset: { width: 1, height: 1 },
          shadowColor: "black",
          shadowOpacity: 0.2,
          backgroundColor: "white",
        }}>
        <Ionicons name="md-arrow-back" size={32} color={myColor} />
        <TextInput
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
          onChangeText={(text) => {
            return setValue(value);
          }}
        />
        <Ionicons
          onPress={() => {
            return fetchData();
          }}
          name="md-send"
          size={32}
          color={myColor}
        />
      </View>
      {loading ? (
        <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" />
      ) : (
        <FlatList
          data={miniCardData}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => {
            return (
              <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
        />
      )}

      {/* <ScrollView>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({});
