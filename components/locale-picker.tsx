import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { Select } from "@mobile-reality/react-native-select-pro";

const flags = [
  { value: "en", label: "English" },
  { value: "de", label: "German" },
];

export const LocalePicker = () => {
  const { i18n } = useTranslation();
  const currentLanguage = flags.find((flag) => flag.value === i18n.language);

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem("language");
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, [i18n]);

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <Select
      options={flags}
      defaultOption={currentLanguage}
      onSelect={(option) => {
        changeLanguage(option.value);
      }}
    />
  );
};
