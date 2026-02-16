import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image, Modal } from "react-native";
import { styles } from "./style";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { RoutePath } from "../../navigation/routes";
import { useNavigation } from "@react-navigation/native";
import { PdfLink } from "./navBarTop";

export default function NavigationSide() {
  const isDev = process.env.NODE_ENV === "development";
  const BASE_URL = process.env.PUBLIC_URL || "."; // empty in dev, repo prefix in prod
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

  const [hpat, showHpat] = useState(false);
  const [hpatTutor, showHpatTutor] = useState(false);
  const [leaveCert, showLeaveCert] = useState(false);
  const [freeRes, showfreeRes] = useState(false);
  const [ucat, showUcat] = useState(false);
  const [personalStatement, showpersonalStatement] = useState(false);
  const [appStat, showappStat] = useState(false);
  const [workEx, showWorkEx] = useState(false);
  const [freeResUK, showfreeResUK] = useState(false);
  const handleOnPress = () => {
    // navigation.navigate(RoutePath.HPAT as never)
    setModalVisible(false);
  };

  const handleHPAT = () => {
    showHpat(true);
    showHpatTutor(false);
    showLeaveCert(false);
    showfreeRes(false);
    close;
    // showMoreRes(false);
  };

  const handleHPATTutoring = () => {
    showHpat(false);
    showHpatTutor(true);
    showLeaveCert(false);
    showfreeRes(false);
    // showMoreRes(false);
  };

  const handleleavingCert = () => {
    showHpat(false);
    showHpatTutor(false);
    showLeaveCert(true);
    showfreeRes(false);
    // showMoreRes(false);
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
  // const handleFreeResources = () => {
  //   showHpat(false);
  //   showHpatTutor(false);
  //   showLeaveCert(false);
  //   showfreeRes(true);
  // };

  useEffect(() => {}, [hpat]);
  useEffect(() => {}, [hpatTutor]);
  useEffect(() => {}, [leaveCert]);
  useEffect(() => {}, [freeRes]);
  useEffect(() => {}, [ucat]);
  useEffect(() => {}, [personalStatement]);
  useEffect(() => {}, [appStat]);
  useEffect(() => {}, [workEx]);
  useEffect(() => {}, [freeResUK]);
  useEffect(() => {}, [region]);

  const handleAboutHPat = () => {
    navigation.navigate(RoutePath.ABOUTHPAT as never);
    close;
  };

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

  const displayROICourses = () => {
    return (
      <View style={styles.headerSpaceMobile}>
        <TouchableOpacity onPress={() => handleHPAT()}>
          <View>
            <Text style={styles.headerText}>HPAT</Text>
          </View>
        </TouchableOpacity>
        {hpat && (
          <View style={{ marginTop: -25, marginLeft: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutePath.ABOUTHPAT as never);
                setModalVisible(false);
              }}
            >
              <View style={{ marginTop: 2 }}>
                <Text style={styles.headerText}>About HPAT</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutePath.HPATCHANGES as never);
                setModalVisible(false);
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={styles.headerText}>HPAT Changes - 2027</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={() => handleHPATTutoring()}>
          <View>
            <Text style={styles.headerText}>HPAT Tutoring</Text>
          </View>
        </TouchableOpacity>
        {hpatTutor && (
          <View style={{ marginTop: -25, marginLeft: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutePath.GROUPPREP as never);
                setModalVisible(false);
              }}
            >
              <View style={{ marginTop: 2 }}>
                <Text style={styles.headerText}>1-2-1 & Group Tutoring</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutePath.WEEKPREP as never);
                setModalVisible(false);
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={styles.headerText}>2 Day & 8 Week Courses</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={() => handleleavingCert()}>
          <View>
            <Text style={styles.headerText}>Leaving Cert Grinds</Text>
          </View>
        </TouchableOpacity>
        {leaveCert && (
          <View style={{ marginTop: -25, marginLeft: 20 }}>
            <TouchableOpacity
              onPress={() => {
                (navigation.navigate(RoutePath.LEAVINGCERT as never),
                  setModalVisible(false));
              }}
            >
              <View style={{ marginTop: 2 }}>
                <Text style={styles.headerText}>Leaving Certificate</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                (navigation.navigate(RoutePath.JUNIORCERT as never),
                  setModalVisible(false));
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={styles.headerText}>Junior Certificate</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {/* <TouchableOpacity onPress={() => handleFreeResources()}>
          <View>
            <Text style={styles.headerText}>Free Resources</Text>
          </View>
        </TouchableOpacity> */}
        {/* {freeRes && (
          <View style={{ marginTop: -25, marginLeft: 20 }}>
            <PdfLink label="Section 1" pdfPath="/pdfs/Section1.pdf" />
            <PdfLink
              label="HPAT Scoring Guide"
              pdfPath="/pdfs/HPAT_Scoring_Guide.pdf"
            />
            <PdfLink
              label="HPAT Changes 2027"
              pdfPath="/pdfs/HPAT_Changes_2027.pdf"
            />
          </View>
        )} */}
        {/* <TouchableOpacity>
          <View>
            <Text style={styles.headerText}>More</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  };

  const displayUKCourses = () => {
    return (
      <View style={styles.headerSpaceMobile}>
        <TouchableOpacity onPress={() => handleUCAT()}>
          <View>
            <Text style={styles.headerText}>UCAT</Text>
          </View>
        </TouchableOpacity>
        {ucat && (
          <View style={{ marginTop: -25, marginLeft: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutePath.ABOUTHPAT as never);
                setModalVisible(false);
              }}
            >
              <View style={{ marginTop: 2 }}>
                <Text style={styles.headerText}>UCAT Tutoring</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutePath.HPATCHANGES as never);
                setModalVisible(false);
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={styles.headerText}>UCAT Courses</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutePath.HPATCHANGES as never);
                setModalVisible(false);
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={styles.headerText}>
                  UCAT Daily Study Timetable
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutePath.HPATCHANGES as never);
                setModalVisible(false);
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={styles.headerText}>UCAT Score Calculation</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutePath.HPATCHANGES as never);
                setModalVisible(false);
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={styles.headerText}>UCAT 2025 Stats</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={() => handlePersonalStatement()}>
          <View>
            <Text style={styles.headerText}>Personal Statement</Text>
          </View>
        </TouchableOpacity>
        {personalStatement && (
          <View style={{ marginTop: -25, marginLeft: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutePath.GROUPPREP as never);
                setModalVisible(false);
              }}
            >
              <View style={{ marginTop: 2 }}>
                <Text style={styles.headerText}>
                  Personal Statement Guidance
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutePath.WEEKPREP as never);
                setModalVisible(false);
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={styles.headerText}>Personal Statement Review</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(RoutePath.WEEKPREP as never);
                setModalVisible(false);
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={styles.headerText}>Personal Statement FAQs</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={() => handleAppStat()}>
          <View>
            <Text style={styles.headerText}>Application Strategy</Text>
          </View>
        </TouchableOpacity>
        {appStat && (
          <View style={{ marginTop: -25, marginLeft: 20 }}>
            <TouchableOpacity
              onPress={() => {
                (navigation.navigate(RoutePath.LEAVINGCERT as never),
                  setModalVisible(false));
              }}
            >
              <View style={{ marginTop: 2 }}>
                <Text style={styles.headerText}>Selecting 4 Unis</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                (navigation.navigate(RoutePath.JUNIORCERT as never),
                  setModalVisible(false));
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={styles.headerText}>What is UCAS Extra </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={() => handleWorkEx()}>
          <View>
            <Text style={styles.headerText}>Work Experience</Text>
          </View>
        </TouchableOpacity>
        {workEx && (
          <View style={{ marginTop: -25, marginLeft: 20 }}>
            <TouchableOpacity
              onPress={() => {
                (navigation.navigate(RoutePath.LEAVINGCERT as never),
                  setModalVisible(false));
              }}
            >
              <View style={{ marginTop: 2 }}>
                <Text style={styles.headerText}>WEX Requirements by Unis</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                (navigation.navigate(RoutePath.JUNIORCERT as never),
                  setModalVisible(false));
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={styles.headerText}>Why Work Experience?</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {/* <TouchableOpacity onPress={() => handleFreeResources()}>
          <View>
            <Text style={styles.headerText}>Free Resources</Text>
          </View>
        </TouchableOpacity> */}
        {/* {freeRes && (
          <View style={{ marginTop: -25, marginLeft: 20 }}>
            <PdfLink label="Section 1" pdfPath="/pdfs/Section1.pdf" />
            <PdfLink
              label="HPAT Scoring Guide"
              pdfPath="/pdfs/HPAT_Scoring_Guide.pdf"
            />
            <PdfLink
              label="HPAT Changes 2027"
              pdfPath="/pdfs/HPAT_Changes_2027.pdf"
            />
          </View>
        )} */}
        {/* <TouchableOpacity>
          <View>
            <Text style={styles.headerText}>More</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  };

  // const displayUKCourses = () => {
  //   return (
  //     <View style={styles.headerSpace}>
  //       <TouchableOpacity onPress={() => handleUCAT()}>
  //         <View>
  //           <Text style={styles.headerText}>UCAT</Text>
  //         </View>
  //       </TouchableOpacity>
  //       <TouchableOpacity onPress={() => handlePersonalStatement()}>
  //         <View>
  //           <Text style={styles.headerText}>Personal Statement</Text>
  //         </View>
  //       </TouchableOpacity>
  //       <TouchableOpacity onPress={() => handleAppStat()}>
  //         <View>
  //           <Text style={styles.headerText}>Application Strategy</Text>
  //         </View>
  //       </TouchableOpacity>
  //       <TouchableOpacity onPress={() => handleWorkEx()}>
  //         <View>
  //           <Text style={styles.headerText}>Work Experience</Text>
  //         </View>
  //       </TouchableOpacity>
  //       {/* <TouchableOpacity onPress={() => handleFreeResUK()}>
  //         <View>
  //           <Text style={styles.headerText}>Free Resources</Text>
  //         </View>
  //       </TouchableOpacity> */}
  //       {/* <TouchableOpacity>
  //         <View>
  //           <Text style={styles.headerText}>More</Text>
  //         </View>
  //       </TouchableOpacity> */}
  //     </View>
  //   );
  // };

  const coursesDataSwitch = () => {
    const country = region;
    return country ? displayROICourses() : displayUKCourses();
  };

  return (
    <>
      <View style={styles.headerBackgroundMobile}>
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
                    marginLeft: "25%",
                    alignItems: "center",
                  }}
                >
                  <CloseIcon
                    sx={{ color: "#f8fefe", width: "70%", height: "80%" }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ width: "100%", height: "45%", margin: "1%" }}>
                {coursesDataSwitch()}
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </>
  );
}
