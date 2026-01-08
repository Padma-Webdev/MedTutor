import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { courseStyles } from "./styles";
import { courseData, courseDataTwo } from "./array";
import { Contact, NotebookTabsIcon, SquareUserRound } from "lucide-react";

export default function CoursesContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;

  const courseTile = (item: any, index: any) => {
    return (
      <View
        style={
          isSmallScreen
            ? courseStyles.courseTileMobile
            : courseStyles.courseTile
        }
        key={index.toString()}
      >
        <TouchableOpacity style={courseStyles.tView}>
          <NotebookTabsIcon
            style={isSmallScreen ? courseStyles.iconMobile : courseStyles.iconOne}
          />
          <Text style={courseStyles.courseTitle}>{item.title}</Text>
          <Text style={courseStyles.courseDesc}>{item.description}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const courseTileTwo = (item: any, index: any) => {
    return (
      <View style={ isSmallScreen
            ? courseStyles.courseTileMobile
            : courseStyles.courseTile} key={index.toString()}>
        <TouchableOpacity style={courseStyles.tView}>
          <Contact style={isSmallScreen ? courseStyles.iconMobile : courseStyles.icon}/>
          <Text style={courseStyles.courseTitle}>{item.title}</Text>
          <Text style={courseStyles.courseDesc}>{item.description}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const displayTileOne = () => {
    return courseData?.map((item, index) => {
      return courseTile(item, index);
    });
  };
  const displayTileTwo = () => {
    return courseDataTwo?.map((item, index) => {
      return courseTileTwo(item, index);
    });
  };

  return (
    <View style={isSmallScreen ? courseStyles.mainContainerMobile : courseStyles.mainContainer}>
      <View style={courseStyles.textboxOne}>
        <Text style={courseStyles.title}>WHY CHOOSE MEDTUTOR</Text>
      </View>
      <View style={courseStyles.subtitle}>
        <Text style={courseStyles.subtext}>Everything You Need to Succeed</Text>
        <Text style={courseStyles.footerText}>
          Our platform combines expert guidance with cutting-edge learning tools
          to help you achieve your medical career goals.
        </Text>
      </View>
      <View style={courseStyles.mainView}>
        <View
          style={
            isSmallScreen
              ? courseStyles.smallScreentileone
              : courseStyles.webscreenone
          }
        >
          {displayTileOne()}
        </View>
        <View
          style={isSmallScreen
              ? courseStyles.smallScreentiletwo
              :courseStyles.webscreentwo}
        >
          {displayTileTwo()}
        </View>
      </View>
    </View>
  );
}
