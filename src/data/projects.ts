import image1 from "../public/1.jpg";
import image3 from "../public/3.jpg";
import image6 from "../public/6.jpg";
import image10 from "../public/10.jpg";

export const projects = [
  {
    id: "maruti-villa",
    title: "Maruti Villa",
    location: "Vashiyar, Valsad, Gujarat",
    imageUrl: image3,
    description:
      "This stunning 3&4 BHK duplex bungalow offers a perfect blend of luxury, comfort, and modern living. Designed with a spacious open floor plan, the bungalow provides a warm and inviting atmosphere from the moment you step in.",
    status: "Now Selling",
    price: "",
    bedrooms: "3&4",
    bathrooms: 3,
    sqft: "1700 & 2000",
    parking: "1",
    amenities: [
      "CCTV Security",
      "Main Entrance Gate",
      "Club House",
      "Children Play Area",
      "Gym Area",
      "Senior Citizen Seating Area",
      "Street Light",
      "Borewell (Separate)",
      "RCC Road",
      "Underground Wiring",
    ],
    gallery: [image1, image6, image10, image3],
    locationMap:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d933.7626433519024!2d72.93395726004276!3d20.585992196077147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c336eaa081a7%3A0x35601a1129efef13!2sMaruti%20villa!5e0!3m2!1sen!2sin!4v1735991008785!5m2!1sen!2sin",
  },
  // ... (other projects remain the same, just add id field)

  {
    id: "Villa",
    title: "The Grand Villas",
    location: "Valsad, Gujarat",
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Luxury apartments with stunning city views and world-class amenities. Located in the heart of Manhattan, The Grand Residences offers unparalleled luxury living with spectacular views of the city skyline. Each residence features premium finishes, smart home technology, and access to exclusive amenities.",
    status: "Now Selling",
    price: "₹75,00,000",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2000,
    amenities: [
      "24/7 Concierge",
      "Rooftop Pool",
      "Fitness Center",
      "Private Theater",
      "Wine Cellar",
      "Pet Spa",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ],
    locationMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29749.225124037297!2d72.86179988398837!3d21.24559879853269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1735395564113!5m2!1sen!2sin",
  },
];
