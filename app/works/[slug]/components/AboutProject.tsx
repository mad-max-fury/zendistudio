import React from "react";

type Props = {};

const AboutProject = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[1104px] px-4 md:px-0">
      <h4 className=" text-[#00709C] text-xl font-semibold">PROJECT BRIEF</h4>
      <div className="flex flex-col gap-2 max-w-[903px] text-[clamp(24px,3vw,30px)]">
        <p className="text-[#303C49]">
          MedSync is a telehealth platform helping doctors and patients
          communicate seamlessly through secure video consultations,
          prescriptions, and updates. The founders approached Zendi Studio to
          improve usability and trust within their product experience.
        </p>
        <p className=" text-[#BDBDBD]">
          Our goal was to design a unified system that not only looks
          professional but also feels intuitive to non-tech-savvy users. We
          focused on clean interfaces, calming visuals, and motion feedback that
          reassures patients at every step.
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
