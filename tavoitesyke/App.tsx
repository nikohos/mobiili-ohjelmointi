import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [age, setAge] = useState<string>('');
  const [lower, setLower] = useState<number>(0);
  const [upper, setUpper] = useState<number>(0);

  const calculate = () => {
    const ageNum = Number(age);

    if (isNaN(ageNum) || age.trim() === '' || ageNum <= 0) {
      setLower(0);
      setUpper(0);
      return;
    }

    const lowerLimit = (220 - ageNum) * 0.65;
    const upperLimit = (220 - ageNum) * 0.85;

    setLower(lowerLimit);
    setUpper(upperLimit);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limit Calculator</Text>

      <Text>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
        placeholder="Age"
      />

      <Button title="Calculate" onPress={calculate} />

      <Text style={styles.result}>
        Lower limit: {lower.toFixed(2)} bpm
      </Text>
      <Text style={styles.result}>
        Upper limit: {upper.toFixed(2)} bpm
      </Text>

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
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: 150,
    textAlign: 'center',
  },
  result: {
    marginTop: 10,
    fontSize: 16,
  },
});
