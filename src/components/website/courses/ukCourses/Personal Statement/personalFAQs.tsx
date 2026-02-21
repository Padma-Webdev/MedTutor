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

export default function PersonalFAQsContainer() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const isSmallScreen = screenWidth < 740
  const image = {
    uri: "https://images.pexels.com/photos/8197511/pexels-photo-8197511.jpeg?_gl=1*3oei9j*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgzMjgxMjIkbzYkZzEkdDE3NjgzMzAwMzAkajU2JGwwJGgw",
  };

  const Header = () => {
    return (
      <View
        style={{
          alignSelf: "center",
          width: "90%",
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
        <Text style={JuniorStyles.mainText}>Personal Statement - FAQs</Text>
        <Text style={JuniorStyles.bulletFAQPersonal}>
          What is the new UCAS personal statement format from 2026 entry?
        </Text>
        <Text style={JuniorStyles.faqAnswer}>
          UCAS has introduced a structured format with three specific questions
          replacing the previous open format. You have 4,000 characters total to
          address:
        </Text>
        <Text style={[JuniorStyles.faqAnswer, { marginTop: 10 }]}>
          {"\u2022"} 1. Why you want to study your chosen course,
        </Text>
        <Text style={JuniorStyles.faqAnswer}>
          {"\u2022"} 2. How your qualifications have prepared you
        </Text>
        <Text style={JuniorStyles.faqAnswer}>
          {"\u2022"} 3. What else you've done to prepare beyond academics.
        </Text>
        <Text style={[JuniorStyles.faqAnswer, { marginTop: 10 }]}>
          The character limit remains the same, but the structure ensures
          systematic coverage of essential areas for both medical and dental
          school applications.
        </Text>
        <Text style={JuniorStyles.bulletFAQPersonal}>
          Can I submit different personal statements for different courses on my UCAS application?
        </Text>
        <Text style={JuniorStyles.faqAnswer}>
         No. UCAS allows only one personal statement per application cycle, regardless of how many universities you apply to. If you're applying to both medicine and dentistry, or multiple dental schools, all institutions will receive the identical statement. This is why your statement must address core competencies and values that both medical and dental schools seek, rather than being tailored to one specific institution or course.
        </Text>
        <Text style={JuniorStyles.bulletFAQPersonal}>
          What should a medical or dental school personal statement include?
        </Text>
        <Text style={JuniorStyles.faqAnswer}>
          Your statement must demonstrate your understanding of the medical or dental profession, provide evidence of meaningful experiences in caring or healthcare roles, showcase reflection on what you've learned, and prove you possess essential qualities like teamwork, communication, manual dexterity (for dentistry), initiative, and the ability to balance responsibilities.
        </Text>
        <Text style={JuniorStyles.bulletFAQPersonal}>
          How do medical and dental schools actually use my personal statement?
        </Text>
        <Text style={JuniorStyles.faqAnswer}>
          Medical and dental schools use statements for shortlisting interview candidates and as the foundation for interview questions. Tutors will ask you to elaborate on experiences and claims you've made. Your statement must be compelling enough to secure an interview and robust enough to withstand detailed questioning about every aspect you mention.
        </Text>
        <Text style={JuniorStyles.bulletFAQPersonal}>
          When should I start working on my personal statement?
        </Text>
        <Text style={JuniorStyles.faqAnswer}>
         Begin drafting 3-4 months before your UCAS deadline (typically mid-October for medicine and dentistry). Strong statements require multiple drafts, reflection, and feedback. Starting early allows you to identify experience gaps, refine your writing, address all criteria, and achieve the depth of reflection admissions tutors expect from future healthcare professionals.
        </Text>
         <Text style={[JuniorStyles.bulletFAQPersonal,{alignSelf:"center"}]}>
          Need help crafting a compelling personal statement for medicine or dentistry?  
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
              "mailto: contactus@medtutor.ie?subject=Personal Statement Queries",
            );
          }}
        >
          <Text style={groupStyles.Bookings}>
            Email us at contactus@medtutor.ie to book your personalised
            consultation.
          </Text>
        </TouchableOpacity>
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
              width: screenWidth,
              height: isSmallScreen ? screenHeight * 1.6 : screenHeight  * 0.9,
            }}
          >
            <View
              style={{
                     height: isSmallScreen ? screenHeight * 1.6 : screenHeight  * 0.9,
                // borderRadius: 15,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#080e19",
                opacity: 0.3,
              }}
            />
            <View style={{
                marginLeft: 40,
                justifyContent: "flex-start",
                flexDirection: "row",
                width: "5%",
              }}>
              <BackButton />
            </View>
              {Header()}
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}
