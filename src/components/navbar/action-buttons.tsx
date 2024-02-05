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
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10 rtl:items-end">
                  <Link href="/">דף הבית</Link>
                  <Link href="/donate">לתרומה</Link>
                  <Link href="/signup">להצטרפות לעמותה</Link>
                  <Link href="/login">להתחברות</Link>
                  <Link href="/about">אודות</Link>
                  <Link href="/contact">צור קשר</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div>
        <div className="hidden md:flex md:space-x-4">
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
