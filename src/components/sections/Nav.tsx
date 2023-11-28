"use client";

import React from "react";
import { Button, Link } from "@nextui-org/react";

export default function Nav() {
  return (
    <section className="flex flex-col items-center justify-center self-stretch px-6 md:px-16 py-4 border-b border-solid border-[#c4c0c0] top-0 sticky z-50 bg-background">
      <div className="flex items-center justify-between gap-8 self-stretch w-full">
        <h1>LOGO</h1>
        <Button as={Link} href="/" size="sm" color="primary" radius="sm">
          Home
        </Button>
      </div>
    </section>
  );
}
