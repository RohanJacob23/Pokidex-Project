"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";

export default function SearchPokemon() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Input
        type="email"
        placeholder="Search pokemon"
        size="sm"
        className="w-full"
      />
      <Button color="primary" radius="sm">
        Search
      </Button>
    </div>
  );
}
