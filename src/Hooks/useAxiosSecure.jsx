import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://food-station.onrender.com"
})
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;