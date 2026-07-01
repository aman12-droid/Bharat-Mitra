import API from "../api/api";

export const submitComplaint = async (formData) => {
  const res = await API.post("/complaints", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const getComplaints = async () => {
  const res = await API.get("/complaints");
  return res.data;
};

export const updateComplaintStatus = async (
  id,
  status
) => {

  const res = await API.put(
    `/complaints/${id}`,
    { status }
  );

  return res.data;

};