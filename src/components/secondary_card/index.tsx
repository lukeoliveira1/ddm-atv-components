import {
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import Classification from "../classification";

interface ClassificationProps {
  name: string;
  text: string;
  positive: boolean;
}

const SecondaryCard = ({ name, text, positive }: ClassificationProps) => {
  return (
    <SafeAreaView style={styles.card}>
      <View style={styles.div_avatar}>
        <Image
          style={styles.image}
          source={require("../../../utils/avatar.png")}
        />

        <View style={styles.div_text}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>

      <View style={styles.div_buttons}>
        <Classification text={text} positive={positive} />

        <TouchableOpacity style={styles.add_user_button}>
          <Ionicons name="person-add" size={18} color="gray" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SecondaryCard;
