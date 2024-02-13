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

const ThirdSection = () => {
  return (
    <div className="bg-zinc-50">
      <div className="container p-20 ltr flex min-h-[250px] max-w-[1050px] ">
        <Carousel className="text-center flex-1">
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem className="pl-2 md:pl-4 flex justify-between items-end gap-10">
              <div className="flex flex-col justify-between gap-1">
                <p className="text-lg">
                  לורם איפסום הוא טקסט דמי נקודות המשמש כתיקית דגימה בתעשיית
                  ההדפס והעיצוב. הוא נמצא מאז המאה ה-16, כאשר הדפיס מעצבים
                  כתובות ומילים נוספות בסוגי גופנים שונים על גבי דפי נייר.
                </p>
                <h1 className="flex">{'מנכ"ל העמותה'}</h1>
                <h1 className="flex font-bold">אביב חזן</h1>
              </div>
              <Image
                src="/aviv_hazan.jpg"
                alt="CEO"
                height={300}
                width={300}
                className="text-center"
              />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4 flex justify-between items-end gap-10">
              <div className="flex flex-col justify-between gap-1">
                <p className="text-lg">
                  לורם איפסום הוא טקסט דמי נקודות המשמש כתיקית דגימה בתעשיית
                  ההדפס והעיצוב. הוא נמצא מאז המאה ה-16, כאשר הדפיס מעצבים
                  כתובות ומילים נוספות בסוגי גופנים שונים על גבי דפי נייר.
                </p>
                <h1 className="flex">{"חבר הנהלה"}</h1>
                <h1 className="flex font-bold">רועי סער</h1>
              </div>
              <Image
                src="/roy_saar.jpg"
                alt="CEO"
                height={300}
                width={300}
                className="text-center"
              />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4 flex justify-between items-end gap-10">
              <div className="flex flex-col justify-between gap-1">
                <p className="text-lg">
                  לורם איפסום הוא טקסט דמי נקודות המשמש כתיקית דגימה בתעשיית
                  ההדפס והעיצוב. הוא נמצא מאז המאה ה-16, כאשר הדפיס מעצבים
                  כתובות ומילים נוספות בסוגי גופנים שונים על גבי דפי נייר.
                </p>
                <h1 className="flex">{"חבר הנהלה"}</h1>
                <h1 className="flex font-bold">גיל אסולין</h1>
              </div>
              <Image
                src="/gal_asulin.jpg"
                alt="CEO"
                height={300}
                width={300}
                className="text-center"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
    </div>
  );
};

export default ThirdSection;
