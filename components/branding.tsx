import { colors } from "@constants/colors";
import React from "react";
import { View, Text, Image } from "react-native-ui-lib";

export const Branding = () => {
  return (
    <View className="flex flex-row items-center justify-center px-4 gap-4">
      <Image assetName="branding" width={40} height={40} />
      <Text className="text-5xl font-bold" color={colors.primary[600]}>
        Turmbuch
      </Text>
    </View>
  );
};
