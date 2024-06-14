 // App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StatusBarComponent from './components/statusBar'; // Make sure to adjust the import path if necessary

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontColor}>Open up App.js to start working on your app!</Text>
      <StatusBarComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333399',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontColor: {
    color: 'white',
    top: 100,
  }
});
