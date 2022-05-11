import styled from "styled-components/native";
import { TextInput, IconButton } from "react-native-paper";
import { Platform } from "react-native";

interface Props {
  width?: string;
}

export const StyledView = styled.View`
  height: 100%;
`;

export const StyledInput = styled(TextInput)<Props>`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: 0 auto;
`;

export const StyledIconButton = styled(IconButton)`
  margin: 5% auto;
  border: ${Platform.OS === "ios" ? "1px solid #006ee6" : "1px solid black"};
`;
