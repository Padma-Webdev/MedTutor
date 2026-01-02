import React from "react";
import { StyleSheet } from "react-native";
import RootStack from "./src/components/navigation/RootStack";

export default function App() {
  return <RootStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
