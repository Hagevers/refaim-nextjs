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

const components: { title: string; description: string }[] = [
  {
    title: "Home",
    description: "Go to the home page",
  },
  {
    title: "About",
    description: "Learn more about us",
  },
  {
    title: "Contact",
    description: "Get in touch",
  },
  {
    title: "Blog",
    description: "Read our blog",
  },
  {
    title: "Careers",
    description: "Join our team",
  },
  {
    title: "Pricing",
    description: "See our pricing",
  },
  {
    title: "Login",
    description: "Log in to your account",
  },
  {
    title: "Sign Up",
    description: "Create an account",
  },
  {
    title: "Dashboard",
    description: "Manage your account",
  },
  {
    title: "Logout",
    description: "Log out of your account",
  },
  {
    title: "Settings",
    description: "Manage your account settings",
  },
  {
    title: "Profile",
    description: "View your profile",
  },
  {
    title: "Account",
    description: "Manage your account",
  },
  {
    title: "Admin",
    description: "Manage the site",
  },
  {
    title: "Support",
    description: "Get help",
  },
  {
    title: "Privacy",
    description: "Read our privacy policy",
  },
  {
    title: "Terms",
    description: "Read our terms of service",
  },
  {
    title: "Legal",
    description: "Read our legal documents",
  },
  {
    title: "FAQ",
    description: "Read our frequently asked questions",
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
              <ListItem title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
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
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="font-bold text-lg">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink>צור קשר</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
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
