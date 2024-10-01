import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

const Try = () => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.apiText}>List with API CALL</Text>
      {data.length ? data.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.id}>Id: {item.id}</Text>
          <Text style={styles.title}>Title: {item.title}</Text>
          <Text style={styles.body}>Body: {item.body}</Text>
        </View>
      )) : null}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  scrollViewContent: {
    backgroundColor:"black",
    padding: 10,
  },
  apiText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
  id: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  body: {
    fontSize: 14,
  },
});

export default Try;
