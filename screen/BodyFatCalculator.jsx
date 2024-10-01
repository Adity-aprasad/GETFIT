// components/BodyFatCalculator.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const BodyFatCalculator = () => {
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [bodyFat, setBodyFat] = useState(null);

  const calculateBodyFat = () => {
    const weightNum = parseFloat(weight);
    const waistNum = parseFloat(waist);

    // Simple body fat calculation (not accurate, for demonstration purposes)
    const bodyFatPercentage = (waistNum / weightNum) * 100;
    setBodyFat(bodyFatPercentage.toFixed(2));
  };

  return (
    <SafeAreaView  style={styles.container}>
    <View>
      <Text style={styles.label}>Weight (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <Text style={styles.label}>Waist Circumference (cm):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={waist}
        onChangeText={setWaist}
      />   
      <TouchableOpacity onPress={calculateBodyFat}
      style={{
        padding:10,
       borderWidth:2,
       borderRadius:15,
       backgroundColor:'rgb(8, 29, 54)',
      

      }}>
        <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:15,}}>
          Calculate 
        </Text>
      </TouchableOpacity>
       {bodyFat !== null && (
        <Text style={styles.result}>Body Fat Percentage: {bodyFat}%</Text>
      )}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: 'rgb(253, 245, 230)',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    justifyContent:'center',
    alignContent:'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius:15,
  },
  result: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default BodyFatCalculator;
