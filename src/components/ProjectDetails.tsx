import { X, MapPin, Home, Bath, Maximize } from "lucide-react";

interface ProjectDetailsProps {
  project: {
    title: string;
    location: string;
    imageUrl: string;
    description: string;
    status: string;
    price: string;
    bedrooms: string;
    bathrooms: number;
    sqft: string;
    amenities: string[];
    gallery: string[];
    parking: string;
  };
  onClose: () => void;
}

export default function ProjectDetails({
  project,
  onClose,
}: ProjectDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {project.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-600" />
              <span>{project.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5 text-blue-600" />
              <span>{project.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="w-5 h-5 text-blue-600" />
              <span>{project.sqft} sqft</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Amenities</h3>
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
          <div>
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <div className="flex items-start gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
