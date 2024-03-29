import { SafeAreaView, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";
import { theme } from "../../styles/theme";

interface ClassificationProps {
  text: string;
  positive: boolean;
}

const Classification = ({ text, positive }: ClassificationProps) => {
  const baseColor = positive
    ? theme.colors.white_green
    : theme.colors.white_red;
  const iconColor = positive ? theme.colors.green : theme.colors.red;

  return (
    <SafeAreaView style={[styles.div, { backgroundColor: baseColor }]}>
      <FontAwesome name="chevron-up" size={18} color={iconColor} />
      <Text style={[styles.text, { color: iconColor }]}> {text} </Text>
    </SafeAreaView>
  );
};

export default Classification;
