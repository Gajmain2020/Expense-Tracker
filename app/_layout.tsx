import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {/* StatusBar with black background */}
        <StatusBar style="light" backgroundColor="#000" />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false, // No header for the tabs group
            }}
          />
        </Stack>
        <StatusBar />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background to remove the white line
  },
});
