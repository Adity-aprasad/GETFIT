import { View, Text, Image, StyleSheet, Dimensions,SafeAreaView } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('screen');

const Slideitem = ({ item }) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Image source={item.img} resizeMode='contain' style={styles.imageStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
    </SafeAreaView>
  );
}

export default Slideitem;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
   
  },
  imageStyle: {
    width: '100%',
    height: '60%',
  },
  textContainer: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
