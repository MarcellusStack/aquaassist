import { View } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { Branding } from "@components/branding";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className=" items-center justify-center flex-1 gap-4 px-4 py-4">
        <Branding />
        <Slot />
      </View>
    </SafeAreaView>
  );
}
