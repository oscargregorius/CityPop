import React from "react";
import { StyledTitle } from "./StyledHeaderTitle";

interface Props {
  text: string;
  size?: string;
}

export default function HeaderTitle({ text, size }: Props) {
  return <StyledTitle size={size ? size : ""}>{text}</StyledTitle>;
}
