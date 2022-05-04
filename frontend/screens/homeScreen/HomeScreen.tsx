import { Text } from "react-native";
import React from "react";
import { StyledView, StyledWrapper } from "./StyledHomeScreen";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../components/routes/Routes";
import Button from "../../components/button/Button";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <StyledView>
      <StyledWrapper>
        <Button
          text="test"
          width="95%"
          marginBottom="3%"
          handlePress={() => {}}
        />
        <Button text="test" width="95%" handlePress={() => {}} />
      </StyledWrapper>
    </StyledView>
  );
}
