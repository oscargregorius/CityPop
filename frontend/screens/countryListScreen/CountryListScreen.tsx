import { Text } from "react-native";
import React, { useEffect } from "react";
import { StyledView } from "./StyledCountryListScreen";
import { useDispatch } from "react-redux";
import { setCountry } from "../../store/country/countrySlice";
import { RouteProp } from "@react-navigation/native";
import { Country } from "../../store/country/types";

interface Props {
  route: RouteProp<{ params: { country: Country } }, "params">;
}

export default function CountryListScreen({ route }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setCountry(null));
    };
  });
  return (
    <StyledView>
      <Text>CountryList</Text>
    </StyledView>
  );
}
