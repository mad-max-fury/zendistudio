"use client";

import React from "react";

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[#878787] text-sm tracking-wide mb-2">{label}</p>
      <p className="text-[#515151] text-sm leading-relaxed">{children}</p>
    </div>
  );
}

export default function ProjectInfo() {
  return (
    <div
      className="w-full max-w-[1104px] bg-[#FAFAFA] rounded-2xl p-6 md:p-10 
                    lg:absolute lg:left-1/2 lg:-translate-x-1/2 -bottom-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <InfoBlock label="CLIENT">MedSync Health Technologies</InfoBlock>

        <InfoBlock label="INDUSTRY">MedSync Health Technologies</InfoBlock>

        <InfoBlock label="DELIVERABLES">
          Product Screens, Brand Identity,
          <br />
          Pitch Deck, Design System
        </InfoBlock>

        <InfoBlock label="PROJECT DURATION">6 Weeks</InfoBlock>
      </div>
    </div>
  );
}
