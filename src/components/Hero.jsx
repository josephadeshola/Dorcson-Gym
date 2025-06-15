// import { Button } from "@/components/ui/button";
import { Dumbbell, Timer, Heart } from "lucide-react";
import { Button } from "./ui/button";
import MembershipPlans from "./MembershipPlans";
import WorkoutPrograms from "./WorkoutPrograms";
import Trainers from "./Trainers";
import Equipment from "./Equipment";
import Contact from "./Contact";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-900">
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in mt-32">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            UNLEASH YOUR
            <span className="text-red-500 block">POTENTIAL</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your body and mind with our state-of-the-art equipment, 
            expert trainers, and motivating community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-md">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-md">
              View Programs
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
            <Dumbbell className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Expert Training</h3>
            <p className="text-gray-300">Professional trainers to guide your fitness journey</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
            <Timer className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">24/7 Access</h3>
            <p className="text-gray-300">Train whenever it fits your schedule</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
            <p className="text-gray-300">Join a supportive fitness community</p>
          </div>
        </div>
      </div>
    </section>
         <MembershipPlans/>
         <WorkoutPrograms/>
         <Trainers/>
         <Equipment/>
         <Contact/>
         <Footer/>
    </>
  );
};

export default Hero;