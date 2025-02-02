"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="relative isolate pt-14">
        {/* Hero section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[#228B22]">
                공지사항
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                삼정펄프의 소식을
                <br />
                전해드립니다
              </p>
            </div>
          </div>
        </div>

        {/* News section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="space-y-8">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={item.datetime}
                      className="flex items-center text-gray-500"
                    >
                      <Calendar className="mr-1.5 h-4 w-4" />
                      {item.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                      {item.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <a href={item.href}>
                        <span className="absolute inset-0" />
                        {item.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" asChild>
                      <a href={item.href}>
                        자세히 보기
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const news = [
  {
    id: 1,
    title: "창립 50주년 기념 로고 공개",
    href: "/news/50th-anniversary",
    description:
      "삼정펄프의 50년 역사와 미래 비전을 담은 창립 50주년 기념 로고를 공개했습니다.",
    date: "2023년 12월 15일",
    datetime: "2023-12-15",
    category: "보도자료",
  },
  {
    id: 2,
    title: "유한킴벌리와 업무 협약 체결",
    href: "/news/partnership",
    description:
      "친환경 제품 개발을 위한 업무 협약을 체결하여 지속 가능한 성장을 위한 발판을 마련했습니다.",
    date: "2023년 11월 30일",
    datetime: "2023-11-30",
    category: "보도자료",
  },
  {
    id: 3,
    title: "대학생 마케팅 공모전 개최",
    href: "/news/contest",
    description:
      "미래 인재 발굴과 친환경 제품 홍보를 위한 대학생 마케팅 공모전을 개최합니다.",
    date: "2023년 11월 15일",
    datetime: "2023-11-15",
    category: "공지사항",
  },
];
