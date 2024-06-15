 // App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StatusBarComponent from './components/statusBar'; 

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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontColor: {
    top: 100,
  }
});
