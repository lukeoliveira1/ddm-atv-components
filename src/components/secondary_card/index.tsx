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

const SecondaryCard = () => {
  return (
    <SafeAreaView style={styles.card}>
      <View style={styles.div_avatar}>
        <Image
          style={styles.image}
          source={require("../../../utils/avatar.png")}
        />
        <Text style={styles.text}>John Doe</Text>
      </View>

      <View style={styles.div_buttons}>
        <Classification />

        <TouchableOpacity style={styles.add_user_button}>
          <Ionicons name="person-add" size={18} color="gray" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SecondaryCard;
