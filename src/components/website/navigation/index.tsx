
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import NavigationSide from "./navBarSide";
import NavigationTop from "./navBarTop";

export default function Navigation() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
return(
    <>
    {isSmallScreen ? <NavigationSide/>:<NavigationTop/>}
    </>
)
}