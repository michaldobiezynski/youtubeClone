import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, TextInput, View, ScrollView } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

import Card from "../components/Card";

export default function SearchScreen() {
  const myColor = "#212121";

  const [value, setValue] = useState("");

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
        <Ionicons name="md-send" size={32} color={myColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
