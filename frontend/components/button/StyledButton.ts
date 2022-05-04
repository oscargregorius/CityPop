import { Button } from "react-native-paper";
import styled from "styled-components/native";

interface Props {
  width?: string;
  marginBottom?: string;
}

export const StyledButton = styled(Button)<Props>`
  width: ${(props) => (props.width ? props.width : "")};
  margin: 0 auto;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
`;
