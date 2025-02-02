"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";

interface TimelineEntry {
  year: string;
  description: string;
}

const history: TimelineEntry[] = [
  {
    year: "2024",
    description:
      "K-ESG 경영대상 환경부문 대상 수상 및 창립 50주년 기념식 개최. 'BETTER TOGETHER' 슬로건과 함께 새로운 비전 제시. 사회공헌기업대상 취약계층부문 대상 수상. 밀알나눔재단과 업무협약 체결.",
  },
  {
    year: "2023",
    description:
      "환경 부문 대상 수상. 50주년 기념 자원선순환 화장지 신규 출시.",
  },
  {
    year: "2022",
    description:
      "ESG 지속가능경영 선포. E(환경), S(사회), G(지배) 각 파트별 위원회 구성.",
  },
  {
    year: "2017",
    description: "평택공장 가공기계증설. AFH(Away From Home) 제품 공급 확대.",
  },
  {
    year: "2015",
    description: "베트남 현지 법인 설립. 글로벌 시장 진출.",
  },
  {
    year: "2013",
    description: "성인용 기저귀 '리빙 글로리아' 출시.",
  },
  {
    year: "2009",
    description: "안양시 삼덕공원 조성. 무표백 화장지 '그루' 브랜드 런칭.",
  },
  {
    year: "2006",
    description:
      "한국증권 선물거래소 유가증권 시장 상장. 베트남 조림사업 시행(470만 그루 규모).",
  },
  {
    year: "2004",
    description:
      "성균관대 토지 기부(36만 평, 140만 그루의 나무와 저수지 포함).",
  },
  {
    year: "2003",
    description: "삼덕제지 공장 부지(1만 9376㎡) 안양시 기증.",
  },
  {
    year: "2002",
    description: "'삼정펄프 주식회사'로 상호 변경.",
  },
  {
    year: "1987",
    description: "두루마리 화장지 생산시설 증설.",
  },
  {
    year: "1978",
    description: "백색펄프 생산 개시.",
  },
  {
    year: "1975",
    description: "볏짚펄프 생산개시.",
  },
  {
    year: "1974",
    description: "국산펄프공업육성시책에 의거 새마을 공장설립.",
  },
  {
    year: "1957",
    description: "삼덕제지 공장 기공식.",
  },
  {
    year: "1956",
    description: "삼덕제지 보건복지부장관 표창장 수상.",
  },
  {
    year: "1948",
    description: "삼덕제지 창립.",
  },
];

const TimelineEntry = ({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`flex md:flex-row items-center mb-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      <div
        className={`w-full md:w-5/12 ${
          isEven ? "md:text-right md:pr-4" : "md:text-left md:pl-4"
        } pl-16 relative`}
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 md:hidden flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-12 h-0.5 bg-gray-200"></div>
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-blue-600">
          {entry.year}
        </h3>
        <p className="text-sm md:text-base text-gray-600">
          {entry.description}
        </p>
      </div>
      <div className="hidden md:flex w-2/12 justify-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      </div>
      <div className="hidden md:block w-5/12"></div>
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="mx-auto max-w-2xl lg:text-center mb-8 md:mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#228B22]">
            회사 소개
          </h2>
          <p className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our History
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gray-200 md:-translate-x-1/2"></div>
          {history.map((entry, index) => (
            <TimelineEntry key={entry.year} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
