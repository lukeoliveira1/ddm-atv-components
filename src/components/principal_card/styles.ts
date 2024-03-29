import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export default StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    minWidth: "90%",
  },
  image: {
    width: 100,
    height: 100,
  },
  text_avatar: {
    color: "black",
    marginRight: 25,
    fontSize: 18,
  },
  text_add_user_button: {
    color: "white",
  },
  div_image: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 10,
    padding: 10,
  },
  div_buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  view__profile_button: {
    backgroundColor: theme.colors.white_gray,
    color: theme.colors.white,
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  add_user_button: {
    backgroundColor: theme.colors.green,
    color: theme.colors.white,
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
});
