import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>hi i'm Pleum !</Text>
      <StatusBar style="auto" />
    </View>
  );
}
