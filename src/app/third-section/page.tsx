"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import { boardData } from "./data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ThirdSection = () => {
  return (
    <div className="bg-zinc-50">
      <div className="container p-20 ltr flex min-h-[250px] max-w-[1050px] ">
        <Carousel className="text-center flex-1">
          <CarouselContent className="-ml-2 md:-ml-4">
            {boardData.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 flex flex-col-reverse items-center md:flex-row md:justify-between md:items-end gap-10"
              >
                <div className="flex flex-col justify-between gap-1">
                  <p className="text-lg rtl">{item.content}</p>
                  <h1 className="flex">{item.title}</h1>
                  <h1 className="flex font-bold">{item.name}</h1>
                </div>
                <Image
                  src={item.img}
                  alt={item.alt}
                  height={300}
                  width={300}
                  className="text-center"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
      <div className="flex gap-4 justify-center pt-10">
        <Link href="/donation">
          <Button className="bg-[#45684C] text-white px-10 py-2 rounded-md text-lg font-bold">
            לתרומה
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ThirdSection;
