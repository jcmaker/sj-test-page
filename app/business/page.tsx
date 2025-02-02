"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { ArrowRight } from "lucide-react";

interface Division {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
}

const divisions: Division[] = [
  {
    id: "fabric",
    title: "원단 사업부",
    description: "고품질 위생용 원단 제조",
    longDescription:
      "삼정펄프의 원단 사업부는 최첨단 설비와 50년의 기술력을 바탕으로 고품질의 위생용 원단을 생산합니다. 엄격한 품질 관리와 지속적인 연구개발을 통해 고객사의 니즈에 맞는 최적의 제품을 제공합니다.",
    image:
      "https://sjpulp.com/wp-content/uploads/2023/04/GettyImages-138066450-scaled.jpg",
    features: ["화장지류 원단", "습강지류 원단"],
  },
  {
    id: "living",
    title: "리빙 사업부",
    description: "생활용품 제조 및 유통",
    longDescription:
      "리빙 사업부는 일상 생활에 필요한 다양한 생활용품을 제조하고 유통합니다. 친환경 소재와 혁신적인 기술을 활용하여 소비자의 삶의 질을 높이는 제품을 개발하고 있습니다.",
    image:
      "https://sjpulp.com/wp-content/uploads/2023/04/GettyImages-jv12381221-scaled.jpg",
    features: [
      "화장지",
      "미용티슈",
      "키친타월",
      "물티슈",
      "마스크",
      "점보롤",
      "핸드타월",
    ],
  },
];

export default function BusinessPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[#228B22]">
                사업부 소개
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                50년 전통의 기술력으로
                <br />더 나은 미래를 만들어갑니다
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                삼정펄프는 원단 사업부와 리빙 사업부를 통해
                <br />
                고객의 삶의 질 향상에 기여하고 있습니다
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {divisions.map((division) => (
              <div
                key={division.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="relative h-96 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${division.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{division.title}</h3>
                    <p className="mt-2 text-lg">{division.description}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <p className="text-base text-gray-600">
                      {division.longDescription}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {division.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-gray-600"
                        >
                          <ArrowRight className="mr-2 h-4 w-4 text-[#228B22]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
