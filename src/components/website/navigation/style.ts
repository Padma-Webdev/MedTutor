import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: "#0d1623",
    width: "100%",
    height: "120%",
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
    marginLeft: "40%",
    justifyContent: "flex-end",
    width: "10%",
  },
  /** Header Text Menu */
  headerContentSpace: {
    flex: 1,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: "5%",
    justifyContent: "space-evenly",
  },
  headerText: {
    color: "#bdc4cf",
    fontSize: 15,
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
});
