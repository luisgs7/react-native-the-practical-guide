import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
   <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.TextInput} placeholder='Your course goal!'/>
      <Button title='Add Goal' />
    </View>
    <View style={styles.goalsContainer}>
      <Text>List of goals...</Text>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight:8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});