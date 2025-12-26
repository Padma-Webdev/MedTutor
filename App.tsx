import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Navigation from "./src/components/website/navigation/navBarTop";
import HeroContainer from "./src/components/website/heroPage";
import CoursesContainer from "./src/components/website/courses";

export default function App() {
  return (
    <ScrollView>
      <LinearGradient
        style={styles.container}
        colors={["#091121", "#112e36"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <Navigation />
        <HeroContainer />
        <CoursesContainer />
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
