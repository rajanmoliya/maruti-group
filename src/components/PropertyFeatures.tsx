import { Key, Ruler, Sun, Wind } from 'lucide-react';

export default function PropertyFeatures() {
  const features = [
    { icon: Key, label: 'Smart Lock System' },
    { icon: Ruler, label: 'High Ceilings' },
    { icon: Sun, label: 'Natural Light' },
    { icon: Wind, label: 'Central Air' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {features.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-blue-600" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}