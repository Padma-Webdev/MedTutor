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
    uri: "https://images.pexels.com/photos/35531445/pexels-photo-35531445.jpeg?_gl=1*cj5i2w*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgzMjgxMjIkbzYkZzEkdDE3NjgzMjkyNjckajUzJGwwJGgw",
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
            fontSize: 24,
            color: "#f8fefe",
            fontWeight: "600",
            marginBottom: 15,
            marginTop: 10,
            marginLeft: isSmallScreen ? 20 : 10,
            alignSelf: "center",
          }}
        >
          OxBridge Medicine Interview Preparation
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#f8fefe",
            fontWeight: "400",
            marginBottom: 10,
            marginLeft: isSmallScreen ? 10 : 25,
          }}
        >
          Oxford and Cambridge medicine interviews assess how you think, not
          rehearsed answers. Our Oxbridge-specific preparation helps you develop
          the scientific reasoning, clarity, and confidence required to succeed
          in this unique academic interview format.
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#f8fefe",
            fontWeight: "400",
            marginBottom: 10,
            width:isSmallScreen?"95%":"60%",
            alignSelf:"center",
            marginLeft: isSmallScreen ? 10 : 25,
          }}
        >
          Our preparation is tailored to the specific style of Oxford or
          Cambridge by Oxbridge Tutors.{" "}
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
                  marginTop: 10,
                  marginBottom: 10,
                }
          }
          onPress={() => {
            Linking.openURL(
              "mailto: contactus@medtutor.ie?subject=OxBridger Interviews",
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
            fontSize: 22,
            color: "#f8fefe",
            fontWeight: "600",
            marginLeft: isSmallScreen ? "18%" : "10%",
            marginBottom: 15,
            marginTop: 10,
          }}
        >
          Oxbridge FAQs:
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" : "11%",
            marginBottom: 15,
            marginTop: "0.5%",
          }}
        >
          Why Oxbridge Interviews Are Different?
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" : "11%",
            marginBottom: 15,
          }}
        >
          Unlike most UK medical school interviews, Oxford and Cambridge focus
          on:
        </Text>
        <Text style={{
              fontSize: 17,
              fontWeight: "400",
              color: "#f8fefe",
              marginBottom: 10,
              marginLeft: isSmallScreen ? "7%" :"12%",
            }}>
          {"\u2022"} Academic reasoning, not extracurriculars
        </Text>
        <Text style={{
              fontSize: 17,
              fontWeight: "400",
              color: "#f8fefe",
              marginBottom: 10,
              marginLeft: isSmallScreen ? "7%" :"12%",
            }}>
          {"\u2022"} Scientific problem-solving, not scenario scripts
        </Text>
        <Text style={{
              fontSize: 17,
              fontWeight: "400",
              color: "#f8fefe",
              marginBottom: 10,
              marginLeft: isSmallScreen ? "7%" :"12%",
            }}>
          {"\u2022"} Depth of thinking, not polished responses
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" :"11%",
            marginBottom: 15,
          }}
        >
          Interviews are designed to mirror the tutorial teaching system, where
          students must engage with unfamiliar problems and explain their
          thinking clearly.
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: "11%",
            marginBottom: 15,
            marginTop: "1%",
          }}
        >
          What Interviewers Are Looking For?
        </Text>
        <Text style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" :"11%",
            marginBottom: 15,
          }}>
          {"\u2022"} Strong foundations in Biology, Chemistry, and Maths
        </Text>
        <Text style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" :"11%",
            marginBottom: 15,
          }}>
          {"\u2022"} Ability to think aloud through unfamiliar problems
        </Text>
        <Text style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" :"11%",
            marginBottom: 15,
          }}>
          {"\u2022"} Logical, structured reasoning
        </Text>
        <Text style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" :"11%",
            marginBottom: 15,
          }}>
          {"\u2022"} Intellectual curiosity and scientific engagement
        </Text>
        <Text style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" :"11%",
            marginBottom: 15,
          }}>
          {"\u2022"} Ethical awareness and clear communication
        </Text>
        <Text style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" :"11%",
            marginBottom: 15,
          }}>
          {"\u2022"} Resilience under academic pressure
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#f8fefe",
            fontWeight: "600",
         marginLeft: isSmallScreen ? "18%" : "10%",
            marginBottom: 15,
            marginTop: "1%",
          }}
        >
          The Interview Format?
        </Text>
        <View
          style={{
            flexDirection: isSmallScreen ? "column" : "row",
            justifyContent: "space-evenly",
            marginLeft: isSmallScreen ? 0 : "4%",
            width: isSmallScreen ? "99%" : "70%",
            marginBottom: "2 %",
          }}
        >
          <View style={{ width: isSmallScreen ? "99%" : "45%" }}>
            <Text
              style={{
                fontSize: 18,
                color: "#f8fefe",
                fontWeight: "400",
                marginLeft: isSmallScreen ? "7%" :"11%",
                marginBottom: 15,
              }}
            >
              Oxford
            </Text>
            <Text style={JuniorStyles.omi}>
              {"\u2022"} 2–3 panel interviews
            </Text>
            <Text style={JuniorStyles.omi}>{"\u2022"} 20–30 minutes each</Text>
            <Text style={JuniorStyles.omi}>
              {"\u2022"} Abstract science problems, ethics, and motivation
            </Text>
            <Text style={JuniorStyles.omi}>
              {"\u2022"} Live analysis of graphs, diagrams, and data
            </Text>
          </View>
          <View style={{ width: isSmallScreen ? "99%" : "45%" }}>
            <Text
              style={{
                fontSize: 18,
                color: "#f8fefe",
                fontWeight: "400",
                marginLeft: isSmallScreen ? "7%" :"11%",
                marginBottom: 15,
              }}
            >
              Cambridge
            </Text>
            <Text style={JuniorStyles.omi}>
              {"\u2022"} Typically 2 interviews
            </Text>
            <Text style={JuniorStyles.omi}>{"\u2022"} 20–30 minutes each</Text>
            <Text style={JuniorStyles.omi}>
              {"\u2022"} Greater emphasis on scientific and mathematical
              reasoning
            </Text>
            <Text style={JuniorStyles.omi}>
              {"\u2022"} Data and graph interpretation
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
