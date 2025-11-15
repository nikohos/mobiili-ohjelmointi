import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

type SecondScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Second'>;

type Props = {
  navigation: SecondScreenNavigationProp;
};

export default function SecondScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Second Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Home')} style={styles.button}>
        Back to Home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  button: { marginTop: 20 },
});
