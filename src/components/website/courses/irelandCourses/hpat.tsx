import React from "react";
import BackButton from "../../common/back-button";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { courseStyles } from "../styles";
import { Contact } from "lucide-react";
import { courseData, courseDataTwo } from "../array";
import { HPAT } from "./hpatArray";

export default function HPATContainer() {

    const screenWidth = Dimensions.get("window").width;
    const isSmallScreen = screenWidth < 740;

    const Array = (item: any, index: any) => {
    return (
      <View key={index.toString()}>
        <View style={{ marginTop:20,}}>
          <Text style={{ fontSize: 25, color: "#f8fefe", fontWeight: "600",marginBottom:10,}}>{item.title}</Text>
          <Text style={{ fontSize: 15, color: "#f8fefe",fontWeight: "400",}}>{item.description}</Text>
        </View>
      </View>
    );
  };
  const displayHPAT = () => {
    return HPAT?.map((item, index) => {
      return Array(item, index);
    });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#091121" }}>
      <View
        style={{
          marginLeft: 40,
          height: "12%",
          justifyContent: "flex-start",
          flexDirection: "row",
          width: "30%",
        }}
      >
        <BackButton />
        <View
          style={{
            marginLeft: 70,
            marginTop: 70,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 35, color: "#f8fefe", fontWeight: "bold" }}>
           HPAT
          </Text>
        </View>
      </View>

        <View
          style={{
            marginTop: 30,
            width: "75%",
            height: "80%",
            alignItems: "flex-start",
            alignSelf:"center"
          }}
        >{displayHPAT()}</View>
    </View>
  );
}
