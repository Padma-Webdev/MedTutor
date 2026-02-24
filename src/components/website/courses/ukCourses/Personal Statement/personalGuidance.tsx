import {
  View,
  TouchableOpacity,
  Linking,
  Dimensions,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import { groupStyles } from "../../irelandCourses/HPAT_Tutoring/groupPrepStyles";
import { personalStyles } from "../../irelandCourses/HPAT_Tutoring/personalStyles";
import BackButton from "../../../common/back-button";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function PersonalGuidanceContainer() {
  const image = {
    uri: "https://images.pexels.com/photos/35531445/pexels-photo-35531445.jpeg?_gl=1*cj5i2w*_ga*MjEyMzczNTM1Ny4xNzY2MDgyMzEw*_ga_8JE65Q40S6*czE3NjgzMjgxMjIkbzYkZzEkdDE3NjgzMjkyNjckajUzJGwwJGgw",
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
        <Text style={groupStyles.mainText}>Personal Statement</Text>
        <Text
          style={
            isSmallScreen
              ? personalStyles.TitleTextSmallScreen
              : personalStyles.TitleText
          }
        >
          Your personal statement is often the deciding factor between securing
          a medical school interview and rejection. This 4,000 character
          statement must demonstrate not only your passion for medicine but also
          concrete evidence of the values, experiences, and reflective thinking
          that admissions tutors demand.
        </Text>
        <Text
          style={
            isSmallScreen
              ? personalStyles.TitleTextSmallScreen
              : personalStyles.TitleText
          }
        >
          Our tutors from Oxford and Bristol bring hundreds of hours of
          experience guiding and reviewing personal statements for medicine
          applicants. A unique personal statement is your chance to stand out
          among competitive applicants. We know that highlighting your strengths
          within the tight character limit can be challenging, particularly with
          the new 2025 UCAS personal statement changes. Our experienced tutors
          help you showcase your best qualities in a crisp, structured way that
          leaves a lasting impression on admissions tutors. We provide in-depth
          analysis of your drafts, including detailed edits and comments,
          tailored advice on structuring each section, and guidance on what to
          emphasize. With our support, we've helped numerous students secure
          interviews and offers from medical schools across the UK.
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
              "mailto: contactus@medtutor.ie?subject=UCAT Personal Guidance",
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
              height: screenHeight 
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
