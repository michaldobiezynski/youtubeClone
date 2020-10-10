import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";

function Card(props) {
  const myColor = "#212121";

  return (
    <View style={{ marginBottom: 10 }}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
        }}
        style={{ width: "100%", height: 200 }}></Image>
      <View style={{ flexDirection: "row", margin: 5 }}>
        <MaterialIcons name="account-circle" size={40} color={myColor} />

        <View style={{ marginLeft: 10 }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={{
              fontSize: 20,
              width: Dimensions.get("screen").width - 50,
            }}>
            {props.title}
          </Text>
          <Text>{props.channel}</Text>
          <Text></Text>
        </View>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({});
