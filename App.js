import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SignIn} from './Component/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
      <SignIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F044C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
