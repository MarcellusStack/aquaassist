import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { StyleProp } from "react-native";
import {
  View,
  Button,
  TextField as TextFieldComponent,
  TextFieldProps as TextFieldComponentProps,
} from "react-native-ui-lib";
import { remapProps } from "nativewind";
import { ViewStyle, TextStyle } from "react-native";
import { twMerge } from "tailwind-merge";

type TextFieldProps = TextFieldComponentProps & {
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  fieldStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  className?: string;
  containerClassName?: string;
  fieldClassName?: string;
  labelClassName?: string;
  extraClassName?: string;
  extraContainerClassName?: string;
  extraFieldClassName?: string;
  extraLabelClassName?: string;
};

const defaultTextFieldProps = {
  style: undefined,
  containerStyle: undefined,
  fieldStyle: undefined,
  labelStyle: undefined,
};

function TextFieldTemplate({
  style = defaultTextFieldProps.style,
  containerStyle = defaultTextFieldProps.containerStyle,
  fieldStyle = defaultTextFieldProps.fieldStyle,
  labelStyle = defaultTextFieldProps.labelStyle,
  ...props
}: TextFieldProps) {
  return (
    <TextFieldComponent
      style={style}
      containerStyle={containerStyle}
      fieldStyle={fieldStyle}
      labelStyle={labelStyle}
      {...props}
    />
  );
}

remapProps(TextFieldTemplate, {
  className: "style",
  containerClassName: "containerStyle",
  fieldClassName: "fieldStyle",
  labelClassName: "labelStyle",
});

export const TextField = (props: TextFieldProps) => {
  return (
    <TextFieldTemplate
      containerClassName={twMerge(
        "-mb-4 group",
        `${props.extraContainerClassName}`
      )}
      className={twMerge(`text-lg`, `${props.extraClassName}`)}
      fieldClassName={twMerge(
        "p-2 border-2 border-gray-300 rounded-md group-focus:border-primary-600",
        `${props.extraFieldClassName}`
      )}
      labelClassName={twMerge("text-lg", `${props.extraLabelClassName}`)}
      {...props}
    />
  );
};
