import API from "../api/api";

export const getSchemes = async () => {

    const res = await API.get("/schemes");

    return res.data;

}