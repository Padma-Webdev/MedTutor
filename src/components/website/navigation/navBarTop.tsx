import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import useDimensions from "../common/dimensions";
import MenuIcon from "@mui/icons-material/Menu";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

export default function NavigationTop() {
  const dimensions = useDimensions();
  const screenWidth = dimensions.window.width;
  const isSmallScreen = screenWidth < 740;
  // const navigation: NavigationProp<ParamListBase>= useNavigation()

  const [region, setRegion] = useState(true);
  const regionSwitchROI = () => {
    setRegion(true);
  };
  const regionSwitchUK = () => {
    setRegion(false);
  };

  useEffect(() => {}, [region]);

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

  const coursesDataSwitch = () => {
    const country = region;
    return country ? (
      <View style={styles.headerContentSpace}>
        <TouchableOpacity onPress={(): void => }>
          <Text style={styles.headerText}>HPAT</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Leaving Cert Grinds</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Junior Cert Grinds</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Application Packages</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Free Resources</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>More</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.headerContentSpace}>
        <TouchableOpacity>
          <Text style={styles.headerText}>UCAT</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Personal Statement</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Interviews</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Application Packages</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>A Level</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Dentistry</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Application Packages</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Free Resources</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.headerBackground}>
        <TouchableOpacity style={styles.logoSpace}>
          <Image
            source={require("../../images/logo.png")}
            style={styles.headerLogo}
          />
          <Text style={styles.headerLogoText}>MedTutor</Text>
        </TouchableOpacity>
        {isSmallScreen ? (
          <TouchableOpacity style={styles.smallScreenHeader}>
            <MenuIcon width={10} height={10} sx={{ color: "#f8fefe" }} />
          </TouchableOpacity>
        ) : (
          <>
            {coursesDataSwitch()}
            <View style={{ alignSelf: "center", marginRight: "1%" }}>
              {regionalSwitch()}
            </View>
          </>
        )}
      </View>
    </View>
  );
}
