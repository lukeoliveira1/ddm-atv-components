import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PrincipalCard from "./src/components/principal_card";
import { theme } from "./src/styles/theme";
import SecondaryCard from "./src/components/secondary_card";

export default function App() {
  return (
    <View style={styles.container}>
      <PrincipalCard />

      <SecondaryCard name={"John Doe"} text={"+155"} positive={true} />
      <SecondaryCard name={"Emily White"} text={"+155"} positive={true} />
      <SecondaryCard name={"Oliver Brown"} text={"+155"} positive={true} />
      <SecondaryCard name={"Ava Miller"} text={"-15"} positive={false} />
      <SecondaryCard name={"Ethan Davis"} text={"-15"} positive={false} />
      <SecondaryCard name={"Sophia Wilson"} text={"-15"} positive={false} />

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
