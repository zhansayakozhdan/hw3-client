import axios from 'axios';
import { toast } from "react-toastify";

const ADS_API_URL = 'http://localhost:5000/api';

//чтобы не нужно было прописывать один и тот же url
export const adsApiAxiosInstance = axios.create({
    baseURL: ADS_API_URL,
})

