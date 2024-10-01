import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import CircularProgressBar from '../compo/CircularProgressBar';

const Calories = () => {
  const [calories, setCalories] = useState(0);
  const [limit, setLimit] = useState(2000); // Default limit set to 2000
  const [addedCalories, setAddedCalories] = useState('');

  const handleAddedCalorieChange = (value) => {
    setAddedCalories(value);
  };

  const handleAddCalories = () => {
    const numericValue = parseInt(addedCalories, 10);
    if (!isNaN(numericValue)) {
      setCalories(prev => Math.min(prev + numericValue, limit));
      setAddedCalories('');
    } else {
      Alert.alert('Invalid input', 'Please enter a valid number');
    }
  };

  const handleLimitChange = (value) => {
    const numericValue = parseInt(value, 10); // parseint converts string to int and 10 for base 10 so that does not get converted random number
    if (!isNaN(numericValue)) {
      setLimit(numericValue);
    } else {
      Alert.alert('Invalid input', 'Please enter a valid number');
    }
  };

  return (
    <View style={styles.caloricontainer}>
      <CircularProgressBar fill={calories} limit={limit} />
      <TextInput
        style={styles.limitInput}
        placeholder="Set Calorie Limit" // For total calories
        keyboardType="numeric"
        onChangeText={handleLimitChange}
        value={String(limit)}
      />
      <TextInput
        style={styles.limitInput} // For adding calories
        placeholder="Add Calories"
        keyboardType="numeric"
        onChangeText={handleAddedCalorieChange}
        value={addedCalories}
      />
      <Button
        style={styles.buttonbox}
        title="Add Calories"
        onPress={handleAddCalories}
      />
    </View>
  );
};

export default Calories;

const styles = StyleSheet.create({
  caloricontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  limitInput: {
    width: '80%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonbox: {
    marginTop: 10,
    padding: 10,
  },
});
