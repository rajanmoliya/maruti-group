import ImageCarousel from "./ImageCarousel";

export default function Hero() {
  return (
    <div className="relative h-screen" id="home">
      <ImageCarousel />

      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div className="max-w-4xl px-4 space-y-6">
          <div className="animate-fade-in-down">
            <span className="text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
              Welcome to Maruti Group
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-2 mb-4">
              Discover Your Dream Property
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Explore our exclusive collection of luxury properties and
              prestigious developments
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#map"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              View Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
