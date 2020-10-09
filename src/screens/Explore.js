import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Constant from "expo-constants";

import Header from "../components/Header";
import Card from "../components/Card";

export default function Explore() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
