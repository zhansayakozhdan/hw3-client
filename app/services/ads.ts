import axios from "axios";
import { adsApiAxiosInstance } from "../apiClient";
import { IAd } from "../types/types";


export const getAllAds = async (): Promise<IAd[]> => {
    const res = await adsApiAxiosInstance.get("/ads");
    return res.data;
};


export const createProduct = async (productData: {
    title: string;
    preview: string;
    price: number;
    city: string;
    address: string;
    imageUrl?: string;
}): Promise<IAd | undefined> => {
    try {
        const response = await adsApiAxiosInstance.post<IAd>(`/ads`, productData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.message, 'error');
        } else {
            console.log(error);
        }
    }
}




