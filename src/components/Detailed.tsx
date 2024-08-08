"use client";

import { useState } from "react";

import DetailCard from "./DetailCard";
import { useGetListingsQuery } from "@/redux/services/listing.service";

export default function Detailed() {
  const { data: listings = [], isLoading, isError } = useGetListingsQuery();
  const [sortOrder, setSortOrder] = useState("default"); // Default sort order

  // Sort listings based on the selected order
  const sortedListings = [...listings].sort((a, b) => {
    return sortOrder === "ascending" ? a.price - b.price : b.price - a.price;
  });

  // Handle sort order change
  const handleSortChange = (event: any) => {
    setSortOrder(event.target.value);
  };

  const { data: listingData } = useGetListingsQuery();
  return (
    <div className="w-[95%] m-auto space-y-3">
      <div className="space-y-2 md:space-y-0 md:flex justify-between items-center">
        <h1 className="text-xl font-semibold">Detailed Listings</h1>
        <div className="mb-4">
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="p-2 border rounded"
          >
            <option value="default">No filter</option>
            <option value="ascending">Sort by Price Ascending</option>
            <option value="descending">Sort by Price Descending</option>
          </select>
        </div>
      </div>
      <div
        className={`space-y-3 ${sortOrder == "default" ? "block" : "hidden"}`}
      >
        {listingData?.map((listing: any) => (
          <DetailCard
            key={listing?.id}
            image={listing?.image}
            title={listing?.title}
            description={listing?.description}
            cardist={listing?.car_dist}
            walkdist={listing?.walk_dist}
            traindist={listing?.train_dist}
            facilities={listing?.facilities}
            price={listing?.price}
            showwalk={listing?.walk_dist > 0 ? true : false}
            showtrain={listing?.train_dist > 0 ? true : false}
            showcar={listing?.car_dist > 0 ? true : false}
            reviews={listing?.reviews}
            showreview={listing?.reviews > 0 ? true : false}
            avg_ratings={listing?.avg_rating}
          />
        ))}
      </div>
      <div className={`space-y-3 ${sortOrder == "default" ? "hidden" : "block"}`}>
        
          {sortedListings.map((item) => (
            <DetailCard
            key={item?.id}
            image={item?.image}
            title={item?.title}
            description={item?.description}
            cardist={item?.car_dist}
            walkdist={item?.walk_dist}
            traindist={item?.train_dist}
            facilities={item?.facilities}
            price={item?.price}
            showwalk={item?.walk_dist > 0 ? true : false}
            showtrain={item?.train_dist > 0 ? true : false}
            showcar={item?.car_dist > 0 ? true : false}
            reviews={item?.reviews}
            showreview={item?.reviews > 0 ? true : false}
            avg_ratings={item?.avg_rating}
          />
          ))}
      </div>
    </div>
  );
}
