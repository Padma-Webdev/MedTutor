import React from "react";
import BackButton from "../../../common/back-button";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { hpatStyles } from "../HPAT/hpatStyles";
import { groupStyles } from "./groupPrepStyles";
import { PersonalisedTutoring } from "./personalCoaching";
import { SmallGroupTutoring } from "./smallGroup";
import { TwoDayCourse } from "./twoDay";
import { EightWeek } from "./eightDay";

export default function DayPrepContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;

  const Header = () => {
    return (
      <View>
        <Text style={groupStyles.mainText}>
          HPAT Preparation Courses – Online HPAT Preparation Ireland
        </Text>
        <Text style={hpatStyles.hpatDesc}>
          Our HPAT preparation courses are designed to help students perform
          confidently and effectively in the HPAT. All courses are delivered
          live online, taught by experienced HPAT educators, and focus on exam
          strategy, reasoning skills, and realistic exam practice.
        </Text>
        <Text style={hpatStyles.hpatDesc2}>
          Whether you are looking for intensive short-term preparation or
          long-term structured support, our HPAT courses provide everything
          needed to maximise performance.
        </Text>
        <Text style={groupStyles.Bookings}>
          For Bookings: contactus@medtutor.ie
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={hpatStyles.mainScroll}>
      <View style={hpatStyles.backButton}>
        <BackButton />
      </View>
      <View style={groupStyles.topHeader}>{Header()}</View>
      <View style={groupStyles.flexSplit}>
        <View style={groupStyles.personalisedCont}>
          {TwoDayCourse()}
        </View>
        <View style={groupStyles.personalisedCont}>{EightWeek()}</View>
      </View>
    </ScrollView>
  );
}
