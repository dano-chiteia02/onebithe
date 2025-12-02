import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import Form from './assets/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
       
      </View>
      

      <Text>Its de first time whrinting in agora colou  react native ap</Text>
       <Form />
      <TextInput placeholder='sera que assim' />
      <TextInput placeholder='sera que assim' keyboardType='numeric' />
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
