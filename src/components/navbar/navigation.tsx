"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { SignedIn } from "@clerk/nextjs";

const components: { title: string; description: string; link: string }[] = [
  {
    title: "ויקיפדיה",
    description: "עמוד היחידה בויקיפדיה",
    link: "https://he.wikipedia.org/wiki/%D7%94%D7%99%D7%97%D7%99%D7%93%D7%94_%D7%94%D7%A8%D7%91-%D7%9E%D7%9E%D7%93%D7%99%D7%AA",
  },
  {
    title: "כתבה YNET",
    description: "כתבה על הקמת היחידה",
    link: "https://www.ynet.co.il/articles/0,7340,L-5496192,00.html",
  },
  {
    title: 'כתבה באתר צה"ל',
    description: 'כתבה על היחידה הרב מימדית באתר הרשמי של צה"ל',
    link: "https://www.idf.il/%d7%9b%d7%aa%d7%91%d7%95%d7%aa-%d7%95%d7%a2%d7%93%d7%9b%d7%95%d7%a0%d7%99%d7%9d/2020/%d7%94%d7%99%d7%97%d7%99%d7%93%d7%94-%d7%94%d7%a8%d7%91-%d7%9e%d7%9e%d7%93%d7%99%d7%aa/",
  },
  {
    title: "כתבה באתר ישראל היום",
    description: "כתבה על היחידה בישארל היום",
    link: "https://www.israelhayom.co.il/article/793027",
  },
  {
    title: "אתר רשמי היחידה הרב מימדית",
    description: 'האתר הרשמי של צה"ל יחידה',
    link: "https://www.idf.il/%d7%90%d7%aa%d7%a8%d7%99-%d7%99%d7%97%d7%99%d7%93%d7%95%d7%aa/%d7%94%d7%99%d7%97%d7%99%d7%93%d7%94-%d7%94%d7%a8%d7%91-%d7%9e%d7%99%d7%9e%d7%93%d7%99%d7%aa/%d7%9b%d7%9c-%d7%94%d7%9b%d7%aa%d7%91%d7%95%d7%aa/2022/%d7%a9%d7%a0%d7%94-%d7%9c%d7%94%d7%a7%d7%9e%d7%aa-%d7%94%d7%99%d7%97%d7%99%d7%93%d7%94-%d7%94%d7%a8%d7%91-%d7%9e%d7%9e%d7%93%d7%99%d7%aa/",
  },
  {
    title: "כתבה באתר וואלה",
    description: "כתבה באתר וואלה על היחידה",
    link: "https://news.walla.co.il/item/3455388",
  },
];

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="rtl hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold text-lg bg-transparent">
            העמותה
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] rtl">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      עמותת רפאים
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      עמותת רפאים הוקמה ב2023- על מנת לקיים בית חם לבוגרי
                      היחידה, לקיים קהילה מקדמת ופעילה למען החברה הישראלית, לחזק
                      את מורשת היחידה, לסייע לחבריה בהכוונה לקבלת טיפול לנפגעי
                      הנפש ולהנציח את נופליה.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="תרומה לעמותה">
                לתרומה לעמותה ולהתחיל להיות חלק במעגל החיים של היחידה
              </ListItem>
              <ListItem title="הצטרפות כחבר">להצטרפות כחבר עמותה</ListItem>
              <ListItem title="מטרות העמותה">מטרות העמותה</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold text-lg bg-transparent">
            קישורים
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.link}
                  target="_blank"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="font-bold text-lg hover:bg-white hover:bg-opacity-45 p-2 rounded-md">
          <Link href="#contact" legacyBehavior passHref scroll={true}>
            <NavigationMenuLink>צור קשר</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <SignedIn>
          <NavigationMenuItem className="font-bold text-lg hover:bg-white hover:bg-opacity-45 p-2 rounded-md">
            <Link href="/profile" legacyBehavior passHref>
              <NavigationMenuLink>איזור אישי</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </SignedIn>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
