import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export default StyleSheet.create({
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 2,
    backgroundColor: theme.colors.white_green,
    padding: 5,
  },
  text: {
    color: theme.colors.green,
    fontSize: 12,
  },
});
