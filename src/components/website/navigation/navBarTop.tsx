import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

import { irishCourses, ukCourses } from "../courses/array";
import { useNavigation } from "@react-navigation/native";
import { RoutePath } from "../../navigation/routes";

export default function NavigationTop() {
  const navigation =useNavigation()
  const [region, setRegion] = useState(true);
  const regionSwitchROI = () => {
    setRegion(true);
  };
  const regionSwitchUK = () => {
    setRegion(false);
  };

  useEffect(() => {}, [region]);

  const regionalSwitch = () => {
    return (
      <View style={styles.reigonalSwitchView}>
        <TouchableOpacity
          style={region ? styles.activeRegion : styles.switchButton}
          onPress={regionSwitchROI}
        >
          <Text style={styles.buttonText}>🇮🇪 IE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={!region ? styles.activeRegion : styles.switchButton}
          onPress={regionSwitchUK}
        >
          <Text style={styles.buttonText}>🇬🇧 UK</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const courses = (item: any, index: any) => {
    return (
      <View key={index.toString()}>
        <TouchableOpacity onPress={() => navigation.navigate(RoutePath.HPAT as never)}>
          <Text style={styles.headerText}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const displayROICourses = () => {
    return irishCourses?.map((item, index) => {
      return courses(item, index);
    });
  };

  const displayUKCourses = () => {
    return ukCourses?.map((item, index) => {
      return courses(item, index);
    });
  };

  const coursesDataSwitch = () => {
    const country = region;
    return country ? displayROICourses() : displayUKCourses();
  };

  return (
    <View>
      <View style={styles.headerBackground}>
        <TouchableOpacity style={styles.logoSpace}>
          <Image
            source={require("../../images/logo.png")}
            style={styles.headerLogo}
          />
          <Text style={styles.headerLogoText}>MedTutor</Text>
        </TouchableOpacity>
          <View style={styles.headerContentSpace}> {coursesDataSwitch()}</View>
          <View style={styles.regswitchView}>
            {regionalSwitch()}
          </View>
      </View>
    </View>
  );
}
