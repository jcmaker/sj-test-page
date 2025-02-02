"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="relative isolate pt-14">
        {/* Hero section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                지속 가능한 미래를 위한
                <br />
                <span className="text-[#003399]">삼정펄프의 약속</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                국내 제조 원단, 국내 가공 생산으로 신뢰할 수 있는 제품을
                만듭니다.
                <br />
                환경을 생각하는 기술로 더 나은 미래를 만들어갑니다.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild>
                  <a href="/about">
                    더 알아보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#228B22]">
              지속 가능한 경영
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              환경을 생각하는 기술,
              <br />더 나은 미래를 위한 혁신
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none mb-20">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    name: "국내 생산 및 제조",
    description:
      "엄선된 국내 원단과 철저한 품질 관리를 통해 안전하고 믿을 수 있는 제품을 생산합니다.",
  },
  {
    name: "친환경 공정",
    description:
      "지속 가능한 제조 공정을 통해 환경 영향을 최소화하고, 자원 순환에 기여합니다.",
  },
  {
    name: "혁신 기술",
    description:
      "끊임없는 연구개발을 통해 더 나은 제품과 서비스를 제공하기 위해 노력합니다.",
  },
];
