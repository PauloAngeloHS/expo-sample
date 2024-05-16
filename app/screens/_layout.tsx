import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack>
      <Stack.Screen name="Camera" />
      <Stack.Screen name="Galeria" />
      <Stack.Screen name="Explain" />
    </Stack>
  );
}

