import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header({ title }: { title: string }) {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%", // Add some margin for a centered look
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8, // Vertical padding for better spacing
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5, // Blur effect for shadow
    elevation: 8, // Shadow for Android
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase", // Optional: make the text uppercase for emphasis
    letterSpacing: 1.5, // Optional: slightly increase spacing for a sleek look
  },
});
