import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PrincipalCard from "./src/components/principal_card";
import { theme } from "./src/styles/theme";
import SecondaryCard from "./src/components/secondary_card";

export default function App() {
  return (
    <View style={styles.container}>
      <PrincipalCard />

      <SecondaryCard />
      <SecondaryCard />
      <SecondaryCard />
      <SecondaryCard />
      <SecondaryCard />
      <SecondaryCard />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
