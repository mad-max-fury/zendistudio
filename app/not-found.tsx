"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/button/button";

export default function NotFound() {
  return (
    <div className=" flex flex-col mt-[250px] items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-extrabold text-gray-800">404</h1>

      <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
        Page Not Found
      </p>

      <p className="mt-2 text-gray-500 max-w-md">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link href="/" className="mt-8 ">
        <Button
          variant={"secondary"}
          className="
              bg-[#303C49] inline-flex items-center gap-2 rounded-4xl cursor-pointer px-8 md:px-[58px] py-4 md:py-5
              text-white text-xs md:text-sm font-medium hover:bg-[#515151]
            "
        >
          <ArrowLeft size={18} />
          Go Back Home
        </Button>
      </Link>
    </div>
  );
}
