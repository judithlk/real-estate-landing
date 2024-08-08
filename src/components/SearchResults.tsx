"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { useGetListingsQuery } from "@/redux/services/listing.service";

import DetailCard from "@/components/DetailCard";

export default function SearchResult() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const { data: listings = [], error, isLoading } = useGetListingsQuery();
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (listings.length > 0) {
      if (search) {
        const query = search.toLowerCase();
        const filtered = listings.filter(
          (listing: any) =>
            listing.title.toLowerCase().includes(query) ||
            listing.description.toLowerCase().includes(query) ||
            listing.price.toString().includes(query) ||
            listing.facilities.toString().includes(query)
        );
        setFilteredResults(filtered);
      } else {
        setFilteredResults(listings);
      }
    }
  }, [search, listings]);

  if (isLoading) {
    return (
      <div
        className={`container mx-auto p-4 ${search == "" ? "hidden" : "block"}`}
      >
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="container mx-auto p-4">Error!</div>;
  }

  const results = filteredResults.length > 0 ? filteredResults : null;

  return (
    <div
      className={`w-[90%] m-auto space-y-2 ${
        search == "" ? "hidden" : "block"
      }`}
    >
      <h1 className="text-xl font-semibold">Search results</h1>
      
      {results?.map((listing: any) => (
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
          showwalk={listing?.walk_dist > 0}
          showtrain={listing?.train_dist > 0}
          showcar={listing?.car_dist > 0}
          reviews={listing?.reviews}
          showreview={listing?.reviews > 0 ? true : false}
          avg_ratings={listing?.avg_rating}
        />
      ))}
    </div>
  );
}
