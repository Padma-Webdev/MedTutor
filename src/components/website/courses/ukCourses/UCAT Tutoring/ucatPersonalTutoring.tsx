import { View, Text, Dimensions } from "react-native";
import { groupStyles } from "../../irelandCourses/HPAT_Tutoring/groupPrepStyles";

export const UCATPersonalisedTutoring = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const isSmallScreen = screenWidth < 740;

  return (
    <View style={{ padding: 5 }}>
      <View style={{ alignSelf: "center" }}>
        <View style={{ alignSelf: "center" }}>
          <Text style={groupStyles.personalisedText}>1:1 UCAT Tutoring</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={groupStyles.personalisedSubText}>
            (Personalised 1-on-1 Coaching)
          </Text>
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
          This option is for the most ambitious students seeking intensive, tailored preparation.
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
        {"\u2022"} Elite Expertise: Your coach is guaranteed to be an elite tutor who scored in the 97th+ percentile on the UCAT, having mastered the strategies required to gain entry to the country's top medical schools.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Targeted Support: Receive bespoke guidance to address your specific weaknesses and accelerate your strengths, ensuring you are fully prepared to smash the UCAT.
      </Text>
      <Text
        style={
          isSmallScreen
            ? groupStyles.pricingNextLineSmallScreen
            : groupStyles.pricingNextLine
        }
      >
        {"\u2022"} Seamless Process: After booking, a Coordinator will arrange sessions that fit your schedule, focusing on leading you to a better UCAT score through tailored strategies and insight.
      </Text>
    </View>
  );
};

