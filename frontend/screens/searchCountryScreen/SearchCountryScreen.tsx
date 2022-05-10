import React, { useEffect } from "react";
import {
  StyledView,
  StyledTextWrapper,
  StyledInputWrapper,
} from "./StyledSearchCountryScreen";
import SearchForm from "../../components/searchForm/SearchForm";
import HeaderTitle from "../../components/headerTitle/HeaderTitle";
import { useSelector, useDispatch } from "react-redux";
import { countrySelector } from "../../store/country/countrySlice";
import { getCountry } from "../../store/country/actions";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../components/routes/Routes";

type Props = NativeStackScreenProps<RootStackParamList, "SearchCountry">;

export default function SearchCountryScreen({ navigation }: Props) {
  const dispatch = useDispatch();
  const { loading, country } = useSelector(countrySelector);

  useEffect(() => {
    country && navigation.navigate("CountryList", { country: country });
  }, [country]);

  const handlePress = (countryToSearchFor: string) => {
    dispatch(getCountry(countryToSearchFor));
  };

  return (
    <StyledView>
      <StyledTextWrapper>
        <HeaderTitle text="SEARCH BY COUNTRY" />
      </StyledTextWrapper>
      <StyledInputWrapper>
        <SearchForm
          loading={loading}
          label="Enter a country"
          width="95%"
          handlePress={handlePress}
        />
      </StyledInputWrapper>
    </StyledView>
  );
}
