import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HPATContainer from "../website/courses/irelandCourses/hpat";
import ContactUsContainer from "../website/contact-us";
import CoursesContainer from "../website/courses";
import HeroContainer from "../website/heroPage";
import Navigation from "../website/navigation";
import Home from "../website";
import { RoutePath } from "./routes";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RoutePath.Home}
        screenOptions={{
          headerShown: true,
          header: () => <Navigation />,
          headerStyle: { backgroundColor: "transparent" },
          headerTintColor: "white",
          headerTransparent: true,
          headerTitle: "",
          title: "Medtutor",
        }}
      >
        <Stack.Screen name={RoutePath.Home} component={Home} />
        <Stack.Screen name="Courses" component={CoursesContainer} />
        <Stack.Screen name="Hero" component={HeroContainer} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="Contact-us" component={ContactUsContainer} />
        <Stack.Screen name={RoutePath.HPAT} component={HPATContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
