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
} from "react-native";
import { hpatStyles } from "../HPAT/hpatStyles";
import { groupStyles } from "./groupPrepStyles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { personalStyles } from "./personalStyles";
import { TwoDayCourse, TwoDayTutoringFAQs } from "./twoDay";
import { EightWeekCourse, EightWeekCourseFAQs } from "./eightDay";
import { getSecondButtonColor } from "./groupPrep";

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
export const getTextColor = (state: ButtonState): string => {
  switch (state) {
    case "pressed":
      return "white"; // darker teal
    case "default":
    default:
      return "black";
  }
};
export default function DayPrepContainer() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const isSmallScreen = screenWidth < 740;
  const image = {
    uri: "https://images.pexels.com/photos/32213218/pexels-photo-32213218.jpeg?_gl=1*1405y6l*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgzMTMwNDEkbzMkZzEkdDE3NjgzMTMzMzUkajMyJGwwJGgw",
  };
  const [groupTutor, setGroupTutor] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);
  const [buttononeState, setoneButtonState] = useState<ButtonState>("default");
  const [buttonCourseState, setCourseButtonState] = useState<ButtonState>("default");
  const [buttonFAQState, setFAQButtonState] =
    useState<ButtonState>("default");
  const [buttonGroupState, setgroupButtonState] =
    useState<ButtonState>("default");

  const handlePressDayIn = (_: GestureResponderEvent) => {
    setgroupButtonState("default");
    setoneButtonState("pressed");
  };
  const handlePressWeekIn = (_: GestureResponderEvent) => {
    setgroupButtonState("pressed");
    setoneButtonState("default");
  };

  const handlePressCourse = (_: GestureResponderEvent) => {
    setFAQButtonState("default");
    setCourseButtonState("pressed");
  };
  const handlePressgFAQ = (_: GestureResponderEvent) => {
    setFAQButtonState("pressed");
    setCourseButtonState("default");
  };

  const switchToGroup = () => {
    setGroupTutor(true);
  };
  const switchToPersonal = () => {
    setGroupTutor(false);
  };
  useEffect(() => { }, [groupTutor]);

  const switchToFAQs = () => {
    setShowFAQs(true);
  };
  const switchToCourse = () => {
    setShowFAQs(false);
  };
  useEffect(() => { }, [groupTutor]);
  useEffect(() => { }, [showFAQs]);

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
          HPAT 2 Day and 8-Week HPAT Preparation
        </Text>
        <Text
          style={
            isSmallScreen
              ? personalStyles.TitleTextSmallScreen
              : personalStyles.TitleText
          }
        >
          MedTutor offers expert-led HPAT tutoring designed to maximise
          performance, confidence, and exam-day strategy. Choose 2 Day and
          8-Week HPAT Preparation or structured learning with peer motivation.
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
              "mailto: contactus@medtutor.ie?subject=HPAT 2 Day and 8 Week Personalised Tutoring"
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
            onPressIn={handlePressDayIn}
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
              2 Day Course
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={switchToGroup}
            onPressIn={handlePressWeekIn}
            style={[isSmallScreen
              ? personalStyles.personalTutorSmallScreen
              : personalStyles.personalTutor, { backgroundColor: getButtonColor(buttonGroupState) },
            ]}

          >
            <Text
              style={
                [isSmallScreen
                  ? personalStyles.button2TextSmallScreen
                  : personalStyles.button2Text, { color: getTextColor(buttonGroupState) }]
              }
            >
              8 Week Course
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
            : personalStyles.courseView
        }
      >
        <View style={personalStyles.headerOpactiy} />
        {!groupTutor ? TwoDayCourse() : EightWeekCourse()}
      </View>
    );
  };
  const FAQs = () => {
    return (
      <View
        style={
          isSmallScreen
            ? personalStyles.courseViewSmallScreen
            : personalStyles.courseView
        }
      >
        <View style={personalStyles.headerOpactiy} />
        {!groupTutor ? TwoDayTutoringFAQs() : EightWeekCourseFAQs()}
      </View>
    );
  };

  const DetailsButton = () => {
    return (
      <View
        style={
          isSmallScreen
            ? personalStyles.detailsViewSmallScreen
            : personalStyles.detailsView
        }
      >
        <TouchableOpacity
          onPress={switchToCourse}
          onPressIn={handlePressCourse}
          style={[personalStyles.detailsButton1,
          { backgroundColor: getSecondButtonColor(buttonCourseState) },
          ]}
        >
          <Text
            style={
              [isSmallScreen
                ? personalStyles.buttonCourseTextSmallScreen
                : personalStyles.buttonCourseText
                , { color: getTextColor(buttonCourseState) },]}
          >
            Course Content
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={switchToFAQs}

          onPressIn={handlePressgFAQ}
          style={[personalStyles.detailsButton1,
          { backgroundColor: getSecondButtonColor(buttonFAQState) },
          ]}
        >
          <Text style={[personalStyles.buttonCourseText2, { color: getTextColor(buttonFAQState) },]}>FAQs</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        width: screenWidth,
        height: screenHeight * 1.25,
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
              height: isSmallScreen ? screenHeight * 1.4 : screenHeight * 1.55,
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
                opacity: 0.3,
                width: screenWidth,
                height: isSmallScreen
                  ? screenHeight * 1.4
                  : screenHeight * 1.55,
              }}
            />
            <View style={hpatStyles.backButton}>
              <BackButton />
            </View>
            {Header()}
            {DetailsButton()}
            {showFAQs ? FAQs() : CourseDetails()}
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}
