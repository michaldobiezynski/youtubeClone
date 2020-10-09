import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Constant from "expo-constants";

import Header from "../components/Header";
import Card from "../components/Card";

export default function VideoPlayer() {
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <Text>VideoPlayer</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
