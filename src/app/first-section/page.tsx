"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const LandingSection = () => {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 space-y-10">
      <div className="container mx-auto text-center">
        <div
          className="text-6xl flex justify-center items-center font-bold md:px-20 pb-10 
        text-gradient
         bg-gradient-to-r
        from-[#45684C]
        to-blue-500
         bg-clip-text 
         text-transparent"
        >
          עמותת רפאים
        </div>
        <p
          className="text-lg md:text-xl md-10
        bg-gradient-to-l
        from-black
        to-gray-400
        bg-clip-text
        text-transparent
        font-bold"
        >
          עמותת רפאים הוקמה ב2023- על מנת לקיים בית חם לבוגרי היחידה, לקיים
          קהילה מקדמת ופעילה למען החברה הישראלית, לחזק את מורשת היחידה, לסייע
          לחבריה בהכוונה לקבלת טיפול לנפגעי הנפש ולהנציח את נופליה.
        </p>
        <div className="flex gap-4 justify-center pt-10">
          <Button className="bg-[#45684C] text-white px-10 py-2 rounded-md text-lg font-bold">
            לתרומה
          </Button>
        </div>

        <div className="pt-10">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/refaim_video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
