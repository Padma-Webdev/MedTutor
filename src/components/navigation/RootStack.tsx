import React from "react";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactUsContainer from "../website/contact-us";
import CoursesContainer from "../website/courses";
import HeroContainer from "../website/heroPage";
import Navigation from "../website/navigation";
import Home from "../website";
import { RoutePath } from "./routes";
import AboutHPATContainer from "../website/courses/irelandCourses/HPAT/aboutHPAT";
import HPATDatesContainer from "../website/courses/irelandCourses/HPAT/hpatDates";
import HPATChangesContainer from "../website/courses/irelandCourses/HPAT/hpatChanges";
import GroupPrepContainer from "../website/courses/irelandCourses/HPAT_Tutoring/groupPrep";
import DayPrepContainer from "../website/courses/irelandCourses/HPAT_Tutoring/dayPrep";
import LeavingCertContainer from "../website/courses/irelandCourses/JuniorCert/leavingCert";
import JuniorCertificateChangeContainer from "../website/courses/irelandCourses/JuniorCert/juniorCert";
import UCATGroupPrepContainer from "../website/courses/ukCourses/UCAT Tutoring/ucatPrep";
import PersonalGuidanceContainer from "../website/courses/ukCourses/Personal Statement/personalGuidance";
import PersonalFAQsContainer from "../website/courses/ukCourses/Personal Statement/personalFAQs";

type RootStackParamList = {
  [RoutePath.Home]: undefined;
  [RoutePath.ABOUTHPAT]: undefined;
  [RoutePath.HPATDATES]: undefined;
  [RoutePath.HPATCHANGES]: undefined;
  [RoutePath.GROUPPREP]: undefined;
  [RoutePath.WEEKPREP]: undefined;
  [RoutePath.LEAVINGCERT]: undefined;
  [RoutePath.JUNIORCERT]: undefined;
  [RoutePath.UCATTUTOR]: undefined;
  [RoutePath.PERSONALGUIDANCE]: undefined;
  [RoutePath.PERSONALREVIEW]: undefined;
  [RoutePath.PERSONALFAQ]: undefined;
  Courses: undefined;
  Hero: undefined;
  Navigation: undefined;
  "Contact-us": undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [process.env.EXPO_PUBLIC_BASE_URL ?? "/"],
};

const RootStack = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName={RoutePath.Home}
        screenOptions={{
          headerShown: true,
          header: () => <Navigation />,
          headerStyle: { backgroundColor: "transparent" },
          headerTintColor: "white",
          headerTransparent: true,
          headerTitle: "",
          title: "MedTutor",
        }}
      >
        <Stack.Screen name={RoutePath.Home} component={Home} />
        <Stack.Screen name="Courses" component={CoursesContainer} />
        <Stack.Screen name="Hero" component={HeroContainer} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="Contact-us" component={ContactUsContainer} />
        <Stack.Screen
          name={RoutePath.ABOUTHPAT}
          component={AboutHPATContainer}
        />
        <Stack.Screen
          name={RoutePath.HPATDATES}
          component={HPATDatesContainer}
        />
        <Stack.Screen
          name={RoutePath.HPATCHANGES}
          component={HPATChangesContainer}
        />
        <Stack.Screen
          name={RoutePath.GROUPPREP}
          component={GroupPrepContainer}
        />
        <Stack.Screen name={RoutePath.WEEKPREP} component={DayPrepContainer} />
        <Stack.Screen
          name={RoutePath.LEAVINGCERT}
          component={LeavingCertContainer}
        />
        <Stack.Screen
          name={RoutePath.JUNIORCERT}
          component={JuniorCertificateChangeContainer}
        />
        <Stack.Screen
          name={RoutePath.UCATTUTOR}
          component={UCATGroupPrepContainer}
        />
        <Stack.Screen
          name={RoutePath.PERSONALGUIDANCE}
          component={PersonalGuidanceContainer}
        />
        <Stack.Screen
          name={RoutePath.PERSONALFAQ}
          component={PersonalFAQsContainer}
        />
        {/* Optional catch-all */}
        {/* <Stack.Screen name="NotFound" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
