import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { useNavigation, useTheme } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const myColor = colors.iconColor;
  return (
    <View
      style={{
        marginTop: Constant.statusBarHeight,
        height: 45,
        backgroundColor: colors.headerColor,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "black",
        shadowOpacity: 0.2,
      }}>
      <View style={{ flexDirection: "row", margin: 5 }}>
        <AntDesign
          style={{ marginLeft: 20 }}
          name="youtube"
          size={28}
          color="red"
          onPress={() => {
            return navigation.navigate("home");
          }}
        />
        <Text
          onPress={() => {
            return navigation.navigate("home");
          }}
          style={{
            fontSize: 22,
            marginLeft: 5,
            fontWeight: "bold",
            color: myColor,
          }}>
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 5,
          justifyContent: "space-around",
          width: 150,
        }}>
        <Ionicons name="md-videocam" size={32} color={myColor} />
        <Ionicons
          name="md-search"
          size={32}
          color={myColor}
          onPress={() => {
            return navigation.navigate("search");
          }}
        />
        <MaterialIcons name="account-circle" size={32} color={myColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
