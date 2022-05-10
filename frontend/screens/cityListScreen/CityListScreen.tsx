import { Text } from "react-native";
import React, { useEffect } from "react";
import { StyledView } from "./StyledCityListScreen";
import { useDispatch } from "react-redux";
import { setCity } from "../../store/city/citySlice";
import { RouteProp } from "@react-navigation/native";
import { City } from "../../store/city/types";

interface Props {
  route: RouteProp<{ params: { city: City } }, "params">;
}

export default function CityListScreen({ route }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setCity(null));
    };
  }, []);

  return (
    <StyledView>
      <Text>CityList</Text>
    </StyledView>
  );
}
