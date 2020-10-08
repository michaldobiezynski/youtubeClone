import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";

function Card() {
  const myColor = "#212121";

  return (
    <View style={{ marginBottom: 10 }}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
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
            This is amazing card test estscdadasdfadfgsdsadasdasadsads
          </Text>
          <Text>This is amazing card</Text>
          <Text></Text>
        </View>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({});
