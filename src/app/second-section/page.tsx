import React from "react";

import { Gift, GraduationCap, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface cardProps {
  title: string;
  description?: string;
  icon: JSX.Element;
  content: string;
}

const cards: cardProps[] = [
  {
    title: "הצטרפות לעמותה",
    description: "הצטרפות לעמותה",
    icon: <GraduationCap />,
    content: "הצטרפות לעמותה",
  },
  {
    title: "תרומה",
    description: "תרומה",
    icon: <Gift />,
    content: "תרומה",
  },
  {
    title: "התנדבות",
    description: "התנדבות",
    icon: <Heart />,
    content: "התנדבות",
  },
];

const SecondSection = () => {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 space-y-10">
      <div className="flex-1 flex flex-row justify-center place-items-center p-5 m-5 gap-12">
        {cards.map((card, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{card.icon}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
