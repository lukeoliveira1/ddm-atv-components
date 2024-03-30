import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PrincipalCard from "./src/components/principal_card";
import { theme } from "./src/styles/theme";
import SecondaryCard from "./src/components/secondary_card";

export default function App() {
  const secondaryCardsData = [
    { name: "John Doe", text: "+155", positive: true },
    { name: "Emily White", text: "+155", positive: true },
    { name: "Oliver Brown", text: "+155", positive: true },
    { name: "Ava Miller", text: "-15", positive: false },
    { name: "Ethan Davis", text: "-15", positive: false },
    { name: "Sophia Wilson", text: "-15", positive: false },
  ];

  return (
    <View style={styles.container}>
      <PrincipalCard />

      {secondaryCardsData.map((card, index) => (
        <SecondaryCard
          key={index}
          name={card.name}
          text={card.text}
          positive={card.positive}
        />
      ))}

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
