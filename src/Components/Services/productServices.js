import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    headers: {
        "Content-Type": "application/json",
    },
    validateStatus: (status) => {
        return status >= 200 && status < 300;
    },
});

export const getProducts = async () => {
    return axiosInstance.get("/");
};