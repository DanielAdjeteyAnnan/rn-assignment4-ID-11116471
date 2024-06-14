 // components/statusBar.js
import React from 'react';
import { StatusBar } from 'expo-status-bar'; // Make sure to import from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native';

export default function StatusBarComponent() {
  return (
    <View style={styles.statBar}>
      <Text style={styles.fontColor}>9:14</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  statBar: {
    backgroundColor: '#fff',
    
  },
  fontColor: {
    top: 12,
    height:21,
  }
});
