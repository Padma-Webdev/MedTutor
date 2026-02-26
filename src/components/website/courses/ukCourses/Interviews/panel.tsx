import React, { useState } from "react";
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

export default function PanelContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
  const [quest1, setquest1] = useState(false);
  const [quest2, setquest2] = useState(false);
  const [quest3, setquest3] = useState(false);
  const [quest4, setquest4] = useState(false);
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
          Medical Panel Interview
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#f8fefe",
            fontWeight: "400",
            marginBottom: 4,
            width: isSmallScreen ? "95%" : "80%",
            alignSelf: "center",
            marginLeft: isSmallScreen ? 10 : 25,
          }}
        >
          Prepare for medical school panel interviews with realistic mock
          interviews, expert feedback, and personalised coaching tailored to
          universities that still use the traditional interview format.
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#f8fefe",
            fontWeight: "400",
            marginBottom: 5,
            marginTop: 5,
            width: isSmallScreen ? "95%" : "50%",
            alignSelf: "center",
            marginLeft: isSmallScreen ? 10 : 25,
          }}
        >
          Our preparation is designed specifically for UK medical panel
          interviews.
        </Text>
        <Text
          style={{
            fontSize: 19,
            color: "#f8fefe",
            fontWeight: "600",
            marginLeft: isSmallScreen ? "7%" : "11%",
            marginBottom: 10,
            marginTop: "0.5%",
          }}
        >
          What’s Included:
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" : "11%",
            marginBottom: 8,
          }}
        >
          {"\u2022"} Realistic mock panel interviews
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" : "11%",
            marginBottom: 8,
          }}
        >
          {"\u2022"} Interviewers with medical admissions experience
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" : "11%",
            marginBottom: 8,
          }}
        >
          {"\u2022"} In-depth verbal feedback
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" : "11%",
            marginBottom: 8,
          }}
        >
          {"\u2022"} Written feedback summary
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "7%" : "11%",
            marginBottom: 8,
          }}
        >
          {"\u2022"} Coaching on:
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "400",
            color: "#f8fefe",
            marginBottom: 10,
            marginLeft: isSmallScreen ? "12%" : "15%",
          }}
        >
          {"\u2B62"} Answer structure
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "400",
            color: "#f8fefe",
            marginBottom: 10,
            marginLeft: isSmallScreen ? "12%" : "15%",
          }}
        >
          {"\u2B62"} Handling challenging follow-up questions
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "400",
            color: "#f8fefe",
            marginBottom: 10,
            marginLeft: isSmallScreen ? "12%" : "15%",
          }}
        >
          {"\u2B62"} Ethical discussions
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "400",
            color: "#f8fefe",
            marginBottom: 10,
            marginLeft: isSmallScreen ? "12%" : "15%",
          }}
        >
          {"\u2B62"} Confidence and rapport-building
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
              "mailto: contactus@medtutor.ie?subject=Panel Interviews",
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
            fontSize: 19,
            color: "#f8fefe",
            fontWeight: "600",
            marginLeft: isSmallScreen ? "18%" : "10%",
            marginBottom: 15,
            marginTop: 10,
          }}
        >
          Panel Interview FAQs
        </Text>
        <TouchableOpacity
          onPress={() => {
            setquest1(true);
            setquest2(false);
            setquest3(false);
            setquest4(false);
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#f8fefe",
              fontWeight: "500",
              marginLeft: isSmallScreen ? "6%" : "11%",
              marginBottom: 10,
            }}
          >
            {"\u25BA"} What Interviewers Are Looking For?
          </Text>
        </TouchableOpacity>
        {quest1 && (
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#f8fefe",
                fontWeight: "400",
                marginLeft: isSmallScreen ? "6%" : "11%",
                marginBottom: 8,
              }}
            >
              A medical panel interview is a traditional interview format still
              used by several UK medical schools, including Oxford and
              Cambridge.
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#f8fefe",
                fontWeight: "400",
                marginLeft: isSmallScreen ? "6%" : "11%",
                marginBottom: 8,
              }}
            >
              Unlike MMIs, panel interviews involve:
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
              {"\u2022"} A single extended interview
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
              {"\u2022"} 2–4 interviewers, such as doctors, academics, and
              admissions tutors
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
              {"\u2022"} A conversational format with follow-up questions
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
              This format allows interviewers to explore your motivations,
              ethics, and reflections in depth.
            </Text>
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            setquest1(false);
            setquest2(true);
            setquest3(false);
            setquest4(false);
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#f8fefe",
              fontWeight: "500",
              marginLeft: isSmallScreen ? "6%" : "11%",
              marginBottom: 10,
            }}
          >
            {"\u25BA"} How Medical Panel Interviews Are Assessed?
          </Text>
        </TouchableOpacity>
        {quest2 && (
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#f8fefe",
                fontWeight: "400",
                marginLeft: isSmallScreen ? "6%" : "11%",
                marginBottom: 8,
              }}
            >
              During a panel interview, medical schools assess:
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
              {"\u2022"} Motivation for medicine
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
              {"\u2022"} Reflection on work experience and volunteering
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
              {"\u2022"} Ethical reasoning and decision-making
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
              {"\u2022"} Understanding of the NHS and medical profession
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
              {"\u2022"} Communication skills, professionalism, and maturity
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
              Strong candidates demonstrate clarity of thought, honesty, and
              self-awareness.
            </Text>
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            setquest1(false);
            setquest2(false);
            setquest3(true);
            setquest4(false);
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#f8fefe",
              fontWeight: "500",
              marginLeft: isSmallScreen ? "6%" : "11%",
              marginBottom: 10,
            }}
          >
            {"\u25BA"} Panel Interviews vs MMIs?
          </Text>
        </TouchableOpacity>
        {quest3 && (
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#f8fefe",
                fontWeight: "400",
                marginLeft: isSmallScreen ? "7%" : "12%",
                marginBottom: 9,
              }}
            >
              {"\u2022"} Depth Over Breadth: Panel interviews focus on fewer
              topics, explored in greater depth.
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
              {"\u2022"} Follow-Up Questioning: Interviewers will challenge your
              answers and expect justification.
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
              {"\u2022"} Rapport and Professionalism: You must build trust and
              communicate confidently over an extended discussion.Preparation
              must focus on structured answers and reflective thinking, not
              memorisation.
            </Text>
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            setquest1(false);
            setquest2(false);
            setquest3(false);
            setquest4(true);
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#f8fefe",
              fontWeight: "500",
              marginLeft: isSmallScreen ? "6%" : "11%",
              marginBottom: 10,
            }}
          >
            {"\u25BA"} Which Medical Schools Known to Use Panel Interviews?
          </Text>
        </TouchableOpacity>
        {quest4 && (
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#f8fefe",
                fontWeight: "400",
                marginLeft: isSmallScreen ? "6%" : "11%",
                marginBottom: 15,
              }}
            >
              Interview formats may vary year to year, but panel interviews are
              commonly associated with:
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
              {"\u2022"} Oxford
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
              {"\u2022"} Cambridge
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
              {"\u2022"} Glasgow
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
              {"\u2022"} Barts (QMUL)
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
              {"\u2022"} Swansea
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
              {"\u2022"} Southampton
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
              If you’re applying to these universities, targeted panel interview
              preparation is essential.
            </Text>
          </View>
        )}
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
