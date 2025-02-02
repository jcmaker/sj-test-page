"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="prose mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold">개인정보 처리방침</h1>

          <p className="mb-8 text-gray-600">
            삼정펄프(주)는 개인정보 보호를 위해 &ldquo;개인정보 보호법&rdquo;
            &ldquo;정보통신망 이용촉진 및 정보보호 등에 관한 법률&rdquo; 등 관련
            법령과 규정을 준수하고 있습니다. 삼정펄프(주)는 고객님의 개인정보
            유출 및 피해방지를 위해 최선을 다하겠습니다.
          </p>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              개인정보의 처리 목적, 수집 항목, 보유 및 이용 기간
            </h2>
            <p className="mb-4 text-gray-600">
              삼정펄프(주)는 고객님께 상담/문의접수 등을 편리하고 유익한 맞춥
              서비스를 제공하기 위해 최소한의 개인정보를 수집하여 이용하고
              있습니다.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold">[서비스 내용]</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">1. 인스타그램 이벤트운영</h4>
                    <ul className="list-inside list-disc space-y-1 pl-4 text-gray-600">
                      <li>
                        필수 수집 항목 (이벤트 참여) : 고객 SNS ID(인스타그램)
                      </li>
                      <li>
                        선택 수집 항목 (경품 배송) : 이름, 휴대전화번호, 주소
                      </li>
                      <li>보유 및 이용기간 : 경품발송 후 3개월</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      2. 홈페이지 문의하기 접수 (원단사업부 페이지)
                    </h4>
                    <ul className="list-inside list-disc space-y-1 pl-4 text-gray-600">
                      <li>
                        필수 수집 항목 (CONTEST US) : 이름, 연락처, 이메일
                      </li>
                      <li>보유 및 이용기간 : 서비스 완료 시 까지</li>
                      <li>
                        ※ 단, 관계 법령에 따라 파기하지 않고 보존하여야 하는
                        경우에는 해당 기간까지
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">3. 전화/문자/수화상담</h4>
                    <ul className="list-inside list-disc space-y-1 pl-4 text-gray-600">
                      <li>필수 수집 항목 : 전화번호</li>
                      <li>– 문의 접수 및 결과 회신, 서비스 만족도 조사 시행</li>
                      <li>
                        선택 수집 항목 : 이름, 주소, 이메일, 은행, 계좌번호,
                        예금주
                      </li>
                      <li>
                        – 제품회수, 보상품발송, 방문, 환불처리, 접수내용의 보완
                      </li>
                      <li>보유 및 이용 기간 : 3년</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">개인정보의 제3자 제공</h2>
            <p className="mb-4 text-gray-600">
              삼정펄프(주)는 고객님의 개인정보를 &ldquo;개인정보의 수집 항목 및
              이용 목적&rdquo;에서 규정한 범위 내에서 사용하며, 범위를 초과하여
              이용하거나 타인 또는 타기업, 기관에 제공하지 않습니다. 다만,
              아래의 경우에는 예외로 합니다.
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4 text-gray-600">
              <li>고객님으로부터 별도의 동의를 얻은 경우</li>
              <li>
                정부 관계부처가 합동으로 발표한 &ldquo;긴급상황 시 개인정보 처리
                및 보호수칙&rdquo;에 따라 재난, 감염병, 급박한 생명/신체 위험을
                초래하는 사건/사고, 급박한 재산손실 등의 긴급상황이 발생하는
                경우
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              개인정보 파기 절차 및 방법
            </h2>
            <p className="text-gray-600">
              보유기간의 경과, 개인정보의 처리 목적 달성 등 그 개인정보가
              불필요하게 되었을 때에는 해당 정보를 지체없이 파기합니다. 종이에
              출력된 개인정보는 분쇄기로 분쇄 또는 소각하여 파기하고, 전자적
              파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을
              사용하여 삭제합니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">개인정보보호책임자</h2>
            <p className="mb-4 text-gray-600">
              고객님의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기
              위하여 삼정펄프㈜는 개인정보보호책임자를 두고 있습니다. 개인정보와
              관련한 문의 사항 또는 열람 청구를 원하시면 아래의
              개인정보보호책임자에게 연락 주시기 바랍니다. 고객님의 문의 사항에
              신속하고 성실하게 답변해드리겠습니다.
            </p>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-bold">[개인정보 보호책임자]</h3>
              <ul className="space-y-2 text-gray-600">
                <li>성명 : 이정건</li>
                <li>직책 : 차장</li>
                <li>연락처 : 02-762-5980(직통번호 : 141), jglee@sjpulp.com</li>
                <li>※ 평일 9~12시 / 13~17시</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              정보주체의 권익침해에 대한 구제방법
            </h2>
            <p className="mb-4 text-gray-600">
              개인정보침해에 대한 신고나 상담이 필요하신 경우, 다음의 관련
              기관으로 문의하여 도움을 받으실 수 있습니다.
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4 text-gray-600">
              <li>[개인정보분쟁조정위원회] 1833-6972</li>
              <li>[개인정보침해신고센터] (국번 없이) 118</li>
              <li>[대검찰청] (국번 없이) 1301</li>
              <li>[경찰청] (국번 없이) 182</li>
            </ul>
          </section>

          <section className="rounded-lg bg-gray-50 p-6">
            <h2 className="mb-4 text-2xl font-bold">개인정보 처리 방침</h2>
            <p className="mb-4">
              이 개인정보 처리 방침은 2024년 7월 3일 부터 적용됩니다.
            </p>
            <p className="text-gray-600">
              이 개인정보 처리방침은 법령, 정책 또는 보안기술의 변경에 따라 그
              내용이 변경될 수 있으며, 내용의 추가 및 삭제 수정이 있을시에는
              삼정펄프(주) 웹사이트를 통해 이유 및 변경내용을 공지하도록
              하겠습니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
