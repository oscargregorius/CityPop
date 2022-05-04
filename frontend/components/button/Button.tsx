import React from "react";
import { StyledButton } from "./StyledButton";

interface Props {
  text: string;
  mode?: "text" | "outlined" | "contained";
  color?: string;
  width?: string;
  marginBottom?: string;
  handlePress: Function;
}

export default function Button({
  text,
  mode,
  color,
  width,
  marginBottom,
  handlePress,
}: Props) {
  return (
    <StyledButton
      width={width}
      marginBottom={marginBottom}
      color={color ? color : ""}
      mode={mode ? mode : "outlined"}
      onPress={() => handlePress()}
    >
      {text}
    </StyledButton>
  );
}
