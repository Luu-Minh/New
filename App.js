import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Lesson9 from './src/page/Lesson9';

export default function App() {
  return (
    <View style={styles.container}>
      <Lesson9 users = {{name: "Minh"}}/>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
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
