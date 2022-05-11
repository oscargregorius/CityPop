import axios from "axios";
import iso from "iso-3166-1";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

type City = {
  toponymName: string;
  population: number;
  geonameId: number;
};

export const getCountry = async (req: Request, res: Response) => {
  const country = req.params.country;
  if (!country) {
    return res.status(400).send("No params");
  }
  try {
    const { alpha2 } = iso.whereCountry(country);
    const endpoint = process.env.COUNTRY_URL + alpha2;
    const { data } = await axios.get(endpoint);
    if (!data.geonames[0]) {
      return res.status(404).send("No country found");
    }
    const cities = data.geonames.map((city: City) => {
      return {
        id: city.geonameId,
        city: city.toponymName,
        population: city.population,
      };
    });
    if (!cities) {
      return res.status(400).send("Something went wrong");
    }
    const countryWithCities = {
      country: country.toUpperCase(),
      cities,
    };
    return res.status(200).send(countryWithCities);
  } catch (error) {
    return res.status(400).send("No country found");
  }
};
