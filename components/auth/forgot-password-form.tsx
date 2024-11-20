import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { StyleProp } from "react-native";
import { View, Button } from "react-native-ui-lib";
import { TextField } from "../form/text-field";

const schema = z.object({
  email: z.string().email(),
});

export const ForgotPasswordForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => console.log(data);

  return (
    <View className="flex flex-col gap-4 w-full">
      <Controller
        control={control}
        name="email"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextField
            label="E-Mail"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            validate={error ? "required" : undefined}
            validationMessage={error ? error.message : undefined}
            enableErrors
            validateOnChange
          />
        )}
      />
      <Button label="Send" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
