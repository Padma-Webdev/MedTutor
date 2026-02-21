import React, { useEffect, useState } from "react";
import BackButton from "../../../common/back-button";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Linking,
  GestureResponderEvent,
  Image,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { personalStyles } from "../../irelandCourses/HPAT_Tutoring/personalStyles";
import { groupStyles } from "../../irelandCourses/HPAT_Tutoring/groupPrepStyles";
import { UCATPersonalisedTutoring } from "./ucatPersonalTutoring";
import { UCATSmallGroupTutoring } from "./ucatSmallGroup";

type ButtonState = "default" | "pressed";

export const getButtonColor = (state: ButtonState): string => {
  switch (state) {
    case "pressed":
      return "#0B3D37"; // darker teal
    case "default":
    default:
      return "#23CFBB";
  }
};
export const getSecondButtonColor = (state: ButtonState): string => {
  switch (state) {
    case "pressed":
      return "#159688"; // darker teal
    case "default":
    default:
      return "#C2F5EF";
  }
};
export const getTextColor = (state: ButtonState): string => {
  switch (state) {
    case "pressed":
      return "white"; // darker teal
    case "default":
    default:
      return "black";
  }
};
export default function UCATGroupPrepContainer() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const isSmallScreen = screenWidth < 740;
  const image = {
    uri: "https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg?_gl=1*8hmqoq*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgxNDYwMjQkbzIkZzEkdDE3NjgxNDc0MDckajM1JGwwJGgw",
  };
  const [groupTutor, setGroupTutor] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);
  const [buttononeState, setoneButtonState] = useState<ButtonState>("default");
  const [buttonGroupState, setgroupButtonState] =
    useState<ButtonState>("default");
  const [buttonCourseState, setCourseButtonState] =
    useState<ButtonState>("default");
  const [buttonFAQState, setFAQButtonState] = useState<ButtonState>("default");
  const BASE_URL = process.env.PUBLIC_URL || "."; // empty in dev, repo prefix in prod

  const handlePressOneIn = (_: GestureResponderEvent) => {
    setgroupButtonState("default");
    setoneButtonState("pressed");
  };
  const handlePressgroupIn = (_: GestureResponderEvent) => {
    setgroupButtonState("pressed");
    setoneButtonState("default");
  };
  const switchToGroup = () => {
    setGroupTutor(true);
  };
  useEffect(() => {}, [groupTutor]);
  const switchToPersonal = () => {
    setGroupTutor(false);
  };
  useEffect(() => {}, [groupTutor]);
  useEffect(() => {}, [groupTutor]);
  useEffect(() => {}, [showFAQs]);

  const Header = () => {
    return (
      <View
        style={
          isSmallScreen
            ? personalStyles.headerSmallScreen
            : personalStyles.header
        }
      >
        <View style={personalStyles.headerOpactiy} />
        <Text style={groupStyles.mainText}>
          UCAT 1:1 & Small Group UCAT Preparation
        </Text>
        <Text
          style={
            isSmallScreen
              ? personalStyles.TitleTextSmallScreen
              : personalStyles.TitleText
          }
        >
          Our Tutors: Our tutors are from top universities like Oxford and
          Bristol, bringing hundreds of hours of specialised UCAT tutoring
          experience. They've helped many students achieve their target scores
          and secure places at their dream medical schools.
        </Text>
        <TouchableOpacity
          style={
            isSmallScreen
              ? {
                  backgroundColor: "#2563EB",
                  borderRadius: 10,
                  padding: 5,
                  width: "85%",
                  alignSelf: "center",
                }
              : {
                  backgroundColor: "#2563EB",
                  borderRadius: 5,
                  padding: 5,
                  width: 400,
                  alignSelf: "center",
                  alignContent: "center",
                }
          }
          onPress={() => {
            Linking.openURL(
              "mailto: contactus@medtutor.ie?subject=UCAT Personalised Tutoring",
            );
          }}
        >
          <Text
            style={
              isSmallScreen
                ? groupStyles.BookingsSmallScreen
                : groupStyles.Bookings
            }
          >
            For Bookings: contactus@medtutor.ie
          </Text>
        </TouchableOpacity>
        <View style={personalStyles.findView}>
          {!isSmallScreen && <View style={personalStyles.underLine} />}
          <View>
            <Text
              style={
                isSmallScreen
                  ? personalStyles.findDetailsSmallScreen
                  : personalStyles.findDetails
              }
            >
              FIND MORE DETAILS BELOW
            </Text>
          </View>
          {!isSmallScreen && <View style={personalStyles.underLine} />}
        </View>
        <View
          style={
            isSmallScreen
              ? personalStyles.courseButtonViewSmallScreen
              : personalStyles.courseButtonView
          }
        >
          <TouchableOpacity
            onPress={switchToPersonal}
            onPressIn={handlePressOneIn}
            style={[
              isSmallScreen
                ? personalStyles.personalTutorSmallScreen
                : personalStyles.personalTutor,
              { backgroundColor: getButtonColor(buttononeState) },
            ]}
          >
            <Text
              style={[
                isSmallScreen
                  ? personalStyles.buttonTextSmallScreen
                  : personalStyles.buttonText,
                { color: getTextColor(buttononeState) },
              ]}
            >
              1:1 UCAT Tutoring
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={switchToGroup}
            onPressIn={handlePressgroupIn}
            style={[
              isSmallScreen
                ? personalStyles.personalTutorSmallScreen
                : personalStyles.personalTutor,
              { backgroundColor: getButtonColor(buttonGroupState) },
            ]}
          >
            <Text
              style={[
                isSmallScreen
                  ? personalStyles.button2TextSmallScreen
                  : personalStyles.button2Text,
                { color: getTextColor(buttonGroupState) },
              ]}
            >
              Small Group Tutoring
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const CourseDetails = () => {
    return (
      <View
        style={
          isSmallScreen
            ? personalStyles.courseViewSmallScreen
            : {
                width: "49%",
                alignSelf: "center",
                padding: 15,
                height: "100%",
                borderRadius: 15,
                borderWidth: 2,
                borderColor: "#23CFBB",
                backgroundColor: "#080e19",
              }
        }
      >
        <View style={personalStyles.headerOpactiy} />
        {!groupTutor ? UCATPersonalisedTutoring() : UCATSmallGroupTutoring()}
      </View>
    );
  };
  const TutorDetails = () => {
    return (
      <View
        style={
          isSmallScreen
            ? {
                width: "99%",
                alignSelf: "center",
                marginTop: "1%",
                padding: 15,
                borderRadius: 15,
                borderWidth: 2.5,
                borderColor: "#23CFBB",
                backgroundColor: "#080e19",
              }
            : {
                flexDirection: "column",
                width: "55%",
                justifyContent: "space-around",
                backgroundColor: "#080e19",
                borderRadius: 15,
                borderWidth: 2,
                marginLeft: "2%",
                borderColor: "#23CFBB",
              }
        }
      >
        <Text
          style={{
            color: "white",
            fontSize: 23,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          Our Tutors
        </Text>
        <View
          style={{
            flexDirection: isSmallScreen ? "column" : "row",
            justifyContent: "space-around",
            marginTop:15,
          }}
        >
          <View
            style={
              isSmallScreen
                ? {
                    width: "95%",
                    alignSelf: "center",
                    marginTop: "0.5%",
                    padding: 15,
                    borderRadius: 15,
                    borderWidth: 2.5,
                    borderColor: "#23CFBB",
                  }
                : {
                    width: "49%",
                    height: "100%",
                    alignSelf: "center",
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: "#23CFBB",
                  }
            }
          >
            <View
              style={
                isSmallScreen
                  ? {
                      flex: 1,
                      width: "98%",
                      justifyContent: "space-around",
                      flexDirection: "column",
                    }
                  : {
                      flex: 0.5,
                      borderRadius: 15,
                      borderColor: "#06443e",
                      flexDirection: "column",
                    }
              }
            >
              <View
                style={
                  isSmallScreen ? null : { alignSelf: "center", marginTop: 10 }
                }
              >
                <Image
                  style={
                    isSmallScreen
                      ? {
                          width: "70%",
                          height: 120,
                          borderRadius: 10,
                          marginBottom: 15,
                          alignSelf: "center",
                        }
                      : {
                          width: screenWidth * 0.15,
                          height: 150,
                          margin: 10,
                          borderRadius: 10,
                        }
                  }
                  source={{ uri: `${BASE_URL}/images/anjali.jpeg` }}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 23,
                    fontWeight: "bold",
                    alignSelf: "center",
                  }}
                >
                  Anjali Bachetta
                </Text>
              </View>
              <View style={{ margin: 10, marginLeft: 20 }}>
                <Text style={{ color: "white", fontSize: 13 }}>
                  {"\u2022"}{" "}
                  {"Fourth-year medical student at the University of Oxford"}
                </Text>
                <Text style={{ color: "white", fontSize: 13 }}>
                  {"\u2022"}{" "}
                  {
                    "Over 6 years of tutoring experience in UCAT, BMAT, MMIs, and subject-specific tutoring"
                  }
                </Text>
                <Text style={{ color: "white", fontSize: 13 }}>
                  {"\u2022"}{" "}
                  {
                    "Supported students in gaining offers from Oxford and Cambridge through highly tailored guidance"
                  }
                </Text>
                <Text style={{ color: "white", fontSize: 13 }}>
                  {"\u2022"}{" "}
                  {
                    "Interactive and engaging teaching style, mirroring the discussion-based Oxford tutorial system"
                  }
                </Text>
              </View>
            </View>
          </View>
          <View
            style={
              isSmallScreen
                ? {
                    width: "95%",
                    alignSelf: "center",
                    marginTop: "0.5%",
                    padding: 15,
                    borderRadius: 15,
                    borderWidth: 2.5,
                    borderColor: "#23CFBB",
                  }
                : {
                    width: "49%",
                    height: "100%",
                    alignSelf: "center",
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: "#23CFBB",
                  }
            }
          >
            <View
              style={
                isSmallScreen
                  ? {
                      flex: 1,
                      width: "99%",
                      padding: 20,
                    }
                  : {
                      flex: 0.5,
                      borderRadius: 15,
                      borderColor: "#06443e",
                      flexDirection: "column",
                    }
              }
            >
              <View
                style={
                  isSmallScreen ? null : { alignSelf: "center", marginTop: 10 }
                }
              >
                <Image
                  style={
                    isSmallScreen
                      ? {
                          width: "80%",
                          height: 120,
                          borderRadius: 10,
                          marginBottom: 15,
                          alignSelf:"center"
                        }
                      : {
                          width: screenWidth * 0.15,
                          height: 150,
                          margin: 10,
                          borderRadius: 10,
                        }
                  }
                  source={{ uri: `${BASE_URL}/images/branaviSmall.jpeg` }}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 23,
                    fontWeight: "bold",
                    alignSelf: "center",
                  }}
                >
                  Branavi Yogathasan
                </Text>
                <View style={{ margin: 10 }}>
                  <Text style={{ color: "white", fontSize: 13 }}>
                    {"\u2022"}{" "}
                    {"First-year medical student at the University of Bristol"}
                  </Text>
                  <Text style={{ color: "white", fontSize: 13 }}>
                    {"\u2022"}{" "}
                    {
                      "4 years of tutoring experience in A Level Subjects and 1 year in UCAT and MMIs."
                    }
                  </Text>
                  <Text style={{ color: "white", fontSize: 13 }}>
                    {"\u2022"}{" "}
                    {
                      "UCAT score of 3120 (top 3%) with experience attending six medical school interviews, offering strong admissions insight"
                    }
                  </Text>
                  <Text style={{ color: "white", fontSize: 13 }}>
                    {"\u2022"}{" "}
                    {
                      "Interactive, student-focused teaching style, emphasising exam technique, problem-solving, and confidence-building"
                    }
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        width: screenWidth,
        height: screenHeight * 2,
        backgroundColor: "#112230",
      }}
    >
      <SafeAreaProvider>
        <SafeAreaView>
          <ImageBackground
            source={image}
            style={{
              flex: 1,
              width: screenWidth,
              height: isSmallScreen ? screenHeight * 1.16 : screenHeight * 1.35,
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
                width: screenWidth,
                height: isSmallScreen ? screenHeight * 1.16 : screenHeight * 1.35,
              }}
            />
            <View
              style={{
                marginLeft: 40,
                justifyContent: "flex-start",
                flexDirection: "row",
                width: "5%",
              }}
            >
              <BackButton />
            </View>
            {Header()}
            <View
              style={{
                flexDirection: isSmallScreen ? "column" : "row",
                width: "85%",
                height: "50%",
                alignSelf: "center",
                marginTop: "1%",
                justifyContent: "space-between",
              }}
            >
              {CourseDetails()}
              {TutorDetails()}
            </View>
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}
