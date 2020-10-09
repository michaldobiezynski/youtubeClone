import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";

function MiniCard(props) {
  const myColor = "#212121";

  return (
    <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
        }}
        style={{ width: "45%", height: 100 }}></Image>
      <View style={{ paddingLeft: 7 }}>
        <Text
          style={{ fontSize: 17, width: Dimensions.get("screen").width / 2 }}
          ellipsizeMode="tail"
          numberOfLines={3}>
          {props.title}
        </Text>
        <Text style={{ fontSize: 12 }}>{props.channel}</Text>
      </View>
    </View>
  );
}

export default MiniCard;

const styles = StyleSheet.create({});
