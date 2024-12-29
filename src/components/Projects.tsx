import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

const projects = [
  {
    title: "The Grand Residences",
    location: "Downtown Manhattan, NY",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Luxury apartments with stunning city views and world-class amenities. Located in the heart of Manhattan, The Grand Residences offers unparalleled luxury living with spectacular views of the city skyline. Each residence features premium finishes, smart home technology, and access to exclusive amenities.",
    status: "Now Selling",
    price: "$2,500,000",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2000,
    amenities: [
      "24/7 Concierge",
      "Rooftop Pool",
      "Fitness Center",
      "Private Theater",
      "Wine Cellar",
      "Pet Spa"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    title: "Oceanfront Villas",
    location: "Miami Beach, FL",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Exclusive beachfront properties with private access to pristine beaches. These luxurious villas offer the perfect blend of indoor and outdoor living with direct beach access and panoramic ocean views.",
    status: "Coming Soon",
    price: "$3,800,000",
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3500,
    amenities: [
      "Private Beach Access",
      "Infinity Pool",
      "Outdoor Kitchen",
      "Smart Home System",
      "Private Dock",
      "Beach Service"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    title: "Mountain View Estates",
    location: "Aspen, CO",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Premium mountain homes with panoramic views and ski-in/ski-out access. Experience luxury mountain living with direct access to world-class ski slopes and breathtaking mountain vistas.",
    status: "Pre-selling",
    price: "$4,200,000",
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4200,
    amenities: [
      "Ski-in/Ski-out Access",
      "Private Hot Tub",
      "Wine Room",
      "Home Theater",
      "Heated Garage",
      "Heated Driveway"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1613545325268-d614e1358a65?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            Discover our collection of prestigious developments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} onClick={() => setSelectedProject(project)}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}