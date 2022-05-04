import React from "react";
import {
  StyledView,
  StyledWrapper,
  StyledTextWrapper,
} from "./StyledHomeScreen";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../components/routes/Routes";
import Button from "../../components/button/Button";
import HeaderTitle from "../../components/headerTitle/HeaderTitle";
import { Platform } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <StyledView>
      <StyledTextWrapper>
        <HeaderTitle text="CityPop" />
      </StyledTextWrapper>
      <StyledWrapper>
        <Button
          text="SEARCH BY CITY"
          width="95%"
          marginBottom="3%"
          handlePress={() => navigation.navigate("SearchCity")}
          color={Platform.OS === "ios" ? "#006ee6" : "black"}
        />
        <Button
          text="SEARCH BY COUNTRY"
          width="95%"
          handlePress={() => navigation.navigate("SearchCountry")}
          color={Platform.OS === "ios" ? "#006ee6" : "black"}
        />
      </StyledWrapper>
    </StyledView>
  );
}
