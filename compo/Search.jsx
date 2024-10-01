import { StyleSheet, Text, View, FlatList, ActivityIndicator, TextInput, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { API_KEY } from "@env";

const Search = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getApi = async (text) => {
    const url = `/api/nutrition-data?query=${text}`;
    const options = {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY,
      },
    };

    setLoading(true);
    setError(null);

    try {
      let result = await fetch(url, options);
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      let resultData = await result.json();
      setData(resultData.items);
    } catch (error) {
      console.error('Error fetching data', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.overlay} />
      <View style={styles.topContainer}>
        <View style={styles.searchBoxContainer}>
          <TextInput
            style={styles.searchBox}
            placeholder="Search..."
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            value={query}
            onChangeText={(text) => setQuery(text)}
            onSubmitEditing={() => getApi(query)}
          />
        </View>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && <Text style={styles.errorText}>{error}</Text>}
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.name}: {item.calories} kcal</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  topContainer: {
    flex: 1,
    padding: 20,
  },
  searchBoxContainer: {
    marginBottom: 20,
  },
  searchBox: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
