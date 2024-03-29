import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export default StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
    backgroundColor: theme.colors.white,
    minWidth: "85%",
    minHeight: 60,
  },
  div_avatar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 15,
  },
  div_text: {
    minWidth: 100,
  },
  div_buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 15,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    color: "black",
    fontSize: 14,
  },
  add_user_button: {
    backgroundColor: theme.colors.white_gray,
    padding: 5,
  },
});
