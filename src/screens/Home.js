import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import Constant from "expo-constants";

import Header from "../components/Header";
import Card from "../components/Card";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
