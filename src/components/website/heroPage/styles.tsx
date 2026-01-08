import { StyleSheet } from "react-native";

export const heroStyles = StyleSheet.create({
  mainView: {
    marginVertical: "10%",
    marginHorizontal: "10%",
    flexDirection: "column",
    width: "50%",
  },
  mobileView: {
    marginVertical: "10%",
    marginHorizontal: "10%",
    flexDirection: "column",
    width: "80%",
  },
  /**Banner Text */
  banner: {
    margin: 10,
    borderColor: "#23CFBB",
    borderWidth: 2,
    borderRadius: 30,
    padding: 10,
    width: 275,
    backgroundColor: "#112230",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  bannerText: { fontSize: 15, color: "#c0cad4", marginLeft: 5 },

  /**Hero Text */
  heroText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 80 },
  heroTextMobile: { color: "#FFFFFF", fontWeight: "bold", fontSize: 50 },
  subView: { marginTop: 10, width: "80%" },
  subText: { color: "#c0cad4", fontSize: 20 },
  subTextMobile: { color: "#c0cad4", fontSize: 18 },
  buttonsView: {
    flexDirection: "row",
    width: "64%",
    height: "20%",
    justifyContent: "flex-start",
    marginTop: 20,
  },
    buttonsMobileView: {
    flexDirection: "row",
    width: "100%",
    height: "20%",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  button: {
    marginLeft: "4%",
    width: "45%",
    borderWidth: 2,
    height: "85%",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
    buttonMobile: {
    width: "50%",
    borderWidth: 2,
    height: "75%",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText1: { color: "#f8fefe", fontWeight: "bold", fontSize: 17,padding: 10 },
  buttonText2: { color: "#f8fefe", fontWeight: "300", fontSize: 17,padding: 10  },
});
