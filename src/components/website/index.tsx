import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ContactUsContainer from "./contact-us";
import CoursesContainer from "./courses";
import HeroContainer from "./heroPage";
import Navigation from "./navigation";

export default function Home() {
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
        <ContactUsContainer/>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
