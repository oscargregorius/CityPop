import React, { useEffect } from "react";
import {
  StyledCitiesWrapper,
  StyledTextWrapper,
  StyledView,
} from "./StyledCountryListScreen";
import { useDispatch } from "react-redux";
import { setCountry } from "../../store/country/countrySlice";
import { RouteProp } from "@react-navigation/native";
import { Country } from "../../store/country/types";
import HeaderTitle from "../../components/headerTitle/HeaderTitle";
import Button from "../../components/button/Button";
import { City } from "../../store/city/types";
import { RootStackParamList } from "../../components/routes/Routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

interface Props {
  route: RouteProp<{ params: { country: Country } }, "params">;
}

type NavigationProps = StackNavigationProp<RootStackParamList>;

export default function CountryListScreen({ route }: Props) {
  const dispatch = useDispatch();
  const { country, cities } = route.params.country;
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    return () => {
      dispatch(setCountry(null));
    };
  });

  const handlePress = (city: City) => {
    navigation.navigate("CityList", { city: city });
  };

  return (
    <StyledView>
      <StyledTextWrapper>
        <HeaderTitle text={country} />
      </StyledTextWrapper>
      <StyledCitiesWrapper>
        {cities.map((city: City) => (
          <Button
            key={city.id}
            text={city.city + ""}
            width="95%"
            handlePress={() => handlePress(city)}
            marginBottom="3%"
          />
        ))}
      </StyledCitiesWrapper>
    </StyledView>
  );
}
