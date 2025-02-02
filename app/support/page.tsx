"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building2, Mail, MessageSquare, Phone } from "lucide-react";

export default function SupportPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="relative isolate pt-14">
        {/* Hero section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[#228B22]">
                고객 지원
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                언제나 고객 곁에서
                <br />
                함께하겠습니다
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {contacts.map((contact) => (
                <Card key={contact.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {contact.icon}
                      {contact.name}
                    </CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">{contact.detail}</p>
                    {contact.action && (
                      <div className="mt-4">
                        <Button asChild>
                          <a href={contact.action.href}>
                            {contact.action.text}
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              자주 묻는 질문
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              고객님들이 자주 문의하시는 내용을 모았습니다.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}

const contacts = [
  {
    name: "본사",
    description: "삼정펄프 본사 위치 및 연락처",
    detail: "서울특별시 강남구 테헤란로 123 삼정빌딩 4층",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    name: "이메일 문의",
    description: "제품 문의 및 기타 문의",
    detail: "contact@samjung.com",
    icon: <Mail className="h-5 w-5" />,
    action: {
      text: "이메일 보내기",
      href: "mailto:contact@samjung.com",
    },
  },
  {
    name: "전화 문의",
    description: "고객 상담 센터",
    detail: "02-1234-5678 (평일 09:00 - 18:00)",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    name: "카카오톡 상담",
    description: "실시간 채팅 상담",
    detail: "평일 09:00 - 18:00",
    icon: <MessageSquare className="h-5 w-5" />,
    action: {
      text: "채팅 시작하기",
      href: "#",
    },
  },
];

const faqs = [
  {
    question: "제품 구매는 어떻게 하나요?",
    answer:
      "기업 고객의 경우 영업팀을 통해 상담 후 구매가 가능합니다. 일반 소비자는 각 지역 대리점이나 온라인 쇼핑몰을 통해 구매하실 수 있습니다.",
  },
  {
    question: "친환경 인증서는 어떤 것들이 있나요?",
    answer:
      "당사의 제품은 FSC 인증, 환경표지 인증 등을 보유하고 있습니다. 자세한 내용은 지속가능성 페이지에서 확인하실 수 있습니다.",
  },
  {
    question: "제품 품질 보증 기간은 얼마인가요?",
    answer:
      "제품별로 품질 보증 기간이 다르며, 제품 포장에 표기된 유통기한을 확인해 주시기 바랍니다. 품질에 문제가 있는 경우 고객센터로 문의해 주시면 신속히 처리해 드리겠습니다.",
  },
  {
    question: "기업 견학이 가능한가요?",
    answer:
      "네, 기업 견학은 사전 예약을 통해 가능합니다. 견학을 원하시는 날짜의 2주 전까지 이메일로 신청해 주시기 바랍니다.",
  },
];
