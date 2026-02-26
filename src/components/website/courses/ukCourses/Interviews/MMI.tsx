import React from "react";
import BackButton from "../../../common/back-button";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Linking,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { hpatStyles } from "../../irelandCourses/HPAT/hpatStyles";
import { groupStyles } from "../../irelandCourses/HPAT_Tutoring/groupPrepStyles";
import { JuniorStyles } from "../../irelandCourses/JuniorCert/juinosStyles";

export default function MMIContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
  const image = {
    uri: "https://images.pexels.com/photos/33265684/pexels-photo-33265684.jpeg?_gl=1*13a9ztk*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgzMjgxMjIkbzYkZzEkdDE3NjgzMjgzNzIkajE4JGwwJGgw",
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
        <Text
          style={{
            fontSize: 22,
            color: "#f8fefe",
            fontWeight: "600",
            marginBottom: 15,
            alignSelf: "center",
          }}
        >
          Medicine - MMI Mock Interviews
        </Text>
        <Text style={hpatStyles.hpatDesc}>
          Our mock MMIs are designed to closely replicate the real UK medical
          school interview experience, helping applicants perform with
          confidence, clarity, and professionalism.
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#f8fefe",
            fontWeight: "600",
            alignSelf: "center",
            marginBottom: 15,
            marginTop: "1%",
          }}
        >
          Why MMIs Matter
        </Text>
        <Text style={JuniorStyles.hpatDesc}>
          Most UK medical schools use the Multiple Mini Interview (MMI) format.
          With 6–10 timed stations, MMIs test the core skills medical schools
          care about and every station is a fresh start.
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
              "mailto: contactus@medtutor.ie?subject=MMI Mock Interviews Assistance",
            );
          }}
        >
          <Text style={groupStyles.Bookings}>
            Email us at contactus@medtutor.ie to book your personalised
            consultation.
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: isSmallScreen? "column":"row",justifyContent: "space-evenly" }}>
          <View style={{ width: isSmallScreen? "99%":"49%" }}>
            <Text style={JuniorStyles.bullet}>What You Get:</Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} 60-minute mock MMI
            </Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} 8 realistic stations
            </Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} Interviewed by medical students or doctors
            </Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} Immediate verbal feedback after every station
            </Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} Written feedback summary to take away
            </Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} Trips to improve
            </Text>
          </View>
          <View style={{ width: isSmallScreen? "99%":"49%" }}>
            <Text style={JuniorStyles.bullet}>Feedback Focuses On:</Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} Answer structure and clarity
            </Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} Communication and professionalism
            </Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} Logical thinking under pressure
            </Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} Self-awareness and limitations
            </Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} Your knowledge of NHS topics
            </Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} Ethical reasoning
            </Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} Empathy and Compassion
            </Text>
            <Text style={JuniorStyles.appStat}>{"\u2022"} Teamwork</Text>
            <Text style={JuniorStyles.appStat}>{"\u2022"} Problem-Solving</Text>
            <Text style={JuniorStyles.appStat}>
              {"\u2022"} Motivation for Medicine
            </Text>
            <Text style={[JuniorStyles.appStat,{marginBottom:"1%"}]}>
              {"\u2022"} Maturity and Professionalism
            </Text>
          </View>
        </View>
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
