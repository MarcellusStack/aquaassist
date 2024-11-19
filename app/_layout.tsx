import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { SelectProvider } from "@mobile-reality/react-native-select-pro";
import "@lib/i18n";
import "@styles/global.css";
import { Colors, Typography, Spacings, Text, Dash } from "react-native-ui-lib";
import { colors } from "@constants/colors";

// Laden der Assets
import { Assets } from "react-native-ui-lib";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

Assets.loadAssetsGroup("icons", {
  branding: require("../assets/images/branding.png"),
});

// Initialisierung des Themes basierend auf dem DRK Styleguide
Colors.loadColors({
  primary: colors.primary[600], // Main actions, buttons
  secondary: colors.secondary[950], // Icons, titles, subtitles
  tertiary: colors.tertiary[100], // Cards, graphic points
  textC: colors.text[700],
});

Colors.loadSchemes({
  light: {
    $backgroundPrimary: Colors.primary, // Hauptfarbe
    $backgroundPrimaryLight: Colors.getColorTint(Colors.primary, 70), // Heller Farbton
    $backgroundPrimaryHeavy: Colors.getColorTint(Colors.primary, 30), // Dunkler Farbton
    $backgroundSecondary: Colors.secondary, // Sekundärfarbe
    $backgroundSecondaryLight: Colors.getColorTint(Colors.secondary, 70), // Heller Farbton
    $backgroundSecondaryHeavy: Colors.getColorTint(Colors.secondary, 30), // Dunkler Farbton
    $backgroundTertiary: Colors.tertiary, // Tertiärfarbe
    $backgroundTertiaryLight: Colors.getColorTint(Colors.tertiary, 70), // Heller Farbton
    $backgroundTertiaryHeavy: Colors.getColorTint(Colors.tertiary, 30), // Dunkler Farbton
  },
  dark: {
    $backgroundPrimary: Colors.primary, // Hauptfarbe
    $backgroundPrimaryLight: Colors.getColorTint(Colors.primary, 30), // Heller Farbton
    $backgroundPrimaryHeavy: Colors.getColorTint(Colors.primary, 70), // Dunkler Farbton
    $backgroundSecondary: Colors.secondary, // Sekundärfarbe
    $backgroundSecondaryLight: Colors.getColorTint(Colors.secondary, 30), // Heller Farbton
    $backgroundSecondaryHeavy: Colors.getColorTint(Colors.secondary, 70), // Dunkler Farbton
    $backgroundTertiary: Colors.tertiary, // Tertiärfarbe
    $backgroundTertiaryLight: Colors.getColorTint(Colors.tertiary, 30), // Heller Farbton
    $backgroundTertiaryHeavy: Colors.getColorTint(Colors.tertiary, 70), // Dunkler Farbton
  },
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SelectProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </SelectProvider>
    </ThemeProvider>
  );
}
