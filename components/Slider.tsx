"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import img from "../app/assets/imgs/bg.jpg";

import { Mousewheel, Keyboard } from 'swiper/modules';



const products = [
  {
    category: "Convoyeurs",
    title: "Convoyeurs À Chaîne CC",
    desc:"Transport horizontal/modulaire de grains et granulés avec plus de 50 ans d’expertise.",
    image: "../app/assets/imgs/bg.jpg",
  },
  
  {
    category: "Convoyeurs",
    title: "Convoyeurs À Bande RBC",
    desc:"Transport longue distance avec faible consommation et prévention de contamination croisée.",
    image: "../app/assets/imgs/bg.jpg",
  },
  
  {
    category: "Convoyeurs",
    title: "Élévateur À Godets BBE",
    desc:"Transport vertical sécurisé et hermétique, sans perte et facile à entretenir.",
    image: "../app/assets/imgs/bg.jpg",
  },
  {
    category: "Convoyeurs",
    title: "Élévateur À Godets BBE",
    desc:"Transport vertical sécurisé et hermétique, sans perte et facile à entretenir.",
    image: "../app/assets/imgs/bg.jpg",
  },
  {
    category: "Convoyeurs",
    title: "Élévateur À Godets BBE",
    desc:"Transport vertical sécurisé et hermétique, sans perte et facile à entretenir.",
    image: "../app/assets/imgs/bg.jpg",
  },
  {
    category: "Convoyeurs",
    title: "Élévateur À Godets BBE",
    desc:"Transport vertical sécurisé et hermétique, sans perte et facile à entretenir.",
    image: "../app/assets/imgs/bg.jpg",
  },
  {
    category: "Convoyeurs",
    title: "Élévateur À Godets BBE",
    desc:"Transport vertical sécurisé et hermétique, sans perte et facile à entretenir.",
    image: "../app/assets/imgs/bg.jpg",
  },
  
  
];

export default function Slider() {
  return (
    <div className="container p-10 w-full ">
      <div className="flex  items-center justify-center">
      </div>

      <Swiper
        cssMode={true}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}        
        
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}

        className="mt-6 w-full h-[428px]"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="">
            <div className="shadow-lg rounded-lg overflow-hidden bg-gray- h-[360px]">
              <Image
                src={img}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-sm text-blue-500 font-semibold">
                  {product.category}
                </p>
                <h3 className="text-lg font-medium mt-1">{product.title}</h3>
                <p className="text-sm text-gray-500 font-light p-2">{product.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
