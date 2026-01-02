import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function HPATContainer() {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#091121", "#112e36"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
    </LinearGradient>
  );
}
