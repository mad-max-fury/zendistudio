import { Button } from "@/components/button/button";
import Image from "next/image";
import React from "react";

type Insight = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const insights: Insight[] = [
  {
    id: 1,
    category: "Design Systems",
    title:
      "Designing Trust in Healthcare Apps: Why UX is a Matter of Life and Care.",
    image:
      "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
  },
  {
    id: 2,
    category: "Design Systems",
    title:
      "Designing Trust in Healthcare Apps: Why UX is a Matter of Life and Care.",
    image:
      "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
  },
  {
    id: 3,
    category: "Design Systems",
    title:
      "Designing Trust in Healthcare Apps: Why UX is a Matter of Life and Care.",
    image:
      "https://cdn8.openculture.com/wp-content/uploads/2014/04/Van-Gogh-Self-Portrait.jpg",
  },
];

export default function InsightsFromStudio() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white text-gray-800">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#515151] mb-4">
          Insights from the Studio
        </h2>
        <p className="text-lg max-w-[556px] text-[#6C6C6C] mb-12  mx-auto">
          Design strategies, product insights, and founder stories shaping the
          future of healthcare.
        </p>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start text-left group"
            >
              <div className="overflow-hidden relative  h-[200px] w-full   mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className=" object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <span className="text-xs uppercase font-medium text-gray-500 tracking-wider bg-gray-100 rounded px-2 py-1 mb-3">
                {item.category}
              </span>

              <h3 className="text-lg font-semibold text-[#515151] leading-snug hover:text-gray-700 transition">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12">
          <Button className="px-8 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition">
            Load More
          </Button>
        </div>
      </div>
    </section>
  );
}
