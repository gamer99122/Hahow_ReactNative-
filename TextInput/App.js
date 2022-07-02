import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [textA, setTestA] = useState('');

  const checkPhone = (textA) => {
    setTestA(textA)
    if (textA == "1234567890") {
      console.log('正確!!!!')
    }
    else {
      console.log(textA)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>您所輸入的電話號碼:{textA}</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(textA) => checkPhone(textA)}
        placeholder='請輸入您的手機號碼'
        keyboardType='numeric'
        maxLength='10'
        value={textA}
      />

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
