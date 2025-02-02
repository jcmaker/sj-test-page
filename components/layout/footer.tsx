"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#003399]">
                삼정펄프 주식회사
              </h2>
            </div>

            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <p>대표자 : 전성오</p>
              <p>주소 : 서울시 종로구 혜화로 20, 삼정펄프 빌딩 2층</p>
              <p>사업자번호 : 125-81-00201</p>
              <div className="flex flex-wrap gap-x-4">
                <p>고객센터 : 080-449-4131</p>
                <p>회사 관련 문의 : 02-762-5980</p>
                <p>개인정보책임자 : 이정건</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-[#003399] hover:underline"
              >
                개인정보처리방침
              </Link>
            </div>

            <div className="text-xs text-gray-400">
              © {new Date().getFullYear()} 삼정펄프 주식회사. All rights
              reserved.
            </div>
          </div>

          <div className="mb-8 lg:mb-0">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 border-[#FEE500] bg-[#FEE500] hover:bg-[#FEE500]/90"
              asChild
            >
              <a
                href="https://pf.kakao.com/_vVnZG/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A1D1D]"
              >
                <MessageSquare className="h-5 w-5" />
                카카오톡 채널
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
