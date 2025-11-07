import { Button } from "@/components/button/button";

const DesignPower = () => {
  return (
    <section className="pb-[90px] pt-[75px] bg-[#FCFCFC] text-gray-800 w-full">
      <div className="w-full max-w-[1100px] mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-[clamp(24px,6vw,30px)] text-[#515151] max-w-[450px] leading-[110%]">
            Design That Empowers Innovation in Healthcare.
          </p>

          <Button
            variant="secondary"
            className="bg-[#303C49] rounded-4xl cursor-pointer px-6 md:px-[58px] py-4 text-white text-sm font-medium hover:bg-[#515151] w-full md:w-auto text-center"
          >
            SCHEDULE A FREE 30 MINS CALL
          </Button>
        </div>

        <div className="mt-[60px] md:mt-[79px] bg-red-100 border w-full h-[300px] md:h-[483px]"></div>
      </div>
    </section>
  );
};

export default DesignPower;
