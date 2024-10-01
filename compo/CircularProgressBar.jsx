import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const CircularProgressBar = ({ fill, limit }) => {
  const progress = (fill / limit) * 100;

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={progress}
        tintColor="#FFA010"
        backgroundColor="#3d5875"
      >
        {() => (
          <View style={styles.innerView}>
            <Text style={styles.fillText}>
              {`${Math.min(fill, limit)} / ${limit}`}
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  fillText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CircularProgressBar;
