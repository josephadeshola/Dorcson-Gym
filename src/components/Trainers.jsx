import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Trainers = () => {
  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "Strength & Conditioning",
      experience: "8 years",
      certifications: ["NASM-CPT", "CSCS"],
      image: "/placeholder.svg",
      bio: "Former collegiate athlete specializing in strength training and sports performance."
    },
    {
      name: "Mike Rodriguez",
      specialty: "HIIT & Cardio",
      experience: "6 years",
      certifications: ["ACSM-CPT", "TRX"],
      image: "/placeholder.svg",
      bio: "High-energy trainer focused on cardiovascular fitness and metabolic conditioning."
    },
    {
      name: "Emma Chen",
      specialty: "Yoga & Flexibility",
      experience: "10 years",
      certifications: ["RYT-500", "YIN"],
      image: "/placeholder.svg",
      bio: "Certified yoga instructor helping clients improve flexibility and mindfulness."
    },
    {
      name: "David Thompson",
      specialty: "Powerlifting",
      experience: "12 years",
      certifications: ["USAPL", "NASM-CPT"],
      image: "/placeholder.svg",
      bio: "Competition powerlifter with expertise in heavy compound movements."
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Trainers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our certified professionals are here to guide you every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {trainer.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                  <p className="text-red-600 font-semibold mb-2">{trainer.specialty}</p>
                  <p className="text-gray-600 mb-4">{trainer.experience} experience</p>
                  
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {trainer.certifications.map((cert, certIndex) => (
                      <Badge key={certIndex} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-sm">{trainer.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;