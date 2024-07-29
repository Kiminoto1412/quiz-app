import api from "../api";

export const fetchQuestions =  () => {
  return api.get(`/todos`);
  };
  