import { useLocation, useParams } from "react-router-dom";
import {
  Home,
  Bath,
  Maximize,
  MapPin,
  Sun,
  Wind,
  ParkingCircle,
  LocateIcon,
  Cable,
  Droplet,
  BrickWall,
} from "lucide-react";

import { projects } from "../data/projects";
import ImageGallery from "../components/ImageGallery";
import LocationMap from "../components/LocationMap";
import ContactAgent from "../components/ContactAgent";
import { useEffect } from "react";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="h-[60vh] relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 bg-blue-600 text-sm rounded-full mb-4">
              {project.status}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {project.title}
            </h1>
            <div className="flex items-center space-x-2 text-lg">
              <MapPin className="h-5 w-5" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Details */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="font-semibold">{project.price}</p>
                  </div>
                </div> */}
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Bedrooms</p>
                    <p className="font-semibold">{project.bedrooms}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Bathrooms</p>
                    <p className="font-semibold">{project.bathrooms}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Area</p>
                    <p className="font-semibold">{project.sqft} sqft</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ParkingCircle className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Parking</p>
                    <p className="font-semibold">{project.parking}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                About This Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
              <ImageGallery images={project.gallery} />
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Property Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* <div className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-blue-600" />
                  <span>Smart Lock System</span>
                </div> */}
                <div className="flex items-center gap-2">
                  <LocateIcon className="h-5 w-5 text-blue-600" />
                  <span>Prime Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-blue-600" />
                  <span>Natural Light</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-5 w-5 text-blue-600" />
                  <span>China Mosiac + Waterproofing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cable className="h-5 w-5 text-blue-600" />
                  <span>High Quality Wiring</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplet className="h-5 w-5 text-blue-600" />
                  <span>24/7 Water Supply</span>
                </div>
                <div className="flex items-center gap-2">
                  <BrickWall className="h-5 w-5 text-blue-600" />
                  <span>24x38 Vitrified Flooring </span>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <LocationMap locationMap={project.locationMap} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ContactAgent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
