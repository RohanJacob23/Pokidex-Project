"use client";

import React from "react";
import { Divider } from "@nextui-org/react";

export default function Footer() {
  return (
    <section className="flex flex-col items-center self-stretch p-8 md:px-16 md:py-20 gap-4 md:gap-16 bg-[#291B1C]">
      <div className="flex flex-wrap items-center self-stretch content-center justify-center gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <h1>link 1</h1>
          <h1>link 2</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <h1>link 3</h1>
          <h1>link 4</h1>
        </div>
        <h1>link 5</h1>
      </div>

      {/* credits */}
      <div className="flex flex-col items-center gap-4 md:gap-8 self-stretch">
        <Divider />
        <div className="flex justify-between self-stretch gap-6 md:gap-0 text-sm">
          <p>© 2023 Relume. All rights reserved.</p>
          {/* footer links */}
          <div className="flex gap-6 flex-wrap self-stretch content-center items-center justify-center underline">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
          </div>
        </div>
      </div>
    </section>
  );
}
