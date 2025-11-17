import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { cn } from "@/utils/helper";
export default function SectionHeader({
  text,
  src,
  children,
}: {
  text: string;
  src: StaticImageData;
  children?: ReactNode;
}) {
  return (
    <>
      <div
        className={cn(
          " relative flex xl:items-end items-center justify-center w-full min-h-[455px] ",
          children && "lg:mb-[100px] min-h-[400px]"
        )}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full">
          <Image
            src={src}
            alt="Medical background illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
        <h1
          className={cn(
            "max-xl:mt-20 xl:mb-20 text-center text-[#303C49] text-3xl leading-10 font-grotesk font-medium md:text-5xl xl:text-[64px]",
            children && "max-lg:pb-0 pb-[60px] "
          )}
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br/>") }}
        />
        {children && <div className=" max-lg:hidden">{children}</div>}
      </div>
      <div className=" max-lg:block hidden w-full p-4 md:p-0">
        {children && <div className="w-full">{children}</div>}
      </div>
    </>
  );
}
