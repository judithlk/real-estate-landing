import Image from "next/image";
import { useState } from "react";

import { FaWalking } from "react-icons/fa";
import { MdDirectionsBus } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";

export default function FeatureCard({
  image,
  title,
  price,
  walkdist,
  cardist,
  traindist,
  showwalk,
  showcar,
  showtrain,
  cheapest_in
}: {
  image: string;
  title: string;
  price: string;
  walkdist: string;
  cardist: string;
  traindist: string;
  showwalk: boolean;
  showcar: boolean;
  showtrain: boolean;
  cheapest_in: string
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="min-w-[240px] md:min-w-[300px] shadow-lg h-fit bg-white">
      <div>
        <Image
          src={image}
          alt={title}
          width={150}
          height={100}
          className="w-[100%]"
          onLoad={() => setIsLoaded(true)}
          placeholder="blur"
          blurDataURL="/housingbg.jpg"
        />
      </div>
      <div className="p-3 space-y-1">
        <h1 className="font-semibold text-base">{title}</h1>
        <div className="flex items-baseline space-x-1">
          <h3 className="text-sm text-gray-600">From</h3> 
          <h1 className="text-xl font-bold text-orange-600">&pound;{price}</h1>
          <h3 className="text-sm text-gray-600">/week</h3>
        </div>
        <div className="bg-blue-900 text-white p-1 w-fit">
          <h3 className="text-xs font-semibold">Cheapest in the {cheapest_in}</h3>
        </div>
        <div className="flex space-x-3 md:space-x-5 text-sm text-gray-600 pt-2">
          <div className={`flex space-x-1 items-center ${showwalk == true ? "block" : "hidden"}`}>
            <FaWalking className="size-4" />
            <h1>{walkdist}mins</h1>
          </div>
          <div className={`flex space-x-1 items-center ${showtrain == true ? "block" : "hidden"}`}>
          <MdDirectionsBus className="size-4" />
            <h1>{traindist}mins</h1>
          </div>
          <div className={`flex space-x-1 items-center ${showcar == true ? "block" : "hidden"}`}>
          <FaCarAlt className="size-4" />
            <h1>{cardist}mins</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
