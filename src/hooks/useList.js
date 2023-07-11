import { useEffect, useState } from "react";
import {
  getAllCandidatesApiCall,
  getSortByDateApiCall,
  getSortByNameApiCall,
} from "../api/api";

export const useList = () => {
  const [candidates, setCandidates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState("ASC");
  const getList = async () => {
    setLoading(true);
    const resp = await getAllCandidatesApiCall();
    if (resp.status === 200) {
      setCandidates(resp?.data);
    }
    setLoading(false);
  };

  const sortByDate = async () => {
    setLoading(true);
    order === "ASC" ? setOrder("DESC") : setOrder("ASC");
    const resp = await getSortByDateApiCall(order === "ASC" ? "DESC" : "ASC");
    setCandidates(resp?.data);
    setLoading(false);
  };
  const sortByName = async () => {
    setLoading(true);
    order === "ASC" ? setOrder("DESC") : setOrder("ASC");
    const resp = await getSortByNameApiCall(order === "ASC" ? "DESC" : "ASC");
    setCandidates(resp?.data);
    setLoading(false);
  };

  useEffect(() => {
    getList();
  }, []);

  return {
    candidates,
    setCandidates,
    getList,
    showModal,
    setShowModal,
    loading,
    sortByDate,
    sortByName,
  };
};
