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
      className={`flex ${
        isEven ? "flex-row" : "flex-row-reverse"
      } items-center mb-8`}
    >
      <div
        className={`w-5/12 ${isEven ? "text-right pr-4" : "text-left pl-4"}`}
      >
        <h3 className="text-xl font-bold mb-2">{entry.year}</h3>
        <p className="text-gray-600">{entry.description}</p>
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      </div>
      <div className="w-5/12"></div>
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#228B22]">
            회사 소개
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            50년 전통의 기술력,
            <br />
            신뢰할 수 있는 기업
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            삼정펄프는 1973년 설립 이래 끊임없는 혁신과 연구개발을 통해
            <br />
            대한민국 펄프 산업을 선도해 왔습니다.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          {history.map((entry, index) => (
            <TimelineEntry key={entry.year} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
