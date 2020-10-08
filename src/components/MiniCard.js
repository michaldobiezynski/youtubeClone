import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";

function MiniCard() {
  const myColor = "#212121";

  return (
    <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        }}
        style={{ width: "45%", height: 100 }}></Image>
      <View style={{ paddingLeft: 7 }}>
        <Text
          style={{ fontSize: 17, width: Dimensions.get("screen").width / 2 }}
          ellipsizeMode="tail"
          numberOfLines={3}>
          This a an amazing mini cardadsdsadasadsadsdasdasadsadsadsadsdasads
        </Text>
        <Text style={{ fontSize: 12 }}>This is amazing card</Text>
      </View>
    </View>
  );
}

export default MiniCard;

const styles = StyleSheet.create({});
