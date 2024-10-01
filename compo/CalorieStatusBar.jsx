import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Svg, Circle } from "react-native-svg";

const CircularProgressBar = ({ totalCalories, currentCalories, radius = 70 }) => {
  const strokeWidth = 10;
  const size = radius * 2;
  const circumference = 2 * Math.PI * (radius - strokeWidth / 2); // Adjusting for stroke width

  // Convert values to integers
  const roundedTotalCalories = parseInt(totalCalories, 10);
  const roundedCurrentCalories = parseInt(currentCalories, 10);

  // Calculate progress
  const progress =
    roundedCurrentCalories > roundedTotalCalories
      ? 1
      : roundedCurrentCalories / roundedTotalCalories;

  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          stroke="#E0E0E0"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth / 2} // Adjusting for stroke width
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#4CBB17"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth / 2} // Adjusting for stroke width
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.caloriesText}>{roundedCurrentCalories} cal</Text>
        <Text style={styles.totalCaloriesText}>/ {roundedTotalCalories} cal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 80,
  },
  textContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  caloriesText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003366",
  },
  totalCaloriesText: {
    fontSize: 14,
    color: "#003366",
  },
});

export default CircularProgressBar;
