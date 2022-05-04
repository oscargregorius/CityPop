import styled from "styled-components/native";
import { Text } from "react-native";

interface Props {
  size?: string;
}

export const StyledTitle = styled(Text)<Props>`
  font-size: ${(props) => (props.size ? props.size : "30px")};
  font-weight: bold;
`;
