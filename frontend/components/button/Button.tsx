import React from "react";
import { StyledButton } from "./StyledButton";
import { Platform } from "react-native";

interface Props {
  text: string;
  mode?: "text" | "outlined" | "contained";
  width?: string;
  marginBottom?: string;
  handlePress: Function;
}

export default function Button({
  text,
  mode,
  width,
  marginBottom,
  handlePress,
}: Props) {
  return (
    <StyledButton
      width={width}
      marginBottom={marginBottom}
      color={Platform.OS === "ios" ? "#006ee6" : "black"}
      mode={mode ? mode : "outlined"}
      onPress={() => handlePress()}
    >
      {text}
    </StyledButton>
  );
}
