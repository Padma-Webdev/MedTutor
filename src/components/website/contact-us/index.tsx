import { View, Text } from "react-native";
import { courseStyles } from "../courses/styles";
import { contactStyles } from "./styles";
import useDimensions from "../common/dimensions";
import { Mail, Phone } from "lucide-react";

export default function ContactUsContainer() {
  const dimensions = useDimensions();
  const screenWidth = dimensions.window.width;
  const isSmallScreen = screenWidth < 740;
  return (
    <View
      style={
        isSmallScreen
          ? contactStyles.mainContainerMobile
          : contactStyles.mainContainer
      }
    >
      <View style={courseStyles.textboxOne}>
        <Text style={courseStyles.title}>Get In Touch</Text>
      </View>
      <View style={courseStyles.subtitle}>
        <Text style={courseStyles.subtext}>Contact Us</Text>
        <Text style={courseStyles.footerText}>
          Have questions? We're here to help. Reach out to our team and we'll
          get back to you as soon as possible.
        </Text>
      </View>
      <View
        style={
          isSmallScreen
            ? {
                width: "90%",
                height: "37%",
                marginTop: 20,
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "space-between",
              }
            : {
                width: "35%",
                height: "37%",
                marginTop: 20,
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "space-between",
              }
        }
      >
        <View
          style={{
            backgroundColor: "#0F1727",
            width: "48%",
            borderRadius: 15,
            borderWidth: 2,
            borderColor: "#06443e",
          }}
        >
          <View
            style={{
              margin: "7%",
            }}
          >
            <Mail
              style={{
                color: "#23CFBB",
                height: "20%",
                width: "20%",
                alignSelf: "flex-start",
                padding: 4,
                backgroundColor: "#062421",
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: "white",
                marginTop: 15,
                fontSize: 22,
                fontWeight: "400",
              }}
            >
              Email Us
            </Text>
            <Text
              style={{
                color: "#B1BABA",
                marginTop: 10,
                fontSize: 15,
                fontWeight: "400",
              }}
            >
              Send us an email anytime
            </Text>
            <Text
              style={{
                color: "#23CFBB",
                marginTop: 10,
                fontSize: 17,
                fontWeight: "400",
              }}
            >
              info@medtutor.co
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#0F1727",
            width: "48%",
            borderRadius: 15,
            borderWidth: 2,
            borderColor: "#06443e",
          }}
        >
          <View
            style={{
              // backgroundColor: "red",
              margin: "7%",
            }}
          >
            <Phone
              style={{
                color: "#23CFBB",
                height: "20%",
                width: "20%",
                alignSelf: "flex-start",
                padding: 4,
                backgroundColor: "#062421",
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: "white",
                marginTop: 15,
                fontSize: 22,
                fontWeight: "400",
              }}
            >
              Call Us
            </Text>
            <Text
              style={{
                color: "#B1BABA",
                marginTop: 10,
                fontSize: 15,
                fontWeight: "400",
              }}
            >
              Mon-Fri from 8am to 6pm
            </Text>
            <Text
              style={{
                color: "#23CFBB",
                marginTop: 10,
                fontSize: 17,
                fontWeight: "400",
              }}
            >
              +1 (555) 123-4567
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
