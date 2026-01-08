import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: "#0d1623",
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerBackgroundMobile: {
    backgroundColor: "#0d1623",
    width: "100%",
    height: "1.8%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  /** Header Logo and Text */
  headerLogo: {
    marginLeft: "10%",
    marginTop: 10,
    height: 35,
    width: 35,
  },
  headerLogoText: {
    marginTop: 15,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  logoSpace: {
    flexDirection: "row",
    flex: 0.15,
    marginLeft: "5%",
  },
  smallScreenHeader: {
    flex: 0.1,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: "80%",
    justifyContent: "flex-end",
    width: "12%",
  },
  /** Header Text Menu */
  headerContentSpace: {
    flex: 1,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: "5%",
    justifyContent: "space-evenly",
  },
  headerContentSpaceMobile: {
    flex: 1,
    flexDirection: "column",
    marginTop: 17,
    marginLeft: "5%",
    justifyContent: "space-evenly",
  },

  headerText: {
    color: "#bdc4cf",
    fontSize: 15,
  },
  headerTextMobile: {
    color: "#bdc4cf",
    fontSize: 18,
    fontWeight: "bold",
  },
  /** Header Switch Area */
  switchView: {
    marginLeft: "2%",
    marginRight: "3%",
    flexDirection: "row",

    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "red",
  },

  reigonalSwitchView: {
    borderWidth: 0.5,
    borderRadius: 9,
    width: 100,
    height: 25,
    borderColor: "#c0cad4",
    flexDirection: "row",
    padding: 1,
    justifyContent: "space-between",
  },
  switchButton: {
    width: "49%",
    borderRadius: 9,
  },
  activeRegion: {
    width: "49%",
    borderRadius: 9,
    backgroundColor: "#3A5EF2",
  },
  buttonText: { color: "white", fontSize: 13, alignSelf: "center" },
  regswitchView: { alignSelf: "center", marginRight: "1%" },
});
