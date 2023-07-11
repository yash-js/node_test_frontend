import { useEffect, useState } from "react";
import { getCountriesApiCall, saveCandidateApiCall } from "../api/api";
import { useList } from "./useList";

export function useForm(setShowModal) {
  const { getList } = useList();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showList, setShowList] = useState(false);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [file, setFile] = useState(null);
  const [suggestions, setSuggestions] = useState(countries);

  const [disabled, setDisabled] = useState();

  const getCountries = async () => {
    setLoading(true);
    if (countries.length) return setLoading(false);
    const data = await getCountriesApiCall();
    setCountries(data);
    setLoading(false);
  };

  const getSuggestions = (e) => {
    setCountry(e.target.value);
    const data = suggestions.filter((suggestion) =>
      suggestion?.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSuggestions(data);
  };

  const onBlur = () => {
    if (country && !suggestions.length) {
      setCountry("");
    }
    setShowList(false);
    setSuggestions(countries);
  };

  const saveCandidate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("dateOfBirth", dob);
    formData.append("country", country);
    formData.append("resume", file);
    const resp = await saveCandidateApiCall(formData);
    if (resp.status === 200) {
      await getList();
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (!country || !name || !dob || !file) setDisabled(true);
    else setDisabled(false);
  }, [country, name, dob, file]);

  useEffect(() => {
    getCountries();
  }, []);

  return {
    countries,
    getCountries,
    loading,
    showList,
    setShowList,
    name,
    setName,
    dob,
    setDob,
    country,
    setCountry,
    file,
    setFile,
    suggestions,
    setSuggestions,
    getSuggestions,
    onBlur,
    disabled,
    saveCandidate,
  };
}
