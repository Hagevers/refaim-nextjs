"use client";

import React from "react";
import { Gift, GraduationCap, Heart } from "lucide-react";

interface cardProps {
  alt: string;
  name: string;
  icon: JSX.Element;
  content: string;
  description: string;
}

const cards: cardProps[] = [
  {
    alt: "הצטרפות לעמותה",
    name: "הצטרפות לעמותה",
    icon: <GraduationCap />,
    content: "הצטרפות לעמותה",
    description: "הצטרפות לעמותה",
  },
  {
    alt: "תרומה",
    name: "תרומה",
    icon: <Gift />,
    content: "תרומה",
    description: "תרומה",
  },
  {
    alt: "התנדבות",
    name: "התנדבות",
    icon: <Heart />,
    content: "התנדבות",
    description: "התנדבות",
  },
  {
    alt: "התנדבות",
    name: "התנדבות",
    icon: <Heart />,
    content: "התנדבות",
    description: "התנדבות",
  },
  {
    alt: "התנדבות",
    name: "התנדבות",
    icon: <Heart />,
    content: "התנדבות",
    description: "התנדבות",
  },
  {
    alt: "התנדבות",
    name: "התנדבות",
    icon: <Heart />,
    content: "התנדבות",
    description: "התנדבות",
  },
];

const SecondSection = () => {
  return (
    <div className="">
      {/* <div
        className="
          md:flex-row
          flex-col
          items-center
          flex  justify-center pb-10
        "
      > */}
      <div className="flex-col items-center justify-center">
        <div
          className="
                text-3xl
                flex
                justify-center
                md:text-5xl
                font-bold
                pt-5
                pb-10
                bg-gradient-to-r
                from-[#45684C]
                to-blue-800
                bg-clip-text
                text-transparent
                "
        >
          מטרת העמותה
        </div>

        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
          {cards.map((feature, index) => (
            <div
              key={index}
              className="flex-col space-y-6 pb-10 border
                        
                        p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                        "
            >
              <div
                className="
                            text-gray-600 text-3xl font-bold
                            "
              >
                {feature.icon}
                {/* <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={300}
                    height={300}
                    className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                  /> */}
                <div>
                  <div
                    className="text-2xl pb-4 bg-gradient-to-t
                                    from-black
                                    to-gray-400
                                    bg-clip-text
                                    text-transparent

                                    
                                    
                                    "
                  >
                    {feature.name}
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SecondSection;
