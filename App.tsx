import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Home from "./src/components/website";

export default function App() {
  return (
      <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
