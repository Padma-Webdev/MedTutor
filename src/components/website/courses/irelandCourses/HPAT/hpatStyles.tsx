import { StyleSheet } from "react-native";

export const hpatStyles = StyleSheet.create({
  mainScroll: { flex: 1, backgroundColor: "#091121" },
  hpatTitle: {
    fontSize: 25,
    color: "#f8fefe",
    fontWeight: "600",
    marginBottom: 10,
    padding: 10,
    alignSelf: "center",
  },
  hpatDesc: {
    fontSize: 18,
    color: "#f8fefe",
    fontWeight: "400",
    marginBottom: 10,
    marginLeft: 25,
  },

    hpatDescWork: {
    fontSize: 18,
    color: "#f8fefe",
    fontWeight: "400",
    marginBottom: 10,
    marginLeft: 20,
  },
  hpatDescDates: {
    fontSize: 18,
    color: "#f8fefe",
    fontWeight: "400",
    marginBottom: 10,
    marginLeft: 25,
    alignSelf: "center",
  },
  hpatDesc2: {
    fontSize: 18,
    color: "#f8fefe",
    fontWeight: "400",
    marginBottom: 25,
    marginLeft: 25,
  },
  backButton: {
    marginLeft: 40,
    height: "10%",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "5%",
  },
  hpatDisplay: {
    width: "75%",
    height: "80%",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 75,
  },
  hpatDisplayMobile: {
    width: "95%",
    height: "80%",
    marginTop: 75,
    alignItems: "center",
    alignSelf: "center",
  },
  table: {
    borderWidth: 2,
    borderColor: "#23CFBB",
    margin: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#23CFBB",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  text: { fontSize: 18, color: "#f8fefe" },
  headerText: {
    fontSize: 18,
    color: "#f8fefe",
    fontWeight: "700",
  },
  boldText: {
    fontWeight: "700",
  },
  unitable: {
    borderWidth: 2,
    borderColor: "#000",
  },
  unirow: {
    flexDirection: "row",
  },
  unicell: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    justifyContent: "center",
  },

  /* Column sizing */
  cellUniversity: { flex: 3 },
  cellCode: { flex: 1.2 },
  cellPlaces: { flex: 2 },
  cellPoints: { flex: 2 },

  headerCell: {
    backgroundColor: "#fff",
  },
  unitext: {
    fontSize: 14,
  },
  uniheaderText: {
    fontSize: 14,
    fontWeight: "700",
  },
  uniboldText: {
    fontWeight: "700",
  },
  footnote: {
    marginTop: 8,
    fontSize: 12,
    color: "#f8fefe",
    fontStyle: "italic",
    marginBottom:30,
  },
});
