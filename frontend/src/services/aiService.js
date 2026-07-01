import API from "../api/api";

export const sendMessage = async (message) => {
  const response = await API.post("/ai/chat", {
    message,
  });

  return response.data;
};