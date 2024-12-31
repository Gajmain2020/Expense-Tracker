import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";

interface DoughnutChartProps {
  data: {
    name: string;
    population: number;
    color: string;
    legendFontColor: string;
    legendFontSize: number;
  }[];
  title?: string;
}

const screenWidth = Dimensions.get("window").width;

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, title }) => {
  return (
    <View style={styles.container}>
      {/* <View></View> */}
      {title && <Text style={styles.title}>{title}</Text>}
      <PieChart
        data={data}
        width={screenWidth - 10} // Chart width
        height={180} // Chart height
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={"population"} // Key for values
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute // Displays absolute values inside slices
        hasLegend // Adds legend for the chart
      />
    </View>
  );
};

export default DoughnutChart;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    width: "90%",
    backgroundColor: "#D9DFC6",
    display: "flex",
    borderRadius: "30px",
    marginInline: "auto",
    overflow: "hidden",
    gap: "2px",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 1,
    color: "#333",
    paddingTop: 6,
  },
});
