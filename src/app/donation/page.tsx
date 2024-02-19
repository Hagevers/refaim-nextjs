import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const DonationPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[350px] ">
        <CardHeader>
          <CardTitle>תרומה לעמותת רפאים</CardTitle>
          <CardDescription>
            תרומתכם תסייע לנו להמשיך בפעולות שלנו למען בוגרי היחידה
          </CardDescription>
        </CardHeader>
        <CardContent>
          {'כרגע ניתן לתרום רק לחשבון חו"ל, מצטערים על אי הנוחות.'}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/">
            <Button variant={"outline"}>לחזרה לדף הבית</Button>
          </Link>
          <Link
            target="_blank"
            href="https://secure.givelively.org/donate/the-giving-back-fund-inc/rafaim888?fbclid=PAAaZEXzt4B-PfDinHXjhws-vStFpzZpzRfRVHDWXCSwXR-jU1jCLAxoR8sFc_aem_AYK8aOqOruvgKoEHuci2HAZlC6CjhPsNzrSiHC4jktvGZT8MMLQcKS49bZRz19VwhmQ"
          >
            <Button>לתרומה</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DonationPage;
