import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

const PrincipalCard = () => {
  return (
    <SafeAreaView style={styles.card}>
      <View style={styles.div_image}>
        <Image
          style={styles.image}
          source={require("../../../utils/avatar.png")}
        />
        <Text style={styles.text_avatar}>John Doe</Text>
      </View>

      <View style={styles.div_buttons}>
        <TouchableOpacity style={styles.view__profile_button}>
          <Text>View Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.add_user_button}>
          <Text style={styles.text_add_user_button}>Add User</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PrincipalCard;
