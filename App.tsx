import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import Form from './assets/components/Form';
import Main from './assets/components/Main';
import Title from './assets/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Main />
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
