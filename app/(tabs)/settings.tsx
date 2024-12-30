import Header from "@/components/Header";
import { View, Text, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <View>
      <Header title="settings" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
