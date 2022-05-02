import { Text } from "react-native";
import React from "react";
import { StyledView } from "./StyledHomeScreen";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../components/routes/Routes";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <StyledView>
      <Text>Home</Text>
    </StyledView>
  );
}
