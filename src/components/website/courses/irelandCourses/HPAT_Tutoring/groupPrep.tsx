import React, { useEffect, useState } from "react";
import BackButton from "../../../common/back-button";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { hpatStyles } from "../HPAT/hpatStyles";
import { groupStyles } from "./groupPrepStyles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  PersonalisedTutoring,
  PersonalisedTutoringFAQ,
} from "./personalCoaching";
import { SmallGroupTutoring, SmallGroupTutoringFAQs } from "./smallGroup";
import { personalStyles } from "./personalStyles";

export default function GroupPrepContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
  const image = {
    uri: "https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg?_gl=1*8hmqoq*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgxNDYwMjQkbzIkZzEkdDE3NjgxNDc0MDckajM1JGwwJGgw",
  };
  const [groupTutor, setGroupTutor] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);

  const switchToGroup = () => {
    setGroupTutor(true);
  };
  const switchToPersonal = () => {
    setGroupTutor(false);
  };
  useEffect(() => {}, [groupTutor]);

  const switchToFAQs = () => {
    setShowFAQs(true);
  };
  const switchToCourse = () => {
    setShowFAQs(false);
  };
  useEffect(() => {}, [groupTutor]);
  useEffect(() => {}, [showFAQs]);

  const Header = () => {
    return (
      <View style={personalStyles.header}>
        <View style={personalStyles.headerOpactiy} />
        <Text style={groupStyles.mainText}>
          HPAT Tutoring Ireland – 1:1 & Small Group HPAT Preparation (Online)
        </Text>
        <Text style={personalStyles.TitleText}>
          MedTutor offers expert-led HPAT tutoring designed to maximise
          performance, confidence, and exam-day strategy. Choose 1:1 tutoring
          for fully personalised coaching or Small Group tutoring for structured
          learning with peer motivation.
        </Text>
        <Text style={groupStyles.Bookings}>
          For Bookings: contactus@medtutor.ie
        </Text>
        <View style={personalStyles.findView}>
          <View style={personalStyles.underLine} />
          <View>
            <Text
              style={personalStyles.findDetails}
            >
              FIND MORE DETAILS BELOW
            </Text>
          </View>
          <View style={personalStyles.underLine} />
        </View>
        <View style={personalStyles.courseButtonView}>
          <TouchableOpacity
            style={personalStyles.personalTutor}
            onPress={switchToPersonal}
          >
            <Text style={personalStyles.buttonText}>1:1 HPAT Tutoring</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={personalStyles.personalTutor}
            onPress={switchToGroup}
          >
            <Text style={personalStyles.button2Text}>
              Small Group HPAT Tutoring
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const CourseDetails = () => {
    return (
      <View
        style={personalStyles.courseView}
      >
        <View
          style={personalStyles.headerOpactiy}
        />
        {!groupTutor ? PersonalisedTutoring() : SmallGroupTutoring()}
      </View>
    );
  };
  const FAQs = () => {
    return (
      <View
        style={personalStyles.courseView}
      >
        <View
          style={personalStyles.headerOpactiy}
        />
        {!groupTutor ? PersonalisedTutoringFAQ() : SmallGroupTutoringFAQs()}
      </View>
    );
  };

  const DetailsButton = () => {
    return (
      <View
        style={personalStyles.detailsView}
      >
        <TouchableOpacity
          style={personalStyles.detailsButton1}
          onPress={switchToCourse}
        >
          <Text
            style={personalStyles.buttonCourseText}
          >
            Course Content
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={personalStyles.detailsButton1}
          onPress={switchToFAQs}
        >
          <Text
            style={personalStyles.buttonCourseText2}
          >
            FAQs
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={image} style={{ flex: 1 }}>
          <View
            style={personalStyles.mainOpacity}
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
  );
}
