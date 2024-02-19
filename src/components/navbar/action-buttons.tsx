"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="text-white">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10 rtl:items-end">
                  <Link href="/">דף הבית</Link>
                  <Link href="#contact">צור קשר</Link>
                  <Link href="/outsideLinks">קישורים חיצוניים</Link>
                  <SignedIn>
                    <Link href="/profile">לאיזור האישי</Link>
                    <SignOutButton>להתנתק</SignOutButton>
                  </SignedIn>
                  <SignedOut>
                    <SignInButton>
                      <Link href="/signup">להצטרפות לעמותה</Link>
                    </SignInButton>
                  </SignedOut>
                  <Link href="/donate">
                    <div className="flex gap-4 justify-center pt-10">
                      <Button className="bg-[#45684C] text-white px-10 py-2 rounded-md text-lg font-bold">
                        לתרומה
                      </Button>
                    </div>
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div>
        <div className="hidden md:flex md:gap-4 md:justify-between md:items-center">
          <SignedOut>
            <SignInButton>
              <Button className="text-md" variant={"ghost"}>
                להתחברות
              </Button>
            </SignInButton>
          </SignedOut>
          <Button className="text-md bg-[#45684C] ">לתרומה</Button>
          <div className="my-1">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
