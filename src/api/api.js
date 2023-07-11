import { api } from "./axios";

export const getCountriesApiCall = async () => {
  try {
    const { data } = await api.get("/countries");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const saveCandidateApiCall = async (data) => {
  try {
    const resp = await api.post("/candidate/", data);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCandidatesApiCall = async () => {
  try {
    const resp = await api.get("/candidate/");
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const getSortByDateApiCall = async (order) => {
  try {
    const resp = await api.get(`/candidate/sortByDate/${order}`);
    return resp;
  } catch (error) {
    console.log(error);
  }
};
export const getSortByNameApiCall = async (order) => {
  try {
    const resp = await api.get(`/candidate/sortByName/${order}`);
    return resp;
  } catch (error) {
    console.log(error);
  }
};
