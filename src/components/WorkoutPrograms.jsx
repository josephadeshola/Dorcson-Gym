import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dumbbell, Heart, Timer } from "lucide-react";

const WorkoutPrograms = () => {
  const programs = [
    {
      name: "Strength Training",
      icon: Dumbbell,
      duration: "45-60 min",
      intensity: "High",
      description: "Build muscle and increase strength with our comprehensive weight training program.",
      features: ["Free weights", "Machines", "Progressive overload", "Form coaching"]
    },
    {
      name: "HIIT Cardio",
      icon: Heart,
      duration: "30-45 min",
      intensity: "Very High",
      description: "High-intensity interval training to maximize fat burn and improve cardiovascular health.",
      features: ["Interval training", "Cardio equipment", "Fat burning", "Endurance building"]
    },
    {
      name: "Functional Fitness",
      icon: Timer,
      duration: "45 min",
      intensity: "Medium",
      description: "Improve daily movement patterns and overall functional strength.",
      features: ["Bodyweight exercises", "Mobility work", "Core stability", "Movement quality"]
    }
  ];

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case "High": return "bg-orange-500";
      case "Very High": return "bg-red-500";
      case "Medium": return "bg-yellow-500";
      default: return "bg-green-500";
    }
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Workout Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our diverse range of training programs designed to meet your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="hover:shadow-lg cursor-pointer transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="h-12 w-12 text-red-500" />
                    <Badge className={`${getIntensityColor(program.intensity)} text-white`}>
                      {program.intensity}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{program.name}</CardTitle>
                  <p className="text-gray-600">{program.duration}</p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">What's included:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkoutPrograms;
