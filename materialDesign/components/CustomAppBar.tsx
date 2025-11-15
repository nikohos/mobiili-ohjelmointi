import { Appbar } from 'react-native-paper';

export default function AppBar({ navigation, back }: any) {
  return (
    <Appbar.Header>
      {back ? (
        // Jos back = true => näytetään vasen nuoli takaisin
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        // Jos back = false => ollaan HomeScreenillä, näytä oikea nuoli
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} />
      )}

      <Appbar.Content title="My App" />
    </Appbar.Header>
  );
}
