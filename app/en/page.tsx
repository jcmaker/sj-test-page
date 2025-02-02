"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";

export default function EnglishHome() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="relative isolate pt-14">
        {/* Hero section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Our Promise for a
                <br />
                <span className="text-[#003399]">Sustainable Future</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We create reliable products through domestic manufacturing and
                processing.
                <br />
                Building a better future with environmentally conscious
                technology.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild>
                  <a href="/en/about">
                    Learn More
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
              Sustainable Management
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Eco-friendly Technology,
              <br />
              Innovation for a Better Future
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
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
    name: "Domestic Production",
    description:
      "We produce reliable products through carefully selected domestic materials and thorough quality control.",
  },
  {
    name: "Eco-friendly Process",
    description:
      "We minimize environmental impact and contribute to resource circulation through sustainable manufacturing processes.",
  },
  {
    name: "Innovative Technology",
    description:
      "We strive to provide better products and services through continuous research and development.",
  },
];
