import { View, Text, Dimensions } from "react-native";
import { groupStyles } from "../../irelandCourses/HPAT_Tutoring/groupPrepStyles";

export const UCATSmallGroupTutoring = () => {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
  return (
    <View style={{ padding: 5 }}>
      <View style={{ alignSelf: "center" }}>
        <View style={{ alignSelf: "center" }}>
          <Text style={groupStyles.personalisedText}>
            Small Group UCAT Tutoring
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={groupStyles.personalisedSubText}>(Live Online)</Text>
        </View>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Text
          style={
            isSmallScreen
              ? groupStyles.groupBodySmallScreen
              : groupStyles.groupBody
          }
        >
          Learn, collaborate, and stay motivated in a dynamic group setting.
        </Text>
      </View>
      <Text
        style={
          isSmallScreen
            ? groupStyles.groupBoldHeaderSmallScreen
            : groupStyles.groupBoldHeader
        }
      >
        Includes:
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Interactive Learning: Our live webinar UCAT courses ensure you are part of a small group, allowing for dynamic interaction and ample opportunity to ask our expert tutors any UCAT questions you may have.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Collaborative Environment: Enjoy being mentored by an expert while benefiting from the personal experiences and insights of your peers. The group environment provides continuous motivation and encouragement.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Consistent Preparation: Maintain focused and continual training right up until the UCAT exam, ensuring you are ready to perform at your absolute best on the day.
      </Text>
    </View>
  );
};

