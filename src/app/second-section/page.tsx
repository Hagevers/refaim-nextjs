"use client";

import React from "react";
import {
  BookMarked,
  Clover,
  HandHelping,
  Handshake,
  Heart,
  Waypoints,
} from "lucide-react";

interface cardProps {
  alt: string;
  name: string;
  icon: JSX.Element;
  content: string;
  description: string;
}

const cards: cardProps[] = [
  {
    alt: "קהילת רפאים",
    name: "קהילת רפאים",
    icon: <Waypoints />,
    content:
      "קהילת בוגרי ובוגרות היחידה אשר תקיים בתוכה יצירת 'נטוורקינג', בקשות סיוע בכל תחום, יוזמות, משרות עבודה וכו'",
    description:
      "קהילת בוגרי ובוגרות היחידה אשר תקיים בתוכה יצירת 'נטוורקינג', בקשות סיוע בכל תחום, יוזמות, משרות עבודה וכו'",
  },
  {
    alt: "הנצחת הנופלים",
    name: "הנצחת הנופלים",
    icon: <Clover />,
    content:
      "ליווי ותמיכת המשפחות והנצחת גיבורינו אשר נפלו במגוון תוכניות רחב, למען מי שבזכותם אנו כאן",
    description:
      "ליווי ותמיכת המשפחות והנצחת גיבורינו אשר נפלו במגוון תוכניות רחב, למען מי שבזכותם אנו כאן",
  },
  {
    alt: "קידום אישי ופיתוח הבוגר",
    name: "קידום אישי ופיתוח הבוגר",
    icon: <BookMarked />,
    content:
      "פרויקטים רבים שמטרתם להעשיר את סל המיומנויות של הבוגרים. כגון, תוכניות 'מנטורינג' בארץ ובחול, סדנאות התפתחות אישית ולימודי יזמות",
    description:
      "פרויקטים רבים שמטרתם להעשיר את סל המיומנויות של הבוגרים. כגון, תוכניות 'מנטורינג' בארץ ובחול, סדנאות התפתחות אישית ולימודי יזמות",
  },
  {
    alt: "ליווי ותמיכה בלוחמי היחידה הסדירה",
    name: "ליווי ותמיכה בלוחמי היחידה הסדירה",
    icon: <Handshake />,
    content:
      "סדנאות שחרור, הרצאות, אירועים ופעילויות, סיוע לחיילים בודדים ועוד",
    description:
      "סדנאות שחרור, הרצאות, אירועים ופעילויות, סיוע לחיילים בודדים ועוד",
  },
  {
    alt: "טיפול בנפגעי נפש",
    name: "טיפול בנפגעי נפש",
    icon: <Heart />,
    content:
      "מערך הכוונה בניהול אנשי מקצוע רלוונטיים שמטרתו סיוע וטיפול בלוחמי היחידה אשר מתמודדים עם חוויות טראומתיות מהשירות ו PTSD חרדות",
    description:
      "מערך הכוונה בניהול אנשי מקצוע רלוונטיים שמטרתו סיוע וטיפול בלוחמי היחידה אשר מתמודדים עם חוויות טראומתיות מהשירות ו PTSD חרדות",
  },
  {
    alt: "'רפאים' למען החברה הישראלית",
    name: "'רפאים' למען החברה הישראלית",
    icon: <HandHelping />,
    content:
      "מיזמי התנדבויות של בוגרי היחידה עמ לגלות מעורבות חברתית וסיוע לקהילה. שיפוץ בתי שורדי שואה, עידוד שירות משמעותי אצל נוער בסיכון, התנדבויות עם פגועי גוף ונפש מהשירות וכו'",
    description:
      "מיזמי התנדבויות של בוגרי היחידה עמ לגלות מעורבות חברתית וסיוע לקהילה. שיפוץ בתי שורדי שואה, עידוד שירות משמעותי אצל נוער בסיכון, התנדבויות עם פגועי גוף ונפש מהשירות וכו'",
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
      <div className="flex-col items-center justify-center" id="values">
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
