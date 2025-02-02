"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navigation = [
  { name: "회사 소개", href: "/about" },
  { name: "지속 가능성", href: "/sustainability" },
  { name: "사업부소개", href: "/business" },
  {
    name: "공시정보",
    href: "https://finance.naver.com/item/dart.naver?code=009770",
  },
  { name: "쇼핑몰", href: "https://sjpulp.co.kr/" },
  { name: "고객 지원", href: "/support" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 text-2xl font-bold text-[#003399]"
          >
            삼정펄프
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#003399]"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="text-left">메뉴</SheetTitle>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
