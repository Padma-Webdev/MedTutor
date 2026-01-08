import { StyleSheet } from "react-native";

export const contactStyles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    backgroundColor: "#080e19",
    height: "25%",
    marginTop: "-4%",
  },
  mainContainerMobile: {
    width: "100%",
    backgroundColor: "#080e19",
    height: "15%",
  },
  buttonViewMobile: {
    width: "90%",
    height: "37%",
    marginTop: 20,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  buttonViewWeb: {
    width: "35%",
    height: "37%",
    marginTop: 20,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  buttonStyle: {
    backgroundColor: "#0F1727",
    width: "48%",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#06443e",
  },
  iconStyle: {
    color: "#23CFBB",
    height: "20%",
    width: "20%",
    alignSelf: "flex-start",
    padding: 4,
    backgroundColor: "#062421",
    borderRadius: 10,
  },
  titleText: {
    color: "white",
    marginTop: 15,
    fontSize: 22,
    fontWeight: "400",
  },
  subTitle: {
    color: "#B1BABA",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "400",
  },
  infoText: {
    color: "#23CFBB",
    marginTop: 10,
    fontSize: 17,
    fontWeight: "400",
  },
  buttonMargin: {
    margin: "7%",
  },
});
