"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { io } from "socket.io-client";
import AdsList from "./components/AdsList";
import { IAd } from "./types/types";

export default function Home() {
  //const notify = () => toast("Wow so easy!");
  const [ads, setAds] = useState<IAd[]>([]);
  const socket = io('http://localhost:5000');

  useEffect(() => {
    socket.on('newAd', (ad: IAd) => {
      setAds((prev) => [...prev, ad]);
      toast(`New publication: ${ad.title}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [socket])
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <ToastContainer/>
      
      <AdsList/>

    </main>
  );
}
