import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { CaloriesContext } from '../CaloriesContext';

const BmrCalculatorScreen = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmr, setBmr] = useState(null);
  const { calories, setCalories } = useContext(CaloriesContext);

  const calculateBmr = () => {
    if (!age || !weight || !height || !gender) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
      Alert.alert("Error", "Age, weight, and height must be numeric.");
      return;
    }

    let bmrValue = 0;
    if (gender === 'male') {
      bmrValue = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
      bmrValue = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
      Alert.alert("Error", "Gender must be either 'male' or 'female'.");
      return;
    }

    setBmr(bmrValue);
  };

  const calculateCalories = (activityLevel) => {
    if (bmr) {
      let caloriesValue = 0;
      switch (activityLevel) {
        case 'sedentary':
          caloriesValue = bmr * 1.2;
          break;
        case 'light':
          caloriesValue = bmr * 1.375;
          break;
        case 'moderate':
          caloriesValue = bmr * 1.55;
          break;
        case 'active':
          caloriesValue = bmr * 1.725;
          break;
        case 'veryActive':
          caloriesValue = bmr * 1.9;
          break;
        default:
          caloriesValue = bmr * 1.2;
      }
      setCalories(caloriesValue);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>BMR and Calorie Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
        <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'male' && styles.selectedGender]}
          onPress={() => setGender('male')}
        >
          <Text style={styles.genderButtonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'female' && styles.selectedGender]}
          onPress={() => setGender('female')}
        >
          <Text style={styles.genderButtonText}>Female</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={calculateBmr}
      style={{
        padding:10,
       borderWidth:2,
       borderRadius:15,
       backgroundColor:'rgb(8, 29, 54)',
      

      }}>
         <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:16,}}>
          Calculate BMR
        </Text>
      </TouchableOpacity>
      {bmr && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>BMR: {bmr.toFixed(2)} kcal/day</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => calculateCalories('sedentary')}>
              <Text style={{color:'white',}}>Sedentary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => calculateCalories('light')}>
              <Text style={{color:'white',}}>Lightly Active</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => calculateCalories('moderate')}>
              <Text style={{color:'white',}}>Moderately Active</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => calculateCalories('active')}>
              <Text style={{color:'white',}}>Very Active</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => calculateCalories('veryActive')}>
              <Text style={{color:'white',}}>Super Active</Text>
            </TouchableOpacity>
          </View>
          {calories && (
            <Text style={styles.result}>Calories Needed: {calories.toFixed(2)} kcal/day</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default BmrCalculatorScreen;

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
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'rgb(8, 29, 54)',
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    marginHorizontal: 5,
    borderRadius:15,
  },
  selectedGender: {
    backgroundColor: 'rgb(8, 29, 54)',
  },
  genderButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
