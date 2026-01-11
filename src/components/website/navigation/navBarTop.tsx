import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { ukCourses } from "../courses/array";
import { useNavigation } from "@react-navigation/native";
import { RoutePath } from "../../navigation/routes";

export default function NavigationTop() {
  const navigation = useNavigation();
  const [region, setRegion] = useState(true);
  const [hpat, showHpat] = useState(false);
  const [hpatTutor, showHpatTutor] = useState(false);
  const [leaveCert, showLeaveCert] = useState(false);
  const [freeRes, showfreeRes] = useState(false);
  const [moreRes, showMoreRes] = useState(false);
  const regionSwitchROI = () => {
    setRegion(true);
  };
  const regionSwitchUK = () => {
    setRegion(false);
    showHpat(false);
    showHpatTutor(false);
    showLeaveCert(false);
    showfreeRes(false);
    showMoreRes(false);
  };

  const handleHPAT = () => {
    showHpat(true);
    showHpatTutor(false);
    showLeaveCert(false);
    showfreeRes(false);
    showMoreRes(false);
  };

  const handleHPATTutoring = () => {
    showHpat(false);
    showHpatTutor(true);
    showLeaveCert(false);
    showfreeRes(false);
    showMoreRes(false);
  };

    const handleleavingCert = () => {
    showHpat(false);
    showHpatTutor(false);
    showLeaveCert(true);
    showfreeRes(false);
    showMoreRes(false);
  };

  useEffect(() => {}, [hpat]);
  useEffect(() => {}, [hpatTutor]);
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

  const courses = (item: any, index: any) => {
    return (
      <View key={index.toString()}>
        <TouchableOpacity>
          <Text style={styles.headerText}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const displayROICourses = () => {
    return (
      <View style={styles.headerSpace}>
        <TouchableOpacity onPress={() => handleHPAT()}>
          <View>
            <Text style={styles.headerText}>HPAT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleHPATTutoring()}>
          <View>
            <Text style={styles.headerText}>HPAT Tutoring</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleleavingCert()}>
          <View>
            <Text style={styles.headerText}>Leaving Cert Grinds</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.headerText}>Free Resources</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={styles.headerText}>More</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
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
    <View>
      <View style={styles.headerBackground}>
        <View style={styles.logoSpace}>
          <Image
            source={require("../../images/logo.png")}
            style={styles.headerLogo}
          />
          <Text style={styles.headerLogoText}>MedTutor</Text>
        </View>
        <View style={styles.headerContentSpace}> {coursesDataSwitch()}</View>
        <View style={styles.regswitchView}>{regionalSwitch()}</View>
      </View>
      {hpat && (
        <View style={styles.hpatDropDownView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.ABOUTHPAT as never)}
          >
            <View style={{ marginTop: 2 }}>
              <Text style={styles.headerText}>About HPAT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.HPATDATES as never)}
          >
            <View style={{ marginTop: 3 }}>
              <Text style={styles.headerText}>HPAT Dates, Fees & Results</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.HPATCHANGES as never)}
          >
            <View style={{ marginTop: 3, marginBottom: 4 }}>
              <Text style={styles.headerText}>
                HPAT Changes from 2027 and FAQs
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {hpatTutor && (
        <View style={styles.hpatTutoringDropDownView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.GROUPPREP as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>
                1:1 & Small Group HPAT Preparation(Online)
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.WEEKPREP as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>
                2 Days and 8 Week HPAT Preparation Course
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {leaveCert && (
        <View style={styles.JuniorDropDownView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.LEAVINGCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>
                Leaving Certificate
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.WEEKPREP as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>
                Junior Certificate
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.WEEKPREP as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>
                Student Packages
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
