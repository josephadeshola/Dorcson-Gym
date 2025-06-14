import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dumbbell, Activity, Heart, Timer } from "lucide-react";

const Equipment = () => {
  const equipmentCategories = [
    {
      name: "Cardio Equipment",
      icon: Heart,
      items: ["Treadmills", "Ellipticals", "Stationary Bikes", "Rowing Machines", "Stair Climbers"],
      description: "State-of-the-art cardio machines for optimal cardiovascular training"
    },
    {
      name: "Strength Training",
      icon: Dumbbell,
      items: ["Free Weights", "Cable Machines", "Smith Machine", "Power Racks", "Olympic Barbells"],
      description: "Complete range of strength equipment for all fitness levels"
    },
    {
      name: "Functional Training",
      icon: Activity,
      items: ["Kettlebells", "Battle Ropes", "TRX Systems", "Medicine Balls", "Resistance Bands"],
      description: "Versatile equipment for functional movement and conditioning"
    },
    {
      name: "Group Fitness",
      icon: Timer,
      items: ["Yoga Mats", "Stability Balls", "Foam Rollers", "Bosu Balls", "Pilates Equipment"],
      description: "Everything needed for group classes and recovery sessions"
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Equipment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Train with the latest fitness technology and equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipmentCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-8 w-8 text-red-500" />
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {category.name}
                    </CardTitle>
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Equipment Orientation Available
          </h3>
          <p className="text-xl text-red-100 mb-6">
            Not sure how to use our equipment? Our trainers provide free orientations for all new members.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule Orientation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Equipment;