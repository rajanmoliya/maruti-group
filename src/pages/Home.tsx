import Hero from "../components/Hero";
import ProjectsList from "../components/ProjectsList";
import GoogleMap from "../components/GoogleMap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Hero />
      <ProjectsList />
      <section id="map" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600">
              Find our properties across prime locations
            </p>
          </div>
          <GoogleMap />
        </div>
      </section>
    </div>
  );
}
