"use client";

import React from "react";

const ThirdSection = () => {
  //   return (
  //     <section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 space-y-10">
  //       <div className="container">
  //         <div className="flex items-center justify-center min-h-[250px]">
  //           <div className="bg-black flex-[3]">as</div>
  //           <div className="flex-[1] bg-[url('/ceo_image.webp')]">
  //             {/* <Image alt="CEO" src={"/ceo_image.webp"} fill={true} /> */}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );

  return (
    <div
      className="container p-10
        "
    >
      <div className="flex min-h-[450px] gap-6 md:px-10">
        <div className="hidden md:block flex-1 bg-[url('/ceo_image.webp')] bg-cover bg-no-repeat rounded-md"></div>
        <div className="flex-[2] text-clip ">
          {/* Paragraph of the ceo words */}
          <p className="mb-3 text-right text-gray-500 dark:text-gray-400">
            לורם איפסום הוא טקסט דמי נקודות המשמש כתיקית דגימה בתעשיית ההדפס
            והעיצוב. הוא נמצא מאז המאה ה-16, כאשר הדפיס מעצבים כתובות ומילים
            נוספות בסוגי גופנים שונים על גבי דפי נייר.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
