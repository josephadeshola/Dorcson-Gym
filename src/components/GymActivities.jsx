import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const GymActivities = () => {
  const [api, setApi] = useState(null);
  
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const activities = [
    {
      name: "Weight Training",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
      description: "Build strength and muscle with our state-of-the-art weight training equipment"
    },
    {
      name: "Cardio Workouts",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Boost your cardiovascular health with our modern cardio machines"
    },
    {
      name: "Group Classes",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
      description: "Join energetic group fitness classes led by certified instructors"
    },
    {
      name: "Personal Training",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
      description: "Get personalized attention with our expert personal trainers"
    },
    {
      name: "Yoga & Pilates",
      image: "https://img.freepik.com/premium-photo/black-woman-yoga-stretching-with-mat-health-wellness-pilates-floor-home-young-african-female-person-yogi-holistic-warm-up-exercise-fitness-zen-workout-house_590464-457077.jpg?uid=R159996107&ga=GA1.1.1567084357.1721659617&semt=ais_hybrid&w=740",
      description: "Find balance and flexibility with our mind-body wellness programs"
    },
    {
      name: "CrossFit Training",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
      description: "Challenge yourself with high-intensity functional fitness workouts"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Gym Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of fitness activities designed to help you achieve your goals
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {activities.map((activity, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden hover:shadow-xl shadow-md border-0 cursor-pointer transition-shadow duration-300">
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {activity.name}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white border-gray-300 hover:bg-gray-50" />
          <CarouselNext className="hidden md:flex -right-12 bg-white border-gray-300 hover:bg-gray-50" />
        </Carousel>
      </div>
    </section>
  );
};

export default GymActivities;