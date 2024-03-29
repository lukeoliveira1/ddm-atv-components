import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export default StyleSheet.create({
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 2,
    padding: 5,
    minWidth: 65,
  },
  text: {
    color: theme.colors.green,
    fontSize: 12,
  },
});
