import React, { useEffect } from "react";
import {
  StyledView,
  StyledTextWrapper,
  StyledInputWrapper,
} from "./StyledSearchCityScreen";
import SearchForm from "../../components/searchForm/SearchForm";
import HeaderTitle from "../../components/headerTitle/HeaderTitle";
import { useDispatch, useSelector } from "react-redux";
import { citySelector } from "../../store/city/citySlice";
import { getCity } from "../../store/city/actions";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../components/routes/Routes";

type Props = NativeStackScreenProps<RootStackParamList, "SearchCity">;

export default function SearchCityScreen({ navigation }: Props) {
  const dispatch = useDispatch();
  const { loading, city } = useSelector(citySelector);

  useEffect(() => {
    city && navigation.navigate("CityList", { city: city });
  }, [city]);

  const handlePress = (cityToSearchFor: string) => {
    dispatch(getCity(cityToSearchFor));
  };

  return (
    <StyledView>
      <StyledTextWrapper>
        <HeaderTitle text="SEARCH BY CITY" />
      </StyledTextWrapper>
      <StyledInputWrapper>
        <SearchForm
          label="Enter a city"
          width="95%"
          handlePress={handlePress}
          loading={loading}
        />
      </StyledInputWrapper>
    </StyledView>
  );
}
