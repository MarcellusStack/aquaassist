import React from "react";
import { remapProps } from "nativewind";
import { Dash as DashComponent } from "react-native-ui-lib";
export const Dash = ({ style, containerStyle, ...props }) => {
  return (
    <DashComponent style={style} containerStyle={containerStyle} {...props} />
  );
};

// Call this once at the entry point of your app

