import React from "react";
import BackButton from "../../../common/back-button";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { hpatStyles } from "../HPAT/hpatStyles";
import { groupStyles } from "../HPAT_Tutoring/groupPrepStyles";
import { JuniorStyles } from "./juinosStyles";

export default function JuniorCertificateContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;

  const Header = () => {
    return (
      <View>
        <Text style={JuniorStyles.mainText}>Irish Junior Certificate</Text>
        <Text style={hpatStyles.hpatDesc}>
          Your path to studying medicine begins with the Irish Junior
          Certificate(IJC). For students aspiring to pursue medicine in the UK,
          the Junior Certificate represents a critical foundation that
          universities carefully evaluate during the admissions process. Your
          Junior Certificate is your opportunity to prove you have the
          consistency and capability to succeed in demanding medical programmes
        </Text>
        <Text style={JuniorStyles.bullet}>
          Why Your Junior Certificate Really Matters?
        </Text>
        <Text style={JuniorStyles.pricingNextLine}>
          {"\u2022"} UK medical schools look at your Junior Certificate results
          in three important ways: Interview shortlisting, Points-Based scoring
          and proof of consistence performance.
        </Text>
        <Text style={JuniorStyles.pricingNextLine}>
          {"\u2022"} Top medical schools like Oxford, Newcastle, Queens
          Belfast(QUB) needs minimum grade in certain subjects and also assign
          points to your Junior Certificate grades.
        </Text>
        <Text style={JuniorStyles.pricingNextLine}>
          {"\u2022"} Predicted grades are considered during UCAS application,
          but final grades must meet the offer.
        </Text>
        <Text style={JuniorStyles.bullet}>Need Guidance:</Text>
        <Text style={JuniorStyles.hpatDesc2}>
          Every UK medical school has different IJC grade requirements. MedTutor
          offers personalised advice on which grades you need for your target
          universities, ensuring you have a clear roadmap to success. 
        </Text>
        <Text style={JuniorStyles.hpatDesc}>
          At MedTutor, we provide tailored advice based on your academic profile
          and university goals, helping you map out a clear, confident path to
          medical school success.
        </Text>
        <Text style={groupStyles.Bookings}>
          Email us at contactus@medtutor.ie to book your personalised
          consultation.
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={hpatStyles.mainScroll}>
      <View style={hpatStyles.backButton}>
        <BackButton />
      </View>
      <View style={JuniorStyles.topHeader}>{Header()}</View>
    </ScrollView>
  );
}
