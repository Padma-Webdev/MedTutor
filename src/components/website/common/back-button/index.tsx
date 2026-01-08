import React from "react";
import { TouchableOpacity, View } from "react-native";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigation } from "@react-navigation/native";
import { RoutePath } from "../../../navigation/routes";

export default function BackButton() {
  const navigation = useNavigation();
  return (

      <TouchableOpacity
        style={{ width: 40, height: 40, marginTop: 70}}
        onPress={() => navigation.navigate(RoutePath.Home as never)}
      >
        <ArrowBackIcon
          sx={{ color: "#f8fefe", width: "100%", height: "80%" }}
        />
      </TouchableOpacity>
  );
}
