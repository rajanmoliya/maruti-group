interface LocationMapProps {
  locationMap: string;
}

export default function LocationMap({ locationMap }: LocationMapProps) {
  return (
    <div style={{ width: "100%", height: "400px", overflow: "hidden" }}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`${locationMap}`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
