import React from "react";
import BackButton from "../../../common/back-button";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { hpatStyles } from "../HPAT/hpatStyles";
import { groupStyles } from "../HPAT_Tutoring/groupPrepStyles";
import { JuniorStyles } from "./juinosStyles";

export default function LeavingCertContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;

  const Header = () => {
    return (
      <View>
        <Text style={JuniorStyles.mainText}>Leaving Certificate</Text>
        <Text style={hpatStyles.hpatDesc}>
          Medicine and Dentistry are among the most academically demanding
          degrees—achieving high Leaving Cert grades is essential to secure your
          place.
        </Text>
        <Text style={hpatStyles.hpatDesc2}>
          Leaving Cert grades—especially H1 and H2—are essential for applying to
          medicine in UK because they reflect academic excellence and meet
          strict entry requirements set by medical schools. Most universities
          require at least 3 x H1’s, often including Chemistry and/or Biology
          and/or Physics and/or Maths*
        </Text>
        <Text style={JuniorStyles.bullet}>
          Why Your Leaving Certificate grades Important:
        </Text>
        <Text style={JuniorStyles.pricingNextLine}>
          {"\u2022"} Irish leaving cert grades are used to filter applicants
          before interviews.
        </Text>
        <Text style={JuniorStyles.pricingNextLine}>
          {"\u2022"} Your Leaving Cert predictions are essential to be
          shortlisted for an interview.
        </Text>
        <Text style={JuniorStyles.pricingNextLine}>
          {"\u2022"} Predicted grades are considered during UCAS application,
          but final grades must meet the offer.
        </Text>
        <Text style={JuniorStyles.bullet}>Need Guidance:</Text>
        <Text style={JuniorStyles.hpatDesc2}>
          Your final Leaving Cert grades will determine your place at
          university. Every UK medical school has different Irish Leaving Cert
          grade requirements.
        </Text>
        <Text style={JuniorStyles.example2}>
          e.g. Some universities accept second Science subjects like Agriculture
          Science or Psychology or Natural Sciences or Applied Maths, Sociology
          or Environmental Sciences or geography.
        </Text>
        <Text style={JuniorStyles.hpatDesc}>
          MedTutor offers personalized advice on which Leaving Cert grades you
          need for your target universities, ensuring you have a clear roadmap
          to success.
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
