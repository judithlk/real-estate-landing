"use client"

import React from "react";
import { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

export default function Header() {
  const { register, watch, handleSubmit } = useForm();
  const router = useRouter();
  const search = watch('search', '');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      router.push(`/?search=${search}`);
    }, 300); // Debounce time of 300ms

    return () => clearTimeout(delayDebounceFn);
  }, [search, router]);
  return (
    <div className="w-[100%] space-y-5 md:space-y-0 md:flex justify-between items-center py-1 pb-3 md:pb-0 px-5 bg-yellow-500 z-50">
      <div className="w-[100%] pb-3 md:pb-0 border-b border-yellow-300 md:border-none md:w-[50%] flex justify-between md:justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Organization logo"
            width={90}
            height={90}
          />
        </div>
        <div className="flex flex-row space-x-7">
          <Link href="#" className="block text-base hover:text-white">
            <h1>Home</h1>
          </Link>
          <Link href="/" className="block text-base hover:text-white">
            <h1>Listings</h1>
          </Link>
        </div>
      </div>
      <div className="flex justify-start md:justify-end">
        <form>
          <input type="text" placeholder="Start typing to search..." {...register("search")} className="p-1 focus-visible:outline-none rounded-sm bg-transparent border border-yellow-500 border-b-black placeholder-gray-700" />
        </form>
      </div>
    </div>
  );
}
