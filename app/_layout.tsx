import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <View
      style={{
        flex: 1,
        // padding: 12,

        // marginVertical: 28,
      }}
    >
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="history" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
