import { INCREASE_COUNT, DECREASE_COUNT, GET_LATEST_NEEWS } from "../constants";

export const increaseCoint = () => ({
  type: INCREASE_COUNT,
});

export const decreaseCoint = () => ({
  type: DECREASE_COUNT,
});

export const getLatestNews = () => ({
  type: GET_LATEST_NEEWS,
});
