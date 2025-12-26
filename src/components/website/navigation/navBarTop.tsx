import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import useDimensions from "../common/dimensions";
import MenuIcon from "@mui/icons-material/Menu";
// import RegionSwitch from "../common/regionSwitch";

export default function Navigation() {
  const dimensions = useDimensions();
  const screenWidth = dimensions.window.width;
  const isSmallScreen = screenWidth < 740;

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
          <View style={styles.headerContentSpace}>
            <TouchableOpacity>
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
        )}
      </View>
    </View>
  );
}
