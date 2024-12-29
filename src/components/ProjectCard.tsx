interface ProjectProps {
  title: string;
  location: string;
  imageUrl: string;
  description: string;
  status: string;
  price: string;
}

export default function ProjectCard({ title, location, imageUrl, description, status, price }: ProjectProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer">
      <div className="relative h-64">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
            {status}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="text-blue-600 font-semibold mb-4">{price}</p>
        <p className="text-gray-700 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}