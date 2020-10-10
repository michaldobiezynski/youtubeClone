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
import Constant from "expo-constants";
import env from "../../env.json";
import MiniCard from "../components/MiniCard";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

export default function SearchScreen() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const myColor = colors.iconColor;

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  // const [miniCardData, setMiniCardData] = useState([]);
  const miniCardData = useSelector((state) => {
    return state.cardData;
  });
  const dispatch = useDispatch();

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=${env.API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        // setMiniCardData(data.items);
        dispatch({ type: "add", payload: data.items });
        setLoading(false);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginTop: Constant.statusBarHeight,

          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 4,
          shadowOffset: { width: 1, height: 1 },
          shadowColor: "black",
          shadowOpacity: 0.2,
          backgroundColor: colors.headerColor,
        }}>
        <Ionicons
          color={myColor}
          name="md-arrow-back"
          size={32}
          color={myColor}
          onPress={() => {
            return navigation.goBack();
          }}
        />
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
