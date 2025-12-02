import { StyleSheet, Text, TextInput, View, Button} from 'react-native';


export default function Form() {
  return (
<View>
    <View>
      <Text> Altura</Text>
      <TextInput placeholder='ex: 1.75'
      keyboardType='numeric'
      ></TextInput>
      <Text>Peso</Text>
      <TextInput placeholder='ex: 60' 
      keyboardType='numeric'>
      </TextInput>

    <Button title='Calcular IMC' />

    </View>
</View>
  );
}