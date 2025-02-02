"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Leaf, Recycle, TreePine } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="relative isolate pt-14">
        {/* Hero section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[#228B22]">
                지속 가능성
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                삼정펄프는 숲을 보호하는
                <br />
                지속 가능한 경영을 실천합니다
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                우리는 환경을 생각하는 제조 공정과 친환경 기술 개발을 통해
                <br />더 나은 미래를 만들어가고 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Initiatives section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {initiatives.map((initiative) => (
                <div
                  key={initiative.name}
                  className="relative overflow-hidden rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
                >
                  <div className="absolute right-4 top-4 text-[#228B22]">
                    {initiative.icon}
                  </div>
                  <div className="relative">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      {initiative.name}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Goals section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              환경 목표
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              2030년까지 달성하고자 하는 삼정펄프의 환경 목표입니다.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {goals.map((goal) => (
                <div key={goal.name} className="flex flex-col items-start">
                  <dt className="text-lg font-semibold leading-7 text-gray-900">
                    {goal.name}
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-600">
                    {goal.description}
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

const initiatives = [
  {
    name: "지속가능한 환경",
    description:
      "삼정펄프는 사람, 사회 그리고 환경이 공존하는 평범한 일상을 만들기 위해 노력합니다. 이를 위해 자연에서 얻는 자원을 최소화하고 자원 재순환을 통해 환경적 성과를 개선하는 목표를 수립하고 실천하고 있습니다.",
    icon: <Recycle className="h-6 w-6" />,
  },
  {
    name: "파트너와의 동반성장 ",
    description:
      "지속가능한 상생경영을 위해 고위험 협력사 및 관리 요소를 도출하고, 개선 요구 및 지원을 통해 기업과 협력사의 유대관계 형성 및 동반성장을 위한 모니터링을 실시하고 있습니다.",
    icon: <Leaf className="h-6 w-6" />,
  },
  {
    name: "소비자 중심 경영",
    description:
      "지속 가능한 산림 경영을 실천하며, 나무 심기 활동을 통해 산림 보호에 기여합니다.",
    icon: <TreePine className="h-6 w-6" />,
  },
  {
    name: "안전 보건",
    description:
      "산업 재해 근절을 위해 재해 발생 데이터 분석을 통한 안전한 작업 환경 구축 및 정기적인 안전 교육을 실시하여 전 사업장 무재해 달성을 위해 노력하고 있습니다. ",
    icon: <Recycle className="h-6 w-6" />,
  },
  {
    name: "임직원의 일과 삶의 균형",
    description:
      "임직원의 일과 삶의 균형을 위해 복리후생 제도 개선 및 포상 프로그램을 시행을 위한 정기적인 회의를 통해 임직원의 목소리에 귀 기울이고 있습니다. ",
    icon: <Leaf className="h-6 w-6" />,
  },
  {
    name: "품질 관리 강화",
    description:
      "고객 컴플레인을 분석하고 사전 리스크 검토를 통해 품질 사고를 사전 예방할 수 있도록 관리 체계를 계속해서 고도화하겠습니다. ",
    icon: <TreePine className="h-6 w-6" />,
  },
];

const goals = [
  {
    name: "탄소 배출량 12% 감축",
    description:
      "2030년까지 제조 공정에서 발생하는 탄소 배출량을 2020년 대비 12% 감축하겠습니다.",
  },
  {
    name: "친환경 인증 제품",
    description:
      "2030년까지 모든 사업장의 전력을 재생 에너지로 전환하여 친환경 생산을 실현하겠습니다.",
  },
  {
    name: "리사이클 원료 사용 제품",
    description:
      "2030년까지 리사이클 원료 사용 제품을 100% 전환하여 환경 영향을 최소화하겠습니다.",
  },
];
