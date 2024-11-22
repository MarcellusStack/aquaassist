import React from "react";
import { useTranslation } from "react-i18next";
import { StateScreen, View } from "react-native-ui-lib";
import { Text } from "react-native";
import { Link } from "expo-router";
import { Todos } from "@components/todos";

export default function TodosScreen() {
  return (
    <View className="flex flex-col justify-center items-center gap-4 w-full">
      <Text className="text-textColor-700 font-bold text-4xl">Todos</Text>

      <Todos />
      <View className="flex flex-row gap-2 justify-between w-full">
        <Link href="/" className="text-primary-600 text-xl">
          Home
        </Link>
      </View>
    </View>
  );
}
