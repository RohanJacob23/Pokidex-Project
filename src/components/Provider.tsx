"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Provider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider
      navigate={router.push}
      className="flex flex-col min-h-screen"
    >
      {children}
    </NextUIProvider>
  );
}
