import { memo } from "react";
import { BusinessCard } from "@/components/BusinessCard";
import type { Business } from "@/models/types";

interface BusinessGridProps {
  businesses: Business[];
  onSelect: (id: string) => void;
}

function BusinessGridBase({ businesses, onSelect }: BusinessGridProps) {
  return (
    <div className="px-4 sm:px-6 py-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        {businesses.map((b) => (
          <BusinessCard key={b.business_id} business={b} onClick={onSelect} />
        ))}
      </div>
    </div>
  );
}

export const BusinessGrid = memo(BusinessGridBase);
