import express from "express";
import { getCountry } from "../controllers/countryController";
import { getCity } from "../controllers/cityController";

const router = express.Router();

router.get("/rest/country/:country", getCountry);
router.get("/rest/city/:city", getCity);

export default router;
