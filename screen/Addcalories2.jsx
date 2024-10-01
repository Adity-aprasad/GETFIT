import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Alert } from "react-native";

import { Snackscalories } from "../Snackscalories";

export const AddcaloriesScreen = () => {
  const [newCalories, setNewCalories] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const { sum2, setSum } = useContext(Snackscalories);


  

  const handleAddCalories = () => {
    if (isNaN(newCalories) || newCalories === '') {
      Alert.alert("Error", "Please enter a valid number.");
      return;
    }

    const addedCalories = parseFloat(newCalories);
    const updatedSum = (sum2 || 0) + addedCalories;
    setSum(updatedSum);
    setNewCalories('');
    setFeedbackMessage(`Added ${addedCalories} calories.`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add Calories</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter calories"
        keyboardType="numeric"
        value={newCalories}
        onChangeText={setNewCalories}
      />
      <Button title="Add Calories" onPress={handleAddCalories} color="rgb(8, 29, 54)" />
      {feedbackMessage ? (
        <Text style={styles.feedback}>{feedbackMessage}</Text>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgb(253, 245, 230)',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  feedback: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
});

export default AddcaloriesScreen;
