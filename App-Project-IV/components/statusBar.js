import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';


export default function StatusBarComponent() {
  return (
    <View style={styles.statBar}>
      <Text style={styles.fontColor}>9:14</Text>
      <View style={styles.icons}>
         <FontAwesome name="signal" size={20} style={[styles.icon, { marginRight:5 }]} />
          <Ionicons name="wifi" size={20} style={[styles.icon, { marginRight: 5 }]}/>
           <MaterialIcons name="battery-full" size={20} style={[styles.icon, { marginRight:5 }]}/>
      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  statBar: {
    position: 'absolute',
    width: '100%',
    top:30,
    left:10,
    height:44,
  },
  fontColor: {
    fontSize: 20,
    left: 10,
    top: 12,
    height:21,
  },
   icons: {
    flexDirection: 'row',
    left:320,
    height:21,
    bottom:8,
    color:'black',
  }
});
