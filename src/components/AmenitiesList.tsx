interface AmenitiesListProps {
  amenities: string[];
}

export default function AmenitiesList({ amenities }: AmenitiesListProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {amenities.map((amenity, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span>{amenity}</span>
        </div>
      ))}
    </div>
  );
}