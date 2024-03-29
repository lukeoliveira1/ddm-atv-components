import { SafeAreaView, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";
import { theme } from "../../styles/theme";

const Classification = () => {
  return (
    <SafeAreaView style={styles.div}>
      <FontAwesome name="chevron-up" size={18} color={theme.colors.green} />
      <Text style={styles.text}> +132 </Text>
    </SafeAreaView>
  );
};

export default Classification;
