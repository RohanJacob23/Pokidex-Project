"use client";

import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Image, Skeleton } from "@nextui-org/react";
import axios from "axios";
import { PokemonDetails } from "@/types/types";
import NextImage from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function PokemonCard({
  url,
  name,
}: {
  url: string;
  name: string;
}) {
  const [pokemonDetail, setPokemonDetail] = useState<
    PokemonDetails | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemonDetail(res.data))
      .finally(() => setIsLoading(false));
  }, [url]);

  return (
    <>
      {!isLoading && pokemonDetail ? (
        <Card
          shadow="lg"
          isPressable
          onPress={() => router.push(`/${name}`)}
          className="flex flex-col gap-4 bg-[#320C0E]"
        >
          <CardBody className="p-0 overflow-hidden gradient">
            <Image
              width={400}
              height={400}
              radius="none"
              isBlurred
              alt="Pokemon Image"
              className="w-full h-full object-cover"
              as={NextImage}
              src={pokemonDetail.sprites.front_default!}
            />
          </CardBody>
          <CardFooter className="flex flex-col gap-2 self-stretch">
            <div className="flex flex-col text-center">
              <h1 className="first-letter:uppercase font-fugaz text-lg">
                {name}
              </h1>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <p>Pokemon Name</p>
          </CardFooter>
        </Card>
      ) : (
        <Card className="flex flex-col gap-4 w-72 h p-4">
          <Skeleton className=" h-24 bg-blue rounded-lg" />
          <div className="space-y-3">
            <Skeleton className="h-3 w-3/5 rounded-lg bg-default-200" />
            <Skeleton className="h-3 w-4/5 rounded-lg bg-default-200" />
            <Skeleton className="h-3 w-2/5 rounded-lg bg-default-300" />
          </div>
        </Card>
      )}
    </>
  );
}
