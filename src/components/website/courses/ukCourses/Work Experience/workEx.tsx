import React from "react";
import BackButton from "../../../common/back-button";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { hpatStyles } from "../../irelandCourses/HPAT/hpatStyles";
import { groupStyles } from "../../irelandCourses/HPAT_Tutoring/groupPrepStyles";
import { JuniorStyles } from "../../irelandCourses/JuniorCert/juinosStyles";

export default function WorkExContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
  const image = {
    uri: "https://images.pexels.com/photos/6549862/pexels-photo-6549862.jpeg?_gl=1*ubd2sz*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgzMjgxMjIkbzYkZzEkdDE3NjgzMjk0NTIkajQ0JGwwJGgw",
  };

  const Header = () => {
    return (
      <View
        style={{
          alignSelf: "center",
          width: "100%",
          marginBottom: 10,
          borderRadius: 5,
          borderWidth: 3,
          padding: 2,
          borderColor: "#23CFBB",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#080e19",
            opacity: 0.5,
          }}
        />
        <Text style={JuniorStyles.mainText}>Work Experience</Text>
        <Text style={hpatStyles.hpatDescWork}>
          Work experience is a must for UK medical school applications. Medical
          schools want to see that you've spent time in healthcare settings and
          know what you're getting into. Securing meaningful work experience is
          one of the biggest hurdles for students in UK and Ireland.
        </Text>
        <Text style={hpatStyles.hpatDescWork}>
          Whether it's shadowing doctors, volunteering in care homes, or working
          in hospitals, your work experience proves you're making an informed
          choice about your future. Without it, your application won't stand out
          against candidates who can show they truly understand what being a
          doctor means.
        </Text>
        <Text style={hpatStyles.hpatDescWork}>
          At MedTutor, we help students identify creative and impactful ways to
          build their portfolio, even when traditional placements aren’t
          available in UK and Ireland.
        </Text>
        <TouchableOpacity
          style={
            isSmallScreen
              ? {
                  backgroundColor: "#2563EB",
                  borderRadius: 10,
                  padding: 5,
                  width: "95%",
                  alignSelf: "center",
                  marginBottom: 15,
                }
              : {
                  backgroundColor: "#2563EB",
                  borderRadius: 5,
                  padding: 5,
                  width: 900,
                  alignSelf: "center",
                  alignContent: "center",
                  marginBottom: 10,
                }
          }
          onPress={() => {
            Linking.openURL(
              "mailto: contactus@medtutor.ie?subject=Service for Work Experience",
            );
          }}
        >
          <Text style={groupStyles.Bookings}>
            Email us at contactus@medtutor.ie to book your personalised
            consultation.
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            color: "#f8fefe",
            fontWeight: "700",
            marginLeft: isSmallScreen ? "6%" : "11%",
            marginBottom: 10,
          }}
        >
          What Medical Schools Actually Look For:
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: "#f8fefe",
            fontWeight: "500",
            marginLeft: isSmallScreen ? "6%" : "11%",
            marginBottom: 15,
          }}
        >
          UK medical schools prioritise the quality and depth of your
          reflections over the prestige of your placement. They want to see
          evidence that you have:
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" : "12%",
            marginBottom: 9,
          }}
        >
          {"\u2022"} Developed an understanding of the knowledge, skills, and
          professional behaviours required of medical students
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" : "12%",
            marginBottom: 9,
          }}
        >
          {"\u2022"} Demonstrated the ability to manage multiple
          responsibilities and sustained commitments
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" : "12%",
            marginBottom: 9,
          }}
        >
          {"\u2022"} Gained meaningful insights through reflection on your
          experiences—regardless of the setting
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" : "12%",
            marginBottom: 15,
          }}
        >
          {"\u2022"} Resilience and Problem-Solving – Discussing challenges
          you've faced and the lessons learned
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "6%" : "11%",
            marginBottom: 15,
          }}
        >
          The focus is on what you learned, not where you learned it or how long
          you learnt it.
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={hpatStyles.mainScroll}>
      <SafeAreaProvider>
        <SafeAreaView>
          <ImageBackground
            source={image}
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                borderRadius: 15,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#080e19",
                opacity: 0.3,
              }}
            />
            <View
              style={{
                marginLeft: 40,
                justifyContent: "flex-start",
                flexDirection: "row",
                width: "2%",
              }}
            >
              <BackButton />
            </View>

            <View
              style={
                isSmallScreen
                  ? JuniorStyles.topHeaderSmall
                  : JuniorStyles.topHeader
              }
            >
              {Header()}
            </View>
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}
