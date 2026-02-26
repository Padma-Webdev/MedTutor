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
  Platform,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { personalStyles } from "../../irelandCourses/HPAT_Tutoring/personalStyles";
import { groupStyles } from "../../irelandCourses/HPAT_Tutoring/groupPrepStyles";
type PdfLinkProps = {
  label: string;
  pdfPath: string; // e.g. "/pdfs/terms.pdf"
};

const BASE_URL = process.env.PUBLIC_URL || "."; // empty in dev, repo prefix in prod

export const PdfLink: React.FC<PdfLinkProps> = ({ label, pdfPath }) => {
  const BASE_URL = process.env.PUBLIC_URL || ".";
  const openPdf = () => {
    if (Platform.OS === "web") {
      // Ensure there's exactly one slash between BASE_URL and pdfPath
      const url = `${BASE_URL.replace(/\/$/, "")}/${pdfPath.replace(/^\/+/, "")}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <TouchableOpacity onPress={openPdf}>
      <View style={{ marginTop: 3, marginBottom: 10 }}>
        <Text
          style={{
            color: "#2563EB",
            fontSize: 15,
            alignSelf: "center",
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function UCATCoursesContainer() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const isSmallScreen = screenWidth < 740;
  const image = {
    uri: "https://images.pexels.com/photos/35531445/pexels-photo-35531445.jpeg?_gl=1*cj5i2w*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgzMjgxMjIkbzYkZzEkdDE3NjgzMjkyNjckajUzJGwwJGgw",
  };

  const DayCourse = () => {
    return (
      <View
        style={{
          width: isSmallScreen ? "99%" : "49%",
          alignSelf: "center",
          borderRadius: 15,
          borderWidth: 2,
          borderColor: "#23CFBB",
        }}
      >
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
          UCAT 1-Day Intensive Course
        </Text>
        <View style={{ marginRight: "2%" }}>
          <Text
            style={{
              fontSize: 16.6,
              color: "#f8fefe",
              fontWeight: "400",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 15,
            }}
          >
            Our intensive, one-day course is designed to equip you with the
            essential techniques and up-to-the-minute knowledge you need to
            excel in every section of the UCAT. Perfect for a focused strategy
            injection or a last-minute confidence boost.
          </Text>
        </View>
        <View style={{ marginRight: "2%" }}>
          <Text
            style={{
              fontSize: 16.6,
              color: "#f8fefe",
              fontWeight: "800",
              marginLeft: isSmallScreen ? "5%" : "4%",
              marginBottom: 10,
            }}
          >
            Course Overview
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 7,
            }}
          >
            {"\u2022"} Dates: June 5th, 2026
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 7,
            }}
          >
            {"\u2022"} Time: 10:00 AM - 4:30 PM
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 7,
            }}
          >
            {"\u2022"} Format: Real-time Interaction (Dublin and Manchester)
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 15,
            }}
          >
            {"\u2022"} Location: Dublin and Manchester
          </Text>
        </View>
        <View style={{ marginRight: "2%" }}>
          <Text
            style={{
              fontSize: 16.6,
              color: "#f8fefe",
              fontWeight: "800",
              marginLeft: isSmallScreen ? "5%" : "4%",
              marginBottom: 10,
            }}
          >
            Why Choose the 1-Day Course?
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 7,
            }}
          >
            {"\u2022"} 100% Up-to-Date Content: Our academic team ensures
            content is current, based on the latest UCAT exam specifications.
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 7,
            }}
          >
            {"\u2022"} Strategy-First Teaching: We don't just teach content; we
            teach proven strategies for timesaving and maximising your score
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 15,
            }}
          >
            {"\u2022"} Expert Access: Get direct advice from high-scoring UCAT
            experts.
          </Text>
        </View>{" "}
        {/* <TouchableOpacity
          style={
            isSmallScreen
              ? {
                  backgroundColor: "#2563EB",
                  borderRadius: 10,
                  padding: 5,
                  width: "95%",
                  alignSelf: "center",
                  marginBottom: 5,
                }
              : {
                  backgroundColor: "#2563EB",
                  borderRadius: 5,
                  padding: 5,
                  width: 400,
                  marginBottom: 15,
                  alignSelf: "center",
                  alignContent: "center",
                }
          }
          onPress={() => {
            Linking.openURL(
              "mailto: contactus@medtutor.ie?subject=UCAT 1-Day Intensive Course",
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
        </TouchableOpacity> */}
        <View style={{marginBottom:isSmallScreen? 1:"16.5%",
        }}>
        <PdfLink
          label="Click to View 1 Day Course Schedule"
          pdfPath="pdfs/1-Day_Schedule.pdf"
        />
        </View>
      </View>
    );
  };

  const weekCourse = () => {
    return (
      <View
        style={{
          width: isSmallScreen ? "99%" : "49%",
           marginTop: isSmallScreen?"1%":"0%",
          alignSelf: "center",
          borderRadius: 15,
          borderWidth: 2,
          borderColor: "#23CFBB",
        }}
      >
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
          8-Week Ultimate UCAT Course
        </Text>
        <View style={{ marginRight: "2%" }}>
          <Text
            style={{
              fontSize: 16.6,
              color: "#f8fefe",
              fontWeight: "400",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 15,
            }}
          >
            Our flagship, Ultimate UCAT Online Course provides the most in-depth
            preparation across all 5 sections. Spread over eight weeks, this
            course allows for deep understanding, ample practice, and consistent
            skill development under the guidance of a high-scoring Super Tutor.
          </Text>
        </View>
        <View style={{ marginRight: "2%" }}>
          <Text
            style={{
              fontSize: 16.6,
              color: "#f8fefe",
              fontWeight: "800",
              marginLeft: isSmallScreen ? "5%" : "4%",
              marginBottom: 10,
            }}
          >
            Course Structure
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 7,
            }}
          >
            {"\u2022"} Duration: 8 Weeks (Every Saturday)
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 7,
            }}
          >
            {"\u2022"} Start Date: Every Saturday at 10:00 AM, starting from
            June 6th
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 7,
            }}
          >
            {"\u2022"} Format: Live Webinars with Interactive Sessions
          </Text>
        </View>
        <View style={{ marginRight: "2%" }}>
          <Text
            style={{
              fontSize: 16.6,
              color: "#f8fefe",
              fontWeight: "800",
              marginLeft: isSmallScreen ? "5%" : "4%",
              marginBottom: 10,
            }}
          >
            Key Features for Maximum Score
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 7,
            }}
          >
            {"\u2022"} Expert-Led Teaching: In-depth teaching and walkthroughs
            delivered by a high-scoring Super Tutor.
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 7,
            }}
          >
            {"\u2022"} Comprehensive Coverage: Key concepts for all 5 sections:
            Verbal Reasoning, Decision Making, Quantitative Reasoning, Abstract
            Reasoning (if applicable for your year), and Situational Judgement.
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 15,
            }}
          >
            {"\u2022"} Targeted Practice: UCAT questions with detailed,
            step-by-step analysis and insider strategies.
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 15,
            }}
          >
            {"\u2022"} Full Accountability: Weekly, interactive sessions to
            encourage student engagement and maintain momentum.
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#f8fefe",
              fontWeight: "600",
              marginLeft: isSmallScreen ? "6%" : "5%",
              marginBottom: 15,
            }}
          >
            {"\u2022"} Assessment & Review: Includes a Mini Mock Exam to track
            progress and all Lessons are recorded for flexible review.
          </Text>
        </View>{" "}
        <PdfLink
          label="Click to View 8 Week Course Schedule"
          pdfPath="pdfs/8_Week_Course_Schedule.pdf"
        />
      </View>
    );
  };

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
        <Text style={groupStyles.mainText}>UCAT COURSES</Text>
        <View
          style={{
            flexDirection: isSmallScreen ? "column" : "row",
            width: "95%",
            alignSelf: "center",
            marginTop: "1%",
            justifyContent: "space-between",
          }}
        >
          {DayCourse()}
          {weekCourse()}
        </View>
        <TouchableOpacity
          style={
            isSmallScreen
              ? {
                  backgroundColor: "#2563EB",
                   marginTop:10,
                  borderRadius: 10,
                  padding: 5,
                  width: "95%",
                  alignSelf: "center",
                  marginBottom: 5,
                }
              : {
                  backgroundColor: "#2563EB",
                  marginTop:10,
                  borderRadius: 5,
                  padding: 5,
                  width: 400,
                  marginBottom: 10,
                  alignSelf: "center",
                  alignContent: "center",
                }
          }
          onPress={() => {
            Linking.openURL(
              "mailto: contactus@medtutor.ie?subject=UCAT Intensive Course",
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
      </View>
    );
  };

  //   const TutorDetails = () => {
  //     return (
  //       <View
  //         style={
  //           isSmallScreen
  //             ? {
  //                 width: "99%",
  //                 alignSelf: "center",
  //                 marginTop: "1%",
  //                 padding: 15,
  //                 borderRadius: 15,
  //                 borderWidth: 2.5,
  //                 borderColor: "#23CFBB",
  //                 backgroundColor: "#080e19",
  //               }
  //             : {
  //                 flexDirection: "column",
  //                 width: "55%",
  //                 justifyContent: "space-evenly",
  //                 backgroundColor: "#080e19",
  //                 borderRadius: 15,
  //                 borderWidth: 2,
  //                 marginLeft: "2%",
  //                 borderColor: "#23CFBB",
  //               }
  //         }
  //       >
  //         <Text
  //           style={{
  //             color: "white",
  //             fontSize: 23,
  //             fontWeight: "bold",
  //             alignSelf: "center",
  //           }}
  //         >
  //           Our Tutors
  //         </Text>
  //         <View
  //           style={{
  //             flexDirection: isSmallScreen ? "column" : "row",
  //             justifyContent: "space-around",
  //           }}
  //         >
  //           <View
  //             style={
  //               isSmallScreen
  //                 ? {
  //                     width: "95%",
  //                     alignSelf: "center",
  //                     marginTop: "0.5%",
  //                     padding: 15,
  //                     borderRadius: 15,
  //                     borderWidth: 2.5,
  //                     borderColor: "#23CFBB",
  //                   }
  //                 : {
  //                     width: "49%",
  //                     height: "100%",
  //                     alignSelf: "center",
  //                     borderRadius: 15,
  //                     borderWidth: 2,
  //                     borderColor: "#23CFBB",
  //                   }
  //             }
  //           >
  //             <View
  //               style={
  //                 isSmallScreen
  //                   ? {
  //                       flex: 1,
  //                       width: "98%",
  //                       justifyContent: "space-around",
  //                       flexDirection: "column",
  //                     }
  //                   : {
  //                       flex: 0.5,
  //                       borderRadius: 15,
  //                       borderColor: "#06443e",
  //                       flexDirection: "column",
  //                     }
  //               }
  //             >
  //               <View
  //                 style={
  //                   isSmallScreen ? null : { alignSelf: "center", marginTop: 10 }
  //                 }
  //               >
  //                 <Image
  //                   style={
  //                     isSmallScreen
  //                       ? {
  //                           width: "70%",
  //                           height: 120,
  //                           borderRadius: 10,
  //                           marginBottom: 15,
  //                           alignSelf: "center",
  //                         }
  //                       : {
  //                           width: screenWidth * 0.15,
  //                           height: 150,
  //                           margin: 10,
  //                           borderRadius: 10,
  //                         }
  //                   }
  //                   source={{ uri: `${BASE_URL}/images/anjali.jpeg` }}
  //                 />
  //               </View>
  //               <View>
  //                 <Text
  //                   style={{
  //                     color: "white",
  //                     fontSize: 23,
  //                     fontWeight: "bold",
  //                     alignSelf: "center",
  //                   }}
  //                 >
  //                   Anjali Bachetta
  //                 </Text>
  //               </View>
  //               <View style={{ margin: 10, marginLeft: 20 }}>
  //                 <Text style={{ color: "white", fontSize: 13 }}>
  //                   {"\u2022"}{" "}
  //                   {"Fourth-year medical student at the University of Oxford"}
  //                 </Text>
  //                 <Text style={{ color: "white", fontSize: 13 }}>
  //                   {"\u2022"}{" "}
  //                   {
  //                     "Over 6 years of tutoring experience in UCAT, BMAT, MMIs, and subject-specific tutoring"
  //                   }
  //                 </Text>
  //                 <Text style={{ color: "white", fontSize: 13 }}>
  //                   {"\u2022"}{" "}
  //                   {
  //                     "Supported students in gaining offers from Oxford and Cambridge through highly tailored guidance"
  //                   }
  //                 </Text>
  //                 <Text style={{ color: "white", fontSize: 13 }}>
  //                   {"\u2022"}{" "}
  //                   {
  //                     "Interactive and engaging teaching style, mirroring the discussion-based Oxford tutorial system"
  //                   }
  //                 </Text>
  //               </View>
  //             </View>
  //           </View>
  //           <View
  //             style={
  //               isSmallScreen
  //                 ? {
  //                     width: "95%",
  //                     alignSelf: "center",
  //                     marginTop: "0.5%",
  //                     padding: 15,
  //                     borderRadius: 15,
  //                     borderWidth: 2.5,
  //                     borderColor: "#23CFBB",
  //                   }
  //                 : {
  //                     width: "49%",
  //                     height: "100%",
  //                     alignSelf: "center",
  //                     borderRadius: 15,
  //                     borderWidth: 2,
  //                     borderColor: "#23CFBB",
  //                   }
  //             }
  //           >
  //             <View
  //               style={
  //                 isSmallScreen
  //                   ? {
  //                       flex: 1,
  //                       width: "99%",
  //                       padding: 20,
  //                     }
  //                   : {
  //                       flex: 0.5,
  //                       borderRadius: 15,
  //                       borderColor: "#06443e",
  //                       flexDirection: "column",
  //                     }
  //               }
  //             >
  //               <View
  //                 style={
  //                   isSmallScreen ? null : { alignSelf: "center", marginTop: 10 }
  //                 }
  //               >
  //                 <Image
  //                   style={
  //                     isSmallScreen
  //                       ? {
  //                           width: "80%",
  //                           height: 120,
  //                           borderRadius: 10,
  //                           marginBottom: 15,
  //                           alignSelf: "center",
  //                         }
  //                       : {
  //                           width: screenWidth * 0.15,
  //                           height: 150,
  //                           margin: 10,
  //                           borderRadius: 10,
  //                         }
  //                   }
  //                   source={{ uri: `${BASE_URL}/images/branaviSmall.jpeg` }}
  //                 />
  //               </View>
  //               <View>
  //                 <Text
  //                   style={{
  //                     color: "white",
  //                     fontSize: 23,
  //                     fontWeight: "bold",
  //                     alignSelf: "center",
  //                   }}
  //                 >
  //                   Branavi Yogathasan
  //                 </Text>
  //                 <View style={{ margin: 10 }}>
  //                   <Text style={{ color: "white", fontSize: 13 }}>
  //                     {"\u2022"}{" "}
  //                     {"First-year medical student at the University of Bristol"}
  //                   </Text>
  //                   <Text style={{ color: "white", fontSize: 13 }}>
  //                     {"\u2022"}{" "}
  //                     {
  //                       "4 years of tutoring experience in A Level Subjects and 1 year in UCAT and MMIs."
  //                     }
  //                   </Text>
  //                   <Text style={{ color: "white", fontSize: 13 }}>
  //                     {"\u2022"}{" "}
  //                     {
  //                       "UCAT score of 3120 (top 3%) with experience attending six medical school interviews, offering strong admissions insight"
  //                     }
  //                   </Text>
  //                   <Text style={{ color: "white", fontSize: 13 }}>
  //                     {"\u2022"}{" "}
  //                     {
  //                       "Interactive, student-focused teaching style, emphasising exam technique, problem-solving, and confidence-building"
  //                     }
  //                   </Text>
  //                 </View>
  //               </View>
  //             </View>
  //           </View>
  //         </View>
  //       </View>
  //     );
  //   };

  return (
    <ScrollView
      style={{
        flex: 1,
        width: screenWidth,
        height: screenHeight * 1.2,
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
              height: isSmallScreen ? screenHeight *2.2 : screenHeight * 1.35,
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
                height: isSmallScreen
                  ? screenHeight * 1.2
                  : screenHeight * 1.35,
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
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}
