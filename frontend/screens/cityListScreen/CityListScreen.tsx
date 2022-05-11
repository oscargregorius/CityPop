import React, { useEffect } from "react";
import {
  StyledView,
  StyledTextWrapper,
  StyledText,
  StyledPopulationWrapper,
} from "./StyledCityListScreen";
import { useDispatch } from "react-redux";
import { setCity } from "../../store/city/citySlice";
import { RouteProp } from "@react-navigation/native";
import { City } from "../../store/city/types";
import HeaderTitle from "../../components/headerTitle/HeaderTitle";

interface Props {
  route: RouteProp<{ params: { city: City } }, "params">;
}

export default function CityListScreen({ route }: Props) {
  const dispatch = useDispatch();
  const { city, population } = route.params.city;

  useEffect(() => {
    return () => {
      dispatch(setCity(null));
    };
  }, []);

  return (
    <StyledView>
      <StyledTextWrapper>
        <HeaderTitle text={city.toUpperCase()} />
      </StyledTextWrapper>
      <StyledPopulationWrapper>
        <HeaderTitle text="POPULATION" size="12px" />
        <StyledText>{population}</StyledText>
      </StyledPopulationWrapper>
    </StyledView>
  );
}
