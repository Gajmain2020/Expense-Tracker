import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import Header from "@/components/Header";
import DoughnutChart from "@/components/MainChart";
import { FontAwesome } from "@expo/vector-icons";

const expenseData = [
  {
    name: "Food",
    population: 400,
    color: "#FF6384",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "Rent",
    population: 300,
    color: "#36A2EB",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "Shopping",
    population: 200,
    color: "#FFCE56",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "Bills",
    population: 100,
    color: "#4BC0C0",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
];

export default function HomeScreen() {
  const [isNewExpenseOpen, setIsNewExpenseOpen] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Header title="Expenses" />
      <DoughnutChart data={expenseData} title="Expense Breakdown" />

      {/* Add New Expense Button */}
      <Pressable
        style={({ pressed }) => [
          styles.buttonWrapper,
          { backgroundColor: pressed ? "#68C3A5" : "#79D7BE" },
        ]}
        onPress={() => setIsNewExpenseOpen(true)}
      >
        <Text style={styles.buttonText}>Add New Expense</Text>
      </Pressable>

      {/* Modal for Adding New Expense */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isNewExpenseOpen}
        onRequestClose={() => setIsNewExpenseOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Close Button */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsNewExpenseOpen(false)}
            >
              <FontAwesome size={16} name="close" color="red" />
            </TouchableOpacity>
            <Text style={styles.modalText}>Add your new expense here!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonWrapper: {
    padding: 10,
    borderRadius: 10,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginHorizontal: "auto",
    marginTop: 20,
  },
  buttonText: {
    color: "#131010",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    height: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#D9DFC6",
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
});
