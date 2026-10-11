import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { courseStyles } from "../courses/styles";
import { useNavigation } from "@react-navigation/native";

export default function TutorsContainer() {
  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 740;
  const isDev = process.env.NODE_ENV === "development";
 const BASE_URL = process.env.PUBLIC_URL || '.'; // empty in dev, repo prefix in prod

  const courseTile = () => {
    const navigation = useNavigation();
    return (
      <View
        style={
          isSmallScreen
            ? {
                flexDirection: "column",
                justifyContent: "space-evenly",
              }
            : {
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }
        }
      >
        <View
          style={
            isSmallScreen
              ? {
                  flex: 1,
                  backgroundColor: "#080e19",
                  marginBottom: 10,
                  width: "95%",
                  padding: 20,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#06443e",
                  justifyContent: "space-around",
                  flexDirection: "column",
                }
              : courseStyles.courseTileT
          }
        >
             <View style={isSmallScreen ? null :{alignSelf:"center",marginTop:10}}>
            <Image
              style={
                isSmallScreen
                  ? {
                      width: "100%",
                      height: 300,
                      borderRadius: 10,
                      marginBottom: 15,
                    }
                  : {
                      width: screenWidth * 0.155,
                      height: 350,
                      margin: 10,
                      borderRadius: 10,
                    }
              }
              source={{ uri: `${BASE_URL}/images/abby.jpeg` }}
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
              Abby Murphy
            </Text>
          </View>
          <View style={{ margin: 10, marginLeft: 20 }}>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"} {"4th Year Medical Student at Trinity College Dublin."}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "Over 2,000 hours of tutoring experience, supporting 100+ students in HPAT, Maths, and Chemistry."
              }
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {"Structured, clear, and student centred teaching style"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "Tailors lessons to individual student needs, building confidence and exam-ready skills"
              }
            </Text>
          </View>
        </View>
        <View
          style={
            isSmallScreen
              ? {
                  flex: 1,
                  backgroundColor: "#080e19",
                  marginBottom: 10,
                  width: "95%",
                  padding: 20,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#06443e",
                  justifyContent: "space-around",
                  flexDirection: "column",
                }
              : courseStyles.courseTileT
          }
        >
             <View style={isSmallScreen ? null :{alignSelf:"center",marginTop:10}}>
            <Image
              style={
                isSmallScreen
                  ? {
                      width: "100%",
                      height: 300,
                      borderRadius: 10,
                      marginBottom: 15,
                    }
                  : {
                      width: screenWidth * 0.155,
                      height: 350,
                      margin: 10,
                      borderRadius: 10,
                    }
              }
              source={{ uri: `${BASE_URL}/images/hasini.jpeg` }}
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
              Hasini Amba
            </Text>
          </View>
          <View style={{ margin: 10, marginLeft: 20 }}>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"} {"Medicine offer holder at the University of Southampton"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "Top 20% in both HPAT and UCAT, with UCAT SJT Band 1."
              }
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {"99% in Leaving Cert Biology and a Distinction in Junior Cert Science."}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "Interviewed at 4 UK medical schools and received 3 offers."
              }
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "Experienced in tutoring MMIs and medical school interviews."
              }
            </Text>
            {/* <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "Helping UK and Irish students with medicine applications and personal statements."
              }
            </Text> */}
          </View>
        </View>
        <View
          style={
            isSmallScreen
              ? {
                  flex: 1,
                  backgroundColor: "#080e19",
                  marginBottom: 10,
                  width: "95%",
                  padding: 20,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#06443e",
                  justifyContent: "space-around",
                  flexDirection: "column",
                }
              : courseStyles.courseTileT
          }
        >
             <View style={isSmallScreen ? null :{alignSelf:"center",marginTop:10}}>
            <Image
              style={
                isSmallScreen
                  ? {
                      width: "100%",
                      height: 300,
                      borderRadius: 10,
                      marginBottom: 15,
                    }
                  : {
                      width: screenWidth * 0.155,
                      height: 350,
                      borderRadius: 5,
                      margin: 10,
                    }
              }
              source={{ uri: `${BASE_URL}/images/jamal.jpeg` }}
            />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 23,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Jamal El Siddig
          </Text>
          <View style={{ margin: 10, marginLeft: 20 }}>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"} {"1st year Medical Student at RCSI, Dublin"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "Achieved top % results in both the HPAT and Leaving Certificate (2025)"
              }
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {"Expert tutor in HPAT, Biology, Chemistry, and Physics"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "Experience in exam paper valuation and correction across multiple private institutions"
              }
            </Text>
          </View>
        </View>
        <View
          style={
            isSmallScreen
              ? {
                  flex: 1,
                  backgroundColor: "#080e19",
                  marginBottom: 10,
                  width: "95%",
                  padding: 20,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#06443e",
                  justifyContent: "space-around",
                  flexDirection: "column",
                }
              : courseStyles.courseTileT
          }
        >
              <View style={isSmallScreen ? null :{alignSelf:"center",marginTop:10}}>
            <Image
              style={
                isSmallScreen
                  ? {
                      width: "100%",
                      height: 300,
                      borderRadius: 10,
                      marginBottom: 15,
                    }
                  : {
                      width: screenWidth * 0.155,
                      height: 350,
                      margin: 10,
                      borderRadius: 10,
                    }
              }
              source={{ uri: `${BASE_URL}/images/anjali.jpeg` }}
            />
          </View>
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
          <View style={{ margin: 10 }}>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {"Fourth-year medical student at the University of Oxford"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "Over 6 years of tutoring experience in UCAT, BMAT, MMIs, and subject-specific tutoring"
              }
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "Supported students in gaining offers from Oxford and Cambridge through highly tailored guidance"
              }
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "Interactive and engaging teaching style, mirroring the discussion-based Oxford tutorial system"
              }
            </Text>
          </View>
        </View>
        <View
          style={
            isSmallScreen
              ? {
                  flex: 1,
                  backgroundColor: "#080e19",
                  marginBottom: 10,
                  width: "95%",
                  padding: 20,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#06443e",
                  justifyContent: "space-around",
                  flexDirection: "column",
                }
              : courseStyles.courseTileT
          }
        >
             <View style={isSmallScreen ? null :{alignSelf:"center",marginTop:10}}>
            <Image
              style={
                isSmallScreen
                  ? {
                      width: "100%",
                      height: 300,
                      borderRadius: 10,
                      marginBottom: 15,
                    }
                  : {
                      width: screenWidth * 0.155,
                      height: 350,
                      margin: 10,
                      borderRadius: 10,
                    }
              }
              source={{ uri: `${BASE_URL}/images/branavi.jpeg` }}
            />
          </View>
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
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {"First-year medical student at the University of Bristol"}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "4 years of tutoring experience in A Level Subjects and 1 year in UCAT and MMIs."
              }
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "UCAT score of 3120 (top 3%) with experience attending six medical school interviews, offering strong admissions insight"
              }
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              {"\u2022"}{" "}
              {
                "Interactive, student-focused teaching style, emphasising exam technique, problem-solving, and confidence-building"
              }
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View
      style={
        isSmallScreen
          ? { backgroundColor: "#0F1727", width: "100%", height: "55%" }
          : { backgroundColor: "#0F1727", width: "100%", height: "40%" }
      }
    >
      <View style={courseStyles.textboxOne}>
        <Text style={courseStyles.title}>OUR EXPERT TUTORS</Text>
      </View>
      <View style={courseStyles.subtitle}>
        <Text style={courseStyles.subtext}>Learn from the Best</Text>
        <Text style={courseStyles.footerText}>
          Our tutors are top-performing medical students with strong academic
          records and a passion for medical education.
        </Text>
      </View>
      <View style={courseStyles.mainView}>
        <View
          style={
            isSmallScreen
              ? courseStyles.smallScreentileone
              : courseStyles.webscreenone
          }
        >
          {courseTile()}
        </View>
      </View>
    </View>
  );
}
