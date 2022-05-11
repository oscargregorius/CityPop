import axios from "axios";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const getCity = async (req: Request, res: Response) => {
  const city = req.params.city;
  if (!city) {
    return res.status(400).send("No params");
  }
  const endpoint = process.env.CITY_URL + city;
  try {
    const { data } = await axios.get(endpoint);
    if (!data.geonames[0]) {
      return res.status(404).send("No city found");
    }
    const city = {
      id: data.geonames[0].geonameId,
      city: data.geonames[0].name,
      population: data.geonames[0].population,
    };
    if (!city) {
      return res.status(400).send("Something went wrong");
    }
    return res.status(200).send(city);
  } catch (error) {
    return res.status(400).send("Something went wrong");
  }
};
