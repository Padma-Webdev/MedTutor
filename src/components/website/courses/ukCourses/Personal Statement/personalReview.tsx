import {
  View,
  TouchableOpacity,
  Linking,
  Dimensions,
  Text,
  ImageBackground,
  ScrollView,
  Platform,
} from "react-native";
import { groupStyles } from "../../irelandCourses/HPAT_Tutoring/groupPrepStyles";
import { personalStyles } from "../../irelandCourses/HPAT_Tutoring/personalStyles";
import BackButton from "../../../common/back-button";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
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
      <View style={{ marginTop: 8, marginBottom: 2 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            marginLeft: 10,
            alignSelf:"center",
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function PersonalReviewContainer() {
  const image = {
    uri: "https://images.pexels.com/photos/8197511/pexels-photo-8197511.jpeg?_gl=1*3oei9j*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgzMjgxMjIkbzYkZzEkdDE3NjgzMzAwMzAkajU2JGwwJGgw",
  };
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const isSmallScreen = screenWidth < 740;
  const Header = () => {
    return (
      <View
        style={
          isSmallScreen
            ? personalStyles.headerSmallScreen
            : personalStyles.headerPersonal
        }
      >
        <View style={personalStyles.headerOpactiy} />
        <Text style={groupStyles.mainText}>
          Why should you review your Medicine or Dental Personal Statement?
        </Text>
        <Text
          style={
            isSmallScreen
              ? personalStyles.TitleTextSmallScreen
              : personalStyles.TitleText
          }
        >
          A poorly crafted personal statement can undermine even the strongest
          academic credentials. Common pitfalls include:
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
          {"\u2022"} Weak structure that fails to showcase your journey and
          motivation
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
          {"\u2022"} Generic content that doesn't demonstrate genuine passion
          for medicine
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
          {"\u2022"} Grammar and spelling errors that suggest lack of attention
          to detail
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
          {"\u2022"} Exceeding the 4,000 character limit or ineffective use of
          available space
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
          {"\u2022"} Missing key elements that admissions tutors expect to see
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
          {"\u2022"} Inappropriate language or tone that doesn't align with
          professional standard
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#f8fefe",
            fontWeight: "700",
            marginLeft: isSmallScreen ? "4%" : "6%",
            marginBottom: 10,
          }}
        >
          How does PS review work?
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "700",
            marginLeft: isSmallScreen ? "5%" : "11%",
            marginBottom: 4,
          }}
        >
          1. Submit Your Draft (max 4,000 characters)
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "5%" : "12%",
            marginBottom: 9,
          }}
        >
          Choose: Admissions Tutor or Practicing Medic
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "700",
            marginLeft: isSmallScreen ? "5%" : "11%",
            marginBottom: 4,
          }}
        >
          2. Get Expert Feedback in 48 hours
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "5%" : "12%",
            marginBottom: 9,
          }}
        >
          Detailed report + 60-minute review session
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "700",
            marginLeft: isSmallScreen ? "5%" : "11%",
            marginBottom: 4,
          }}
        >
          3. Improve and Succeed
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: isSmallScreen ? "5%" : "12%",
            marginBottom: 9,
          }}
        >
          Resubmit for additional reviews if needed
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
              "mailto: contactus@medtutor.ie?subject=UCAT Personal Review Guidance",
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
        <PdfLink
          label="Click to View Sample Personal Statement"
          pdfPath="pdfs/SampleQuestion.pdf"
        />
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
              height: isSmallScreen ? screenHeight * 1.1 : screenHeight * 0.7,
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
                  ? screenHeight * 1.16
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
