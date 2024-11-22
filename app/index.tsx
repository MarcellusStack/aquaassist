import React, { useState, useEffect } from "react";
import {
  Colors,
  Typography,
  Spacings,
  NumberInput,
  Badge,
  Dash,
  Text,
  Image,
} from "react-native-ui-lib";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Button } from "react-native-ui-lib";
import { features } from "@constants/features";
import Svg, { Path } from "react-native-svg";
import { colors } from "@/constants/colors";
import { Link, useRouter } from "expo-router";
import { Branding } from "@components/branding";

export default function HomeScreen() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 justify-between gap-4">
        <View />
        <Branding />
        <View className="flex flex-col  items-center  px-4">
          <Text
            color={colors.text[700]}
            className=" text-3xl
          "
          >
            Die All-in-one App für
          </Text>
          <Text color={colors.text[700]} className=" text-3xl">
            Rettungsschwimmer/innen
          </Text>
          <Text color={colors.text[700]} className=" text-3xl">
            zur effizienten Verwaltung
          </Text>
          <Text color={colors.text[700]} className=" text-3xl">
            von
          </Text>

          <Text
            style={{ backgroundColor: colors.primary[600] }}
            color="white"
            className=" text-3xl p-1 rounded-md -rotate-6 mt-6"
          >
            {features[0]}
          </Text>
        </View>

        <View className="flex bg-tertiary-100 px-4 py-4 gap-4 w-full rounded-tl-4xl rounded-tr-4xl">
          <Button
            label="Anmelden"
            backgroundColor={colors.primary[600]}
            onPress={() => router.push("/sign-in")}
          />

          <Button
            backgroundColor={colors.primary[300]}
            label="Mit Google fortsetzen"
            onPress={() => router.push("/todos")}
            iconSource={() => (
              <Svg
                style={{ marginRight: 6 }}
                width={28}
                height={28}
                preserveAspectRatio="xMidYMid"
                viewBox="-3 0 262 262"
              >
                <Path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                />
                <Path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                />
                <Path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                />
                <Path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                />
              </Svg>
            )}
          ></Button>
          <Dash
            thickness={4}
            style={{ backgroundColor: "#b4b4b4" }}
            containerStyle={{ width: "100%" }}
          />
          <Button
            label="Registrieren"
            outlineColor={colors.primary[600]}
            outline
            outlineWidth={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
