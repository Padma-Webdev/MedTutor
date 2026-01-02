// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import * as Linking from "expo-linking";
// import { RoutePath } from "./types";
// import NavigationTop from "../website/navigation/navBarTop";
// import Home from "../website";
// import HPATContainer from "../website/courses/irelandCourses/hpat";
// import React from "react";
// import Screens from "./screen";

// const stack = createStackNavigator();

// const AppRouter = () => {
//   let prefix = Linking.createURL("/");
//   const linking = {
//     prefixes: [prefix],
//   };
//   return (
//     <NavigationContainer linking={linking}>
//       <stack.Navigator
//         initialRouteName={RoutePath.Home}
//         screenOptions={() => ({
//           gestureEnabled: false,
//           headerShown: true,
//           header: () => <NavigationTop />,
//           title: "MedTutor",
//         })}
//       >
//         <>
//           <stack.Screen name={RoutePath.Home} component={Home} />
//           <stack.Screen name={RoutePath.HPATContainer}>
//             {() => (
//               <Screens>
//                 <HPATContainer />
//               </Screens>
//             )}
//           </stack.Screen>
//         </>
//       </stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppRouter;
