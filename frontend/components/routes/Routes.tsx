import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/homeScreen/HomeScreen";
import CityListScreen from "../../screens/cityListScreen/CityListScreen";
import CountryListScreen from "../../screens/countryListScreen/CountryListScreen";
import SearchCityScreen from "../../screens/searchCityScreen/SearchCityScreen";
import SearchCountryScreen from "../../screens/searchCountryScreen/SearchCountryScreen";
import { City } from "../../store/city/types";
import { Country } from "../../store/country/types";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  CityList: { city: City };
  CountryList: { country: Country };
  SearchCity: undefined;
  SearchCountry: undefined;
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CityList" component={CityListScreen} />
        <Stack.Screen name="CountryList" component={CountryListScreen} />
        <Stack.Screen name="SearchCity" component={SearchCityScreen} />
        <Stack.Screen name="SearchCountry" component={SearchCountryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
