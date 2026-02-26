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

export default function applicationStrategyContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
  const image = {
    uri: "https://images.pexels.com/photos/8197511/pexels-photo-8197511.jpeg?_gl=1*3oei9j*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgzMjgxMjIkbzYkZzEkdDE3NjgzMzAwMzAkajU2JGwwJGgw",
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
        <Text style={JuniorStyles.mainText}>Application Strategy</Text>
        <Text
          style={{
            fontSize: 22,
            color: "#f8fefe",
            fontWeight: "600",
            alignSelf: "center",
            marginBottom: 15,
            marginTop: "1%",
          }}
        >
          Choosing a right medical school
        </Text>
        <Text style={hpatStyles.hpatDesc}>
          Applying to medical school isn't just about choosing your dream
          universities. You only get four UCAS choices, but there are over 45
          medical schools across the UK. Strategic applications mean picking
          universities where you have the best chance of getting an interview,
          not just the ones with the biggest names.
        </Text>
        <Text style={hpatStyles.hpatDesc}>
          The right combination balances ambition with realism. Expert advice
          helps you work out which universities maximize your chances while
          still fitting what you're looking for. A smart application strategy
          could be the difference between multiple interviews offers and
          disappointment.
        </Text>
        <View style={{ alignSelf: "center" }}>
          <Text
            style={
              isSmallScreen ? groupStyles.perSession : groupStyles.perSessionReg
            }
          >
            Price: £45 for 1:15 Hours
          </Text>
        </View>
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
              "mailto: contactus@medtutor.ie?subject=Application Strategy Assistance",
            );
          }}
        >
          <Text style={groupStyles.Bookings}>
            Email us at contactus@medtutor.ie to book your personalised
            consultation.
          </Text>
        </TouchableOpacity>
        <Text style={JuniorStyles.bullet}>This Includes:</Text>
        <View>
          <Text style={JuniorStyles.appStat}>
            {"\u2022"} Personal 1:1 Consultation: Meet with an experienced
            Oxbridge or Bristol admissions tutors.
          </Text>
          <Text style={JuniorStyles.appStat}>
            {"\u2022"} Review and Analysis of your GCSE and A-level grades,
            personal statement, and UCAT score in detail to understand your
            strengths.
          </Text>
          <Text style={JuniorStyles.appStat}>
            {"\u2022"} Genuine opportunities: No matter your UCAT score or
            grades, we'll find genuine opportunities where you can be
            competitive.
          </Text>
          <Text style={JuniorStyles.appStat}>
            {"\u2022"} Data-Driven Strategy Your recommendations are based on
            the latest real admission statistics
          </Text>
          <Text style={JuniorStyles.appStat}>
            {"\u2022"} Ranked University Choices Receive a personalised list of
            more than four medical schools, ranked from your strongest options
            to smart backup choices.
          </Text>
        </View>
      </View>
    );
  };

  const Footer = () => {
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
        <Text style={JuniorStyles.mainText}>
          Things to Consider When Choosing a Medical University in the UK
        </Text>
        <View>
          <Text style={JuniorStyles.appStat}>
            {"\u2022"} Location matters more than you might think. City
            universities feel different from campus-based ones. London and
            southern cities are expensive, so factor in living costs. Think
            about distance from home, accommodation availability, and whether
            the social scene suits you.
          </Text>
          <Text style={JuniorStyles.appStat}>
            {"\u2022"} Medical schools teach differently. Traditional courses
            separate classroom learning from clinical training, while integrated
            courses mix them throughout. Some use Problem Based Learning (PBL)
            heavily, others prefer lectures. Think about when you want patient
            contact to start and where you'll do your clinical placements in
            later years.
          </Text>
          <Text style={JuniorStyles.appStat}>
            {"\u2022"} Some medical schools require an extra year of study for
            an intercalated degree, like UCL and Oxford. At others, it's
            optional. This means an extra year of tuition and living costs, but
            you graduate with an additional degree. Consider whether this fits
            your timeline and budget.
          </Text>
          <Text style={JuniorStyles.appStat}>
            {"\u2022"} Some medical schools require an extra year of study for
            an intercalated degree, like UCL and Oxford. At others, it's
            optional. This means an extra year of tuition and living costs, but
            you graduate with an additional degree. Consider whether this fits
            your timeline and budget.
          </Text>
          <Text style={JuniorStyles.appStat}>
            {"\u2022"} The campus environment can significantly impact your
            student experience. Some medical schools have purpose-built
            facilities all in one location, while others are spread across a
            city. Consider whether you prefer a dedicated medical campus where
            you'll see familiar faces daily or being part of a larger university
            with access to wider facilities and societies.
          </Text>
          <Text style={JuniorStyles.appStat}>
            {"\u2022"} Each university selects differently. Some use Multiple
            Mini Interviews (MMIs), others do traditional panels. They weight
            things differently too; one might prioritise your UCAT score while
            another focuses on interviews or GCSEs. Competition varies, with
            some schools getting 10+ applications per place.
          </Text>
          <Text style={JuniorStyles.appStat}>
            {"\u2022"} When selecting a medical university, consider the quality
            of clinical exposure, including how early placements begin, the
            reputation of teaching hospitals and NHS trusts, and the range of
            patient exposure. Strong clinical experience plays a key role in
            developing real-world medical skills.
          </Text>
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
                width: "5%",
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
              {Footer()}
            </View>
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}
