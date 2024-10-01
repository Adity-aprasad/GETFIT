import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slides from '../compo/Slides';

const Start1 = () => {
  return (
    <SafeAreaView style={styles.topcontainer}>
      <Slides />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topcontainer: {
    flex: 1,
    backgroundColor: 'rgb(253, 245, 230)',
  },
});

export default Start1;
