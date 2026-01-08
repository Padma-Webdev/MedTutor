import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image, Modal } from "react-native";
import { styles } from "./style";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { irishCourses, ukCourses } from "../courses/array";
import { RoutePath } from "../../navigation/routes";
import { useNavigation } from "@react-navigation/native";

export default function NavigationSide() {
  const navigation = useNavigation();
  const [region, setRegion] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const show = () => setModalVisible(true);
  const close = () => setModalVisible(false);
  const regionSwitchROI = () => {
    setRegion(true);
  };
  const regionSwitchUK = () => {
    setRegion(false);
  };

  const handleOnPress =()=>{
    navigation.navigate(RoutePath.HPAT as never)
    setModalVisible(false)
  }

  useEffect(() => {}, [region]);
  useEffect(() => {}, [modalVisible]);

  const regionalSwitch = () => {
    return (
      <View style={styles.reigonalSwitchView}>
        <TouchableOpacity
          style={region ? styles.activeRegion : styles.switchButton}
          onPress={regionSwitchROI}
        >
          <Text style={styles.buttonText}>🇮🇪 IE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={!region ? styles.activeRegion : styles.switchButton}
          onPress={regionSwitchUK}
        >
          <Text style={styles.buttonText}>🇬🇧 UK</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const courses = (item: any, index: any) => {
    return (
      <View style={styles.headerContentSpaceMobile} key={index.toString()}>
        <TouchableOpacity
          onPress={() => handleOnPress()}
        >
          <Text style={styles.headerTextMobile}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const displayROICourses = () => {
    return irishCourses?.map((item, index) => {
      return courses(item, index);
    });
  };

  const displayUKCourses = () => {
    return ukCourses?.map((item, index) => {
      return courses(item, index);
    });
  };

  const coursesDataSwitch = () => {
    const country = region;
    return country ? displayROICourses() : displayUKCourses();
  };

  return (
    <>
      <View style={styles.headerBackgroundMobile}>
        <View style={styles.logoSpace}>
          <Image
            source={require("../../images/logo.png")}
            style={styles.headerLogo}
          />
          <Text style={styles.headerLogoText}>MedTutor</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.smallScreenHeader} onPress={show}>
            <MenuIcon width={12} height={10} sx={{ color: "#f8fefe" }} />
          </TouchableOpacity>
          <Modal visible={modalVisible} transparent>
            <View
              style={{
                flex: 1,
                backgroundColor: "#112230",
                marginLeft: "15%",
                height: "120%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    marginTop: "3%",
                    width: "30%",
                    height: "100%",
                    marginLeft: "5%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {regionalSwitch()}
                </View>
                <TouchableOpacity
                  onPress={close}
                  style={{
                    marginTop: "4%",
                    width: "15%",
                    height: "80%",
                    marginLeft: "50%",
                    alignItems: "center",
                  }}
                >
                  <CloseIcon
                    sx={{ color: "#f8fefe", width: "70%", height: "80%" }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ width: "100%", height: "45%", margin: "5%" }}>
                {coursesDataSwitch()}
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </>
  );
}
