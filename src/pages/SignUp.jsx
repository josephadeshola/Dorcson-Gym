import { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
import { Input } from "../../src/components/ui/input";
import { Label } from "../../src/components/ui/label";
import { Checkbox } from "../../src/components/ui/checkbox";
import { Activity, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Button } from "../../src/components/ui/button";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    console.log(formData);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Authentication logic will be implemented with Supabase
    setTimeout(()=>{
      setIsLoading(false)
      console.log("Signup attempt:", formData);
    },2000)
  };

  const handleGoogleSignUp = () => {
    console.log("Google sign-up clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500/5 to-transparent rounded-full blur-3xl animate-spin opacity-30"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>
      <div className="max-w-md w-full space-y-8 mb-10 relative z-10">
        <div className="text-center transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mt-20 justify-center space-x-2 mb-6 group">
            <div className="relative">
              <Activity className="h-12 w-12 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              DorcsonGym
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in">
            Join DorcsonGym
          </h2>
          <p className="text-gray-400 animate-fade-in delay-200">
            Start your fitness transformation today
          </p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50 shadow-2xl transform hover:scale-[1.02] transition-all duration-300 hover:shadow-red-500/10">
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-white">
                Full Name
              </Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className="pl-10 pr-12 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:bg-gray-800 transition-all duration-300 h-12 rounded-xl backdrop-blur-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10 pr-12 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:bg-gray-800 transition-all duration-300 h-12 rounded-xl backdrop-blur-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="pl-10 pr-12 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:bg-gray-800 transition-all duration-300 h-12 rounded-xl backdrop-blur-sm"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-white">
                Confirm Password
              </Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  className="pl-10 pr-12 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:bg-gray-800 transition-all duration-300 h-12 rounded-xl backdrop-blur-sm"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) =>
                  handleInputChange("agreeToTerms", checked)
                }
                className="border-gray-600 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
              />
              <Label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the{" "}
                <Link to="/terms" className="text-red-500 hover:text-red-400">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-red-500 hover:text-red-400">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            {isLoading ? (
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 h-12 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/25 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  <span>Creating an Account...</span>
                </div>
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 h-12 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/25 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
                disabled={!formData.agreeToTerms}
              >
                Create Account
              </Button>
            )}
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              onClick={handleGoogleSignUp}
              variant="outline"
              className="w-full mt-4 bg-white/95 hover:bg-white text-black border-gray-300 h-12 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] cursor-pointer hover:shadow-lg group backdrop-blur-sm"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign up with Google
            </Button>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-red-500 hover:text-red-400 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
