"use client";

import FeatureCard from "./FeatureCard";
import { useGetListingsQuery } from "@/redux/services/listing.service";

export default function Featured() {
  const { data: listingData } = useGetListingsQuery();

  return (
    <div className="w-[95%] m-auto overflow-hidden space-y-3">
      <h1 className="text-xl font-semibold">Featured Listings</h1>
      <div className="flex space-x-5 overflow-x-auto no-scrollbar scroll-smooth">
        {listingData?.slice(0, 5).map((listing: any) => (
          <FeatureCard
            key={listing.id}
            image={listing?.image}
            cardist={listing?.car_dist}
            price={listing?.price}
            title={listing?.title}
            traindist={listing?.train_dist}
            walkdist={listing?.walk_dist}
            showwalk={listing?.walk_dist > 0 ? true : false}
            showtrain={listing?.train_dist > 0 ? true : false}
            showcar={listing?.car_dist > 0 ? true : false}
            cheapest_in={listing?.cheapest_in}
          />
        ))}

        <div className="min-w-[240px] md:min-w-[300px] shadow-lg bg-bg-mid bg-cover relative">
          <div className="absolute inset-0 h-[100%]" style={{ backgroundColor: "rgba(50, 50, 50, 0.7)" }}></div>
          <div className="absolute bottom-0 p-4 space-y-4">
            <h2 className="text-white font-semibold text-sm">More collected properties near University College London</h2>
            <div>
                <button className="border-none bg-yellow-500 text-white py-1 w-[100%] rounded-sm text-sm font-semibold">Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
