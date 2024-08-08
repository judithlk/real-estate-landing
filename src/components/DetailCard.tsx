"use client";

import { useState } from "react";
import Image from "next/image";

import { FaWalking, FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { MdDirectionsBus, MdOutlineLibraryAdd } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

export default function DetailCard({
  image,
  title,
  price,
  description,
  walkdist,
  cardist,
  traindist,
  facilities,
  showwalk,
  showcar,
  showtrain,
  reviews,
  avg_ratings,
  showreview,
}: {
  image: string;
  title: string;
  price: string;
  description: string;
  walkdist: string;
  cardist: string;
  traindist: string;
  facilities: string[];
  showwalk: boolean;
  showcar: boolean;
  showtrain: boolean;
  reviews: number;
  avg_ratings: number;
  showreview: boolean;
}) {
  const goldStars = avg_ratings;
  const noStars = 5 - avg_ratings;
  const [liked, setLiked] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-white shadow-2xl rounded-sm w-full p-5 md:flex justify-between">
      <div className="md:w-[28%] relative">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-[100%]"
          onLoad={() => setIsLoaded(true)}
          placeholder="blur"
          blurDataURL="/housingbg.jpg"
        />
        <div className="absolute top-4 right-4 space-y-2">
          <button
            className="flex items-center justify-center rounded-full bg-gray-100 p-2"
            onClick={() => setLiked(!liked)}
          >
            {liked == false ? (
              <FaRegHeart className="fill-gray-600" />
            ) : (
              <FaHeart className="fill-red-600" />
            )}
          </button>
          <button className="flex items-center justify-center rounded-full bg-gray-100 p-2">
            <MdOutlineLibraryAdd className="fill-gray-600" />
          </button>
        </div>
      </div>
      <div className="md:w-[70%]">
        <div className="space-y-4 sm:space-y-0 sm:flex w-[100%] justify-between">
          <div className="sm:w-[80%] space-y-2">
            <div className="flex space-x-3 items-center">
              <h2 className="font-semibold text-xl">{title}</h2>
              <div
                className={`${
                  showreview == true ? "block" : "hidden"
                } flex space-x-1 items-center`}
              >
                {Array.from({ length: goldStars }, (_, index) => (
                  <FaStar key={index} className="fill-yellow-500" />
                ))}
                {Array.from({ length: noStars }, (_, index) => (
                  <FaStar key={"nostar" + index} className="fill-gray-400" />
                ))}

                <h2>({reviews})</h2>
              </div>
            </div>
            <p className="text-gray-600">{description}</p>
            <div className="flex space-x-3 text-gray-800 flex-wrap">
              <div>
                <h1 className="font-semibold">Distance to campus:</h1>
              </div>
              <div
                className={`flex space-x-1 items-center ${
                  showwalk == true ? "block" : "hidden"
                }`}
              >
                <FaWalking className="size-4" />
                <h1>{walkdist}mins</h1>
              </div>
              <div
                className={`flex space-x-1 items-center ${
                  showtrain == true ? "block" : "hidden"
                }`}
              >
                <MdDirectionsBus className="size-4" />
                <h1>{traindist}mins</h1>
              </div>
              <div
                className={`flex space-x-1 items-center ${
                  showcar == true ? "block" : "hidden"
                }`}
              >
                <FaCarAlt className="size-4" />
                <h1>{cardist}mins</h1>
              </div>
            </div>
            <div className="flex space-x-3">
              <h1 className="font-semibold">Facilities:</h1>
              <h1 className="capitalize text-gray-600">
                {facilities.join(", ")}
              </h1>
            </div>
            <div className="flex space-x-3">
              <div className="bg-blue-900 text-white p-1 w-fit">
                <h3 className="text-xs">Cheapest in the past months</h3>
              </div>
              <div className="bg-blue-900 text-white p-1 w-fit">
                <h3 className="text-xs">Price drop</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between sm:w-[24%]">
            <div className="flex items-center space-x-1 text-center">
              <div className="rounded-full p-1 bg-orange-500">
                <HiLightningBolt className="size-3 fill-white" />
              </div>
              <h3 className="text-sm">From</h3>
              <h3 className="text-2xl font-bold text-orange-700">
                &pound;{price}
              </h3>
              <h3 className="text-sm">/week</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <h3>Entire Place</h3>
                <h3>&pound;{price}</h3>
              </div>
              <button className="block bg-yellow-400 font-semibold w-full m-auto p-3">
                View rooms
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
