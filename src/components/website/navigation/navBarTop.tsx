import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, Platform } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { RoutePath } from "../../navigation/routes";

type PdfLinkProps = {
  label: string;
  pdfPath: string; // e.g. "/pdfs/terms.pdf"
};

const BASE_URL = process.env.PUBLIC_URL || "."; // empty in dev, repo prefix in prod

export const PdfLink: React.FC<PdfLinkProps> = ({ label, pdfPath }) => {
  const BASE_URL = process.env.PUBLIC_URL || ".";
  const openPdf = () => {
    if (Platform.OS === "web") {
      // Ensure there's exactly one slash between BASE_URL and pdfPath
      const url = `${BASE_URL.replace(/\/$/, "")}/${pdfPath.replace(/^\/+/, "")}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <TouchableOpacity onPress={openPdf}>
      <View style={{ marginTop: 2, marginBottom: 2 }}>
        <Text style={styles.headerText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function NavigationTop() {
  const navigation = useNavigation();
  const [region, setRegion] = useState(true);
  const [hpat, showHpat] = useState(false);
  const [hpatTutor, showHpatTutor] = useState(false);
  const [leaveCert, showLeaveCert] = useState(false);
  const [freeRes, showfreeRes] = useState(false);
  const [ucat, showUcat] = useState(false);
  const [personalStatement, showpersonalStatement] = useState(false);
  const [appStat, showappStat] = useState(false);
  const [workEx, showWorkEx] = useState(false);
  const [freeResUK, showfreeResUK] = useState(false);
  const regionSwitchROI = () => {
    setRegion(true);
  };
  const regionSwitchUK = () => {
    setRegion(false);
    showHpat(false);
    showHpatTutor(false);
    showLeaveCert(false);
    showfreeRes(false);
  };

  const handleHPAT = () => {
    showHpat(true);
    showHpatTutor(false);
    showLeaveCert(false);
    showfreeRes(false);
  };

  const handleHPATTutoring = () => {
    showHpat(false);
    showHpatTutor(true);
    showLeaveCert(false);
    showfreeRes(false);
  };

  const handleleavingCert = () => {
    showHpat(false);
    showHpatTutor(false);
    showLeaveCert(true);
    showfreeRes(false);
  };

  const handleUCAT = () => {
    showUcat(true);
    showpersonalStatement(false);
    showappStat(false);
    showWorkEx(false);
    showfreeResUK(false);
  };

  const handlePersonalStatement = () => {
    showUcat(false);
    showpersonalStatement(true);
    showappStat(false);
    showWorkEx(false);
    showfreeResUK(false);
  };

  const handleAppStat = () => {
    showUcat(false);
    showpersonalStatement(false);
    showappStat(true);
    showWorkEx(false);
    showfreeResUK(false);
  };

  const handleWorkEx = () => {
    showUcat(false);
    showpersonalStatement(false);
    showappStat(false);
    showWorkEx(true);
    showfreeResUK(false);
  };

  // const handleFreeResUK = () => {
  //   showUcat(false);
  //   showpersonalStatement(false);
  //   showappStat(false);
  //   showWorkEx(false);
  //   showfreeResUK(true);
  // };

  // const handleFreeResources = () => {
  //   showHpat(false);
  //   showHpatTutor(false);
  //   showLeaveCert(false);
  //   showfreeRes(true);
  // };

  useEffect(() => {}, [hpat]);
  useEffect(() => {}, [hpatTutor]);
  useEffect(() => {}, [freeRes]);
  useEffect(() => {}, [leaveCert]);
  useEffect(() => {}, [ucat]);
  useEffect(() => {}, [personalStatement]);
  useEffect(() => {}, [appStat]);
  useEffect(() => {}, [workEx]);
  useEffect(() => {}, [freeResUK]);
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

  const displayUKCourses = () => {
    return (
      <View style={styles.headerSpace}>
        <TouchableOpacity onPress={() => handleUCAT()}>
          <View>
            <Text style={styles.headerText}>UCAT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePersonalStatement()}>
          <View>
            <Text style={styles.headerText}>Personal Statement</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAppStat()}>
          <View>
            <Text style={styles.headerText}>Application Strategy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleWorkEx()}>
          <View>
            <Text style={styles.headerText}>Work Experience</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => handleFreeResUK()}>
          <View>
            <Text style={styles.headerText}>Free Resources</Text>
          </View>
        </TouchableOpacity> */}
        {/* <TouchableOpacity>
          <View>
            <Text style={styles.headerText}>More</Text>
          </View>
        </TouchableOpacity> */}
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
        {/* <TouchableOpacity onPress={() => handleFreeResources()}>
          <View>
            <Text style={styles.headerText}>Free Resources</Text>
          </View>
        </TouchableOpacity> */}
        {/* <TouchableOpacity>
          <View>
            <Text style={styles.headerText}>More</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  };

  const coursesDataSwitch = () => {
    const country = region;
    return country ? displayROICourses() : displayUKCourses();
  };

  return (
    <View>
      <View style={styles.headerBackground}>
        <TouchableOpacity
          style={styles.logoSpace}
          onPress={() => navigation.navigate(RoutePath.Home as never)}
        >
          <Image
            source={{ uri: `${BASE_URL}/images/logo.png` }}
            style={styles.headerLogo}
          />
          <Text style={styles.headerLogoText}>MedTutor</Text>
        </TouchableOpacity>
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
            onPress={() => navigation.navigate(RoutePath.HPATCHANGES as never)}
          >
            <View style={{ marginTop: 3, marginBottom: 4 }}>
              <Text style={styles.headerText}>HPAT Changes - 2027</Text>
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
              <Text style={styles.headerText}> 1-2-1 & Group Tutoring</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.WEEKPREP as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>2 Day & 8 Week Courses</Text>
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
              <Text style={styles.headerText}>Leaving Certificate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.JUNIORCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>Junior Certificate</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {/* {freeRes && (
        <View style={styles.FreeResView}> */}
          {/* <TouchableOpacity onPress={() => downloadPDF("Section 1.pdf")}>
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>Section 1</Text>
            </View>
          </TouchableOpacity> */}
          {/* <PdfLink label="Section 1" pdfPath="pdfs/Section1.pdf" />
          <PdfLink
            label="HPAT Scoring Guide"
            pdfPath="pdfs/HPAT_Scoring_Guide.pdf"
          />
          <PdfLink
            label="HPAT Changes 2027"
            pdfPath="pdfs/HPAT_Changes_2027.pdf"
          /> */}
          {/* <TouchableOpacity
            onPress={() => downloadPDF("HPAT Scoring Guide.pdf")}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>HPAT Scoring Guide</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => downloadPDF("HPAT Changes 2027.pdf")}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>HPAT Changes 2027</Text>
            </View>
          </TouchableOpacity> */}
        {/* </View>
      )} */}
      {ucat && (
        <View style={styles.ucatDropDownView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.LEAVINGCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>UCAT Tutoring</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.JUNIORCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>UCAT Courses</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.JUNIORCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>UCAT Daily Study Timetable</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.JUNIORCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>UCAT Score Calculation</Text>
            </View>
          </TouchableOpacity>
         
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.JUNIORCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>UCAT 2025 Stats</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {personalStatement && (
        <View style={styles.personalStatementDropDownView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.LEAVINGCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>Personal Statement Guidance</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.JUNIORCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>Personal Statement Review</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.JUNIORCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>Personal Statement FAQs</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {appStat && (
        <View style={styles.appStatDropDownView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.LEAVINGCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>Selecting 4 Unis</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.JUNIORCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>What is UCAS Extra</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {workEx && (
        <View style={styles.WorkExDropDownView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.LEAVINGCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>WEX Requirements by Unis</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.JUNIORCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>Why Work Experience?</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {/* {leaveCert && (
        <View style={styles.JuniorDropDownView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.LEAVINGCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>Leaving Certificate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePath.JUNIORCERT as never)}
          >
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <Text style={styles.headerText}>Junior Certificate</Text>
            </View>
          </TouchableOpacity>
        </View>
      )} */}
    </View>
  );
}
