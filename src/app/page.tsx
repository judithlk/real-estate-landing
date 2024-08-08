"use client";

import { Suspense } from "react";

import Link from "next/link";

import Header from "@/components/Header";
import Featured from "@/components/Featured";
import Detailed from "@/components/Detailed";
import SearchResult from "@/components/SearchResults";

import { MdArrowUpward } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-bg-mid md:bg-bg-one bg-center bg-fixed bg-cover bg-no-repeat relative z-0 py-2 space-y-10">
        <div
          className="absolute inset-0 z-[-1]"
          style={{ backgroundColor: "rgba(230, 230, 230, 0.9)" }}
        />
        <Suspense
          fallback={
            <div className="container mx-auto p-4">
              Loading search results...
            </div>
          }
        >
          <SearchResult />
        </Suspense>
        <Featured />
        <Detailed />

          <Link href="#" className="block fixed bottom-5 right-10">
          
        <div className=" rounded-full bg-yellow-500 p-3">
          <MdArrowUpward className="size-8" />
        </div>
          </Link>
      </main>
    </>
  );
}
