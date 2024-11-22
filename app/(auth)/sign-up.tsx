import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native-ui-lib";

import { Text } from "react-native";
import { Link } from "expo-router";
import { AuthForm } from "@components/auth/auth-form";

export default function SignUpScreen() {
  const { t } = useTranslation();

  return (
    <View className="flex flex-col justify-center items-center gap-4 w-full">
      <Text className="text-textColor-700 font-bold text-4xl">Sign Up</Text>
      <Text className="text-gray-500 text-xl">
        Erstellen Sie Ihr Konto und beginnen Sie mit der Verwaltung Ihrer Türme
        und Rettungsschwimmer!
      </Text>
      <AuthForm />
      <View className="flex flex-row gap-2 justify-between w-full">
        <Link href="/sign-in" className="text-primary-600 text-xl">
          Sign In
        </Link>
        <Link href="/forgot-password" className="text-gray-400 text-xl">
          Forgot Password?
        </Link>
      </View>
    </View>
  );
}
