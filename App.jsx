import axios from 'axios';
import react from 'react';
import styles from './ApiStyles';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const baseUrl = 'http://a-phz2-cidi-045:3000';

  // Passing configuration object to axios
  axios({
    method: 'get',
    url: `${baseUrl}/API/eventos`,
  }).then((response) => {
    console.log(response.data);
  });
  
  // Invoking the get method to perform a GET request
  axios.get(`${baseUrl}/API/eventos`).then((response) => {
    console.log(response.data);
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
