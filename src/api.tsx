import axios from "axios";
import { Campaign } from "./interfaces/Campaign";
import { Card } from "./interfaces/Card";
import { Category } from "./interfaces/Category";
import { Country } from "./interfaces/Country";
import { Favorite } from "./interfaces/Favorite";
import { Image } from "./interfaces/Image";

export const getImages = (): Promise<Image[]> => {
  return axios
    .get("/images")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
};

export const getCampaigns = (): Promise<Campaign[]> => {
  return axios
    .get("/campaigns")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
};

export const getCards = (): Promise<Card[]> => {
  return axios
    .get("/cards")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
};

export const getFavorites = (): Promise<Favorite[]> => {
  return axios
    .get("/favorites")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
};

export const getCategories = (): Promise<Category[]> => {
  return axios
    .get("/categories")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
};

export const getCountries = (): Promise<Country[]> => {
  return axios
    .get("/countries")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
};
