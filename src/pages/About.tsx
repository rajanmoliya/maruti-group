import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="pt-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Maruti Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in luxury real estate, delivering exceptional
            properties and unparalleled service since 1970
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1970, Maruti Group has established itself as a leader
              in the luxury real estate market. We pride ourselves on our
              curated selection of premium properties and our commitment to
              exceptional service.
            </p>
            <p className="text-gray-600">
              With decades of experience and deep market knowledge, we help our
              clients find their perfect luxury home or investment property. Our
              team of expert agents combines local expertise with global reach.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Modern office building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide exceptional real estate services while maintaining the
              highest standards of integrity and professionalism.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and respected luxury real estate company,
              known for our exceptional properties and service.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Excellence, integrity, innovation, and dedication to client
              satisfaction guide everything we do.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Expert Agents</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Global Locations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
