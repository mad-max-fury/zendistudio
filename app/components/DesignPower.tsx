import { Button } from "@/components/button/button";

type Props = {};

const DesignPower = (props: Props) => {
  return (
    <section className="pb-[90px] pt-[75px]  bg-[#FCFCFC] text-gray-800 w-full">
      <div className="  w-full max-w-[1100px]   mx-auto">
        <div className="w-full flex justify-between ">
          <p className="text-[30px] text-[#515151] max-w-[400px] leading-[100%] ">
            Design That Empowers Innovation in Healthcare.
          </p>

          <Button
            variant={"secondary"}
            className="
          bg-[#303C49] rounded-4xl cursor-pointer px-[58px] py-5 text-white text-sm font-medium hover:bg-[#515151]"
          >
            SCHEDULE A FREE 30 MINS CALL
          </Button>
        </div>
        <div className="mt-[79px] bg-red-100 border w-full h-[483px]"></div>
      </div>
    </section>
  );
};

export default DesignPower;
