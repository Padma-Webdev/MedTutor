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

export default function UCASExtraContainer() {
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
        <Text style={groupStyles.mainText}>UCAS Extra</Text>
        <Text
          style={
            isSmallScreen
              ? personalStyles.TitleTextSmallScreen
              : personalStyles.TitleText
          }
        >
          UCAS Extra allows you to apply for additional courses if you’re not
          holding any offers or if you’ve rejected your offers. However, if you
          add another choice through Extra, you won’t be able to revert to your
          original five choices.
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#f8fefe",
            fontWeight: "bold",
            marginLeft: "1.5%",
            marginBottom: 15,
            width: "95%",
            alignSelf: "center",
          }}
        >
          What is Clearing?
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: "2%",
            marginBottom: 15,
            width: "95%",
            alignSelf: "center",
          }}
        >
          UCAS offers Clearing, which opens in July and allows universities to
          advertise places in courses that haven’t been filled. You can use
          Clearing if you’re not holding any offers or didn’t meet the
          conditions of your offers on results day.
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#f8fefe",
            fontWeight: "bold",
            marginLeft: "1.5%",
            marginBottom: 15,
            width: "95%",
            alignSelf: "center",
          }}
        >
          What if your results are better than expected?
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: "2%",
            marginBottom: 15,
            width: "95%",
            alignSelf: "center",
          }}
        >
          If you managed to meet and exceed the conditions of your firm offer,
          you might be thinking of exploring an alternative course requiring
          higher grades. If you find this in your situation, you can use the
          Clearing service to see what courses are available.
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#f8fefe",
            fontWeight: "bold",
            marginLeft: "1.5%",
            marginBottom: 15,
            width: "95%",
            alignSelf: "center",
          }}
        >
          I want to defer my entry
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#f8fefe",
            fontWeight: "400",
            marginLeft: "2%",
            marginBottom: 15,
            width: "95%",
            alignSelf: "center",
          }}
        >
          If you have decided you want to take a gap year before starting
          university, you may be able to defer your entry. You will need to
          check if the course and university allow deferred entry by contacting
          them directly.{" "}
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
            Linking.openURL("mailto: contactus@medtutor.ie?subject=UCAS Extra");
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
              height: screenHeight,
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
