import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">About me </h1>
      <p className="text-center">
        Iam Nabila Farahana, Im from Malang, I have skill on design, I have some
        portolio in this skill.
      </p>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4 ">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2"></div>
        <div className="w-full h-full">
          <Image
            src="/me1.jpeg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/me4.jpeg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/me3.jpeg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/me2.jpeg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
