import styled from "styled-components/native";
import { Platform } from "react-native";

export const StyledView = styled.View`
  height: 100%;
  display: flex;
`;

export const StyledTextWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 0.5;
`;

export const StyledPopulationWrapper = styled.View`
  width: 95%;
  margin: 0 auto;
  align-items: center;
  border-width: 1px;
  border-color: ${Platform.OS === "ios" ? "#006ee6" : "black"};
  padding: 10px;
`;

export const StyledText = styled.Text`
  font-size: 34px;
  letter-spacing: 1px;
  padding: 10px;
`;
