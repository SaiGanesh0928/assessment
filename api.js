import axios from "axios";
const API = "http://localhost:3000";

export const uploadFile = (fileData, fileType) =>
  axios.post(`${API}/upload`, { fileData, fileType });

export const getSummary = (text, length) =>
  axios.post(`${API}/summarize`, { text, length });
