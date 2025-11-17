"use client";
import React from "react";

type Props = {};

export default function Services({}: Props) {
  return (
    <div className=" flex items-center justify-center mt-[300px] text-white px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl text-[#303C49]  md:text-6xl font-bold mb-4">
          Coming Soon
        </h1>

        <p className="text-gray-500 text-lg md:text-xl mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
}
